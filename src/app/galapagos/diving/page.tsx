import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Galapagos Diving Cruises | Liveaboard Scuba Diving",
    description: "Dive with hammerhead sharks and marine iguanas. Our specialized Galapagos diving cruises take you to the best dive sites in the marine reserve.",
};

export default function GalapagosDivingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristList",
        "name": "Galapagos Diving Cruises",
        "description": "Liveaboard diving expeditions in Galapagos",
        "url": "https://example.com/galapagos/diving"
    };

    return (
        <div className="min-h-screen pb-20">
            <JsonLd data={jsonLd} />
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/galapagos_hammerhead_shark.png"
                        alt="Galapagos Diving"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Diving Cruises</h1>
                    <p className="text-xl font-light tracking-wide">Explore the underwater world of Darwin & Wolf</p>
                </div>
            </section>

            {/* Content Placeholder */}
            <section className="container mx-auto px-4 py-16">
                <p className="text-center text-gray-500 italic">Content for Diving cruises coming next...</p>
                <div className="flex justify-center mt-8">
                    <Link href="/galapagos" className="text-[var(--color-brand-green)] hover:underline">← Back to Galapagos</Link>
                </div>
            </section>
        </div>
    );
}
