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
        "url": "https://eosecuador.com/galapagos/diving"
    };

    return (
        <div className="min-h-screen pb-20">
            <JsonLd data={jsonLd} />
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/galapagos/land-based-tours/galapagos_hammerhead_shark.png"
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

            {/* SEO Description Section */}
            <section className="container mx-auto px-4 pt-16 pb-8 text-center max-w-4xl">
                <h2 className="text-3xl font-serif font-bold text-(--color-secondary) dark:text-white mb-6">Unforgettable Galapagos Liveaboard Diving Cruises</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                    Plunge into one of the world&apos;s most spectacular marine reserves with our specialized <strong>Galapagos diving cruises</strong>. Designed for passionate scuba divers, our liveaboard expeditions take you to remote, world-renowned dive sites such as Darwin and Wolf Islands. Experience the thrill of swimming alongside massive schools of hammerhead sharks, playful sea lions, majestic manta rays, and unique marine iguanas. Our expert dive masters ensure a safe, exhilarating, and unforgettable underwater adventure. Discover why the <strong>Galapagos Marine Reserve</strong> is consistently ranked as a top global diving destination and book your ultimate scuba diving holiday today.
                </p>
            </section>

            {/* Content Placeholder */}
            <section className="container mx-auto px-4 py-8">
                <p className="text-center text-gray-500 italic">Content for Diving cruises coming next...</p>
                <div className="flex justify-center mt-8">
                    <Link href="/galapagos" className="text-brand-green hover:underline">← Back to Galapagos</Link>
                </div>
            </section>
        </div>
    );
}
