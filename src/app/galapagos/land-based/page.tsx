import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';
import { landBasedTours } from '@/data/land-based-tours';

export const metadata: Metadata = {
    title: "Galapagos Land Based Tours | Island Hopping Packages",
    description: "Experience the Galapagos on land. Stay in eco-lodges and hotels while exploring the islands with our daily excursions and island hopping tours.",
};

export default function GalapagosLandBasedPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristList",
        "name": "Galapagos Land Based Tours",
        "description": "Island hopping and hotel-based tours in Galapagos",
        "url": "https://example.com/galapagos/land-based",
        "itemListElement": landBasedTours.map((tour, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://example.com/galapagos/land-based/${tour.slug}`,
            "name": tour.title
        }))
    };

    return (
        <div className="min-h-screen pb-20 bg-gray-50">
            <JsonLd data={jsonLd} />
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/galapagos_sea_lion_beach_relaxed.png"
                        alt="Galapagos Land Based Tour"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Land Based Tours</h1>
                    <p className="text-xl font-light tracking-wide">Immerse yourself in the local rhythm</p>
                </div>
            </section>

            {/* Tour List */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {landBasedTours.map((tour) => (
                        <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
                            <div className="relative h-64 w-full">
                                <Image
                                    src={tour.highlightImage}
                                    alt={tour.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wide">
                                    {tour.duration}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-serif font-bold text-[var(--color-secondary)] mb-2 line-clamp-2 h-16">{tour.title}</h3>
                                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">{tour.description}</p>

                                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                                    <span className="text-[var(--color-brand-green)] font-bold text-lg">{tour.price}</span>
                                    <Link
                                        href={`/galapagos/land-based/${tour.slug}`}
                                        className="px-6 py-2 bg-[var(--color-brand-green)] text-white text-sm font-bold rounded-full hover:bg-[var(--color-brand-green-dark)] transition-colors"
                                    >
                                        View Itinerary
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <Link href="/galapagos" className="text-[var(--color-brand-green)] hover:underline flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Back to Galapagos overview
                    </Link>
                </div>
            </section>
        </div>
    );
}
