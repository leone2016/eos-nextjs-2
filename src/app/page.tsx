import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import MissionSection from "@/components/MissionSection";
import DestinationPreview from "@/components/DestinationPreview";
import Partners from "@/components/Partners";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "EOS Ecuador Travel",
    "image": "https://example.com/hero.jpg",
    "@id": "https://example.com",
    "url": "https://example.com",
    "telephone": "+593986945555",
    "email": "eos@eosecuador.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Jerónimo Carrion E8-132",
      "addressLocality": "Quito",
      "addressCountry": "EC"
    },
    "description": "Eos Ecuador is a travel agency dedicated to promoting responsible and sustainable tourism in Galapagos and Ecuador.",
    "sameAs": [
      "https://www.facebook.com/eosecuador",
      "https://www.instagram.com/eosecuador"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={jsonLd} />
      <Hero />
      <MissionSection />
      <DestinationPreview />
      <Partners />
    </div>
  );
}
