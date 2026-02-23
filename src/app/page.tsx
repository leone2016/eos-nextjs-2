import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import MissionSection from "@/components/MissionSection";
import DestinationPreview from "@/components/DestinationPreview";
import EcuadorExperiences from "@/components/EcuadorExperiences";
import Partners from "@/components/Partners";
import TripAdvisorReviews from "@/components/TripAdvisorReviews";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "EOS Ecuador Travel",
    "image": "https://eosecuador.com/hero.jpg",
    "@id": "https://eosecuador.com",
    "url": "https://eosecuador.com",
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
      "https://www.facebook.com/profile.php?id=61588367465192",
      "https://www.instagram.com/eos_ecuador/"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={jsonLd} />
      <Hero />
      <MissionSection />
      <DestinationPreview />
      <EcuadorExperiences />
      <TripAdvisorReviews />
      <Partners />
    </div>
  );
}
