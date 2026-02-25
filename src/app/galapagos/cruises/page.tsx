import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';
import CruisesBrowser from '@/components/galapagos/CruisesBrowser';
import { cruises } from '@/data/cruises';

export const metadata: Metadata = {
    title: "Galapagos Luxury Cruises | Small Ship Expeditions",
    description: "Browse our curated selection of Galapagos cruises. From luxury yachts to intimate catamarans, find the perfect vessel for your island adventure.",
};

export default function GalapagosCruisesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristList",
        "name": "Galapagos Cruises",
        "description": "Selection of cruise ships for Galapagos expeditions",
        "url": "https://eosecuador.com/galapagos/cruises",
        "itemListElement": cruises.map((cruise, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://eosecuador.com/galapagos/cruises/${cruise.slug}`,
            "name": cruise.name
        }))
    };

    return (
        <div className="min-h-screen pb-20 bg-background">
            <JsonLd data={jsonLd} />
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/galapagos/galapagos-cruises/galapagos_luxury_yacht.png"
                        alt="Galapagos Cruises"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Galapagos Cruises</h1>
                    <p className="text-xl font-light tracking-wide text-white/90">Explore the enchanted islands in style</p>
                </div>
            </section>

            {/* SEO Description Section */}
            <section className="container mx-auto px-4 py-16 text-center max-w-4xl">
                <h2 className="text-3xl font-serif font-bold text-[var(--color-secondary)] dark:text-white mb-6">Experience the Best Galapagos Luxury Cruises</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                    Embark on a once-in-a-lifetime journey with our exclusive <strong>Galapagos luxury cruises</strong>. Navigate through the legendary archipelago aboard top-tier yachts and ecological catamarans designed for ultimate comfort and minimal environmental impact. Our curated <strong>Galapagos Islands cruise itineraries</strong> offer unparalleled opportunities to witness unique wildlife, including giant tortoises, marine iguanas, and blue-footed boobies, led by expert naturalist guides. Whether you are looking for a spectacular family adventure, a romantic getaway, or a specialized wildlife expedition, our small-ship cruises provide an intimate and comprehensive exploration of this magnificent UNESCO World Heritage site.
                </p>
            </section>

            <CruisesBrowser />
        </div>
    );
}
