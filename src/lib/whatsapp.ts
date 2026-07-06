import { CartItem } from "@/types/cart";

type OrderData = {
  name: string;
  phone: string;
  address?: string;
  notes?: string;
  items: CartItem[];
  total: number;
};

export function generateWhatsAppMessage(
  data: OrderData
) {
  const orderItems = data.items
    .map(
      (item) =>
        `${item.name} x ${item.quantity} = Rs ${
          item.price * item.quantity
        }`
    )
    .join("%0A");

  return (
    `*🍕 New Order - The Pizza Shop*%0A%0A` +
    `👤 Name: ${data.name}%0A` +
    `📞 Phone: ${data.phone}%0A` +
    `🏠 Address: ${data.address || "N/A"}%0A` +
    `📝 Notes: ${data.notes || "N/A"}%0A%0A` +
    `🛒 Items:%0A${orderItems}%0A%0A` +
    `💰 Total: Rs ${data.total}`
  );
}