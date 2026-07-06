import type { Metadata } from "next";
import "./globals.css";

import { Poppins, Anton } from "next/font/google";
import { Toaster } from 'react-hot-toast';

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import CartSidebar from "@/components/business/CartSidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "The Pizza Shop | Barki Road Lahore - Order till 2AM",
  description: "Lahore's best pizza, burgers & wraps. Late night delivery till 2AM. Order on WhatsApp: 0301-8408177",
  keywords: "pizza lahore, barki road pizza, late night food lahore, the pizza shop",
  openGraph: {
    title: "The Pizza Shop - Barki Road",
    description: "Fresh pizza & burgers. Delivery till 2AM",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${anton.variable}`}>
      <body className="font-poppins bg-[#0A0A0A] text-white antialiased">
        
        <TopBar />
        <Navbar />
        <CartSidebar />
        {children}
        
        {/* TOAST NOTIFICATIONS */}
        <Toaster 
          position="bottom-center"
          toastOptions={{
            duration: 2000,
            style: {
              background: '#1a1a1a',
              color: '#fff',
              border: '1px solid rgba(255,77,0,0.3)',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '600',
            },
            success: {
              iconTheme: {
                primary: '#FF4D00',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}