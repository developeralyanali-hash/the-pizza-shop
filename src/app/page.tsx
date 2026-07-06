// src/app/page.tsx
import Hero from "@/components/business/Hero";
import PopularItems from "@/components/business/PopularItems";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PopularItems />
      <WhyChooseUs />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      {/* Yahan baki sections add kar: About, Features, Footer etc */}
    </main>
  );
}