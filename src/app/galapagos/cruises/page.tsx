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
        "url": "https://example.com/galapagos/cruises",
        "itemListElement": cruises.map((cruise, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://example.com/galapagos/cruises/${cruise.slug}`,
            "name": cruise.name
        }))
    };

    return (
        <div className="min-h-screen pb-20 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
            <JsonLd data={jsonLd} />
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/galapagos_luxury_yacht.png"
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

            <CruisesBrowser />
        </div>
    );
}
