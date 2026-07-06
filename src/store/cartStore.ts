import { create } from "zustand";
import toast from 'react-hot-toast'; // ADD THIS

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;

  openCart: () => void;
  closeCart: () => void;

  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;

  clearCart: () => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  addItem: (item) => {
    const existing = get().items.find(
      (i) => i.id === item.id
    );

    if (existing) {
      set({
        items: get().items.map((i) =>
          i.id === item.id
            ? {
                ...i,
                quantity: i.quantity + 1,
              }
            : i
        ),
      });
      toast.success(`${item.name} quantity updated!`, {
        icon: '🛒',
      });
    } else {
      set({
        items: [
          ...get().items,
          {
            ...item,
            quantity: 1,
          },
        ],
      });
      toast.success(`${item.name} added to cart!`, {
        icon: '✅',
      });
    }
  },

  removeItem: (id) => {
    const item = get().items.find(i => i.id === id);
    set({
      items: get().items.filter(
        (i) => i.id !== id
      ),
    });
    if (item) toast.error(`${item.name} removed`, { icon: '🗑️' });
  },

  increaseQty: (id) => {
    set({
      items: get().items.map((i) =>
        i.id === id
          ? {
              ...i,
              quantity: i.quantity + 1,
            }
          : i
      ),
    });
  },

  decreaseQty: (id) => {
    set({
      items: get().items
        .map((i) =>
          i.id === id
            ? {
                ...i,
                quantity: i.quantity - 1,
              }
            : i
        )
        .filter((i) => i.quantity > 0),
    });
  },

  clearCart: () => set({ items: [] }),
}));