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
        "url": "https://eosecuador.com/galapagos/land-based",
        "itemListElement": landBasedTours.map((tour, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://eosecuador.com/galapagos/land-based/${tour.slug}`,
            "name": tour.title
        }))
    };

    return (
        <div className="min-h-screen pb-20 bg-background">
            <JsonLd data={jsonLd} />
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/galapagos/land-based-tours/galapagos_sea_lion_beach_relaxed.png"
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

            {/* SEO Description Section */}
            <section className="container mx-auto px-4 pt-16 pb-8 text-center max-w-4xl">
                <h2 className="text-3xl font-serif font-bold text-(--color-secondary) dark:text-white mb-6">Discover Our Premier Galapagos Land Based Tours</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                    Experience the magic of the archipelago at your own pace with our meticulously crafted <strong>Galapagos land based tours</strong> and <strong>island hopping packages</strong>. Perfect for travelers who prefer sleeping on solid ground, these tours combine comfortable stays in sustainable eco-lodges and boutique hotels with thrilling daily excursions. Explore iconic sites across Santa Cruz, Isabela, and San Cristobal islands, engage with local communities, relax on pristine white-sand beaches, and enjoy close encounters with the spectacular local wildlife. Our diverse land-based itineraries offer flexibility, comfort, and an authentic way to immerse yourself in the natural wonders of the <strong>Galapagos Islands</strong>.
                </p>
            </section>

            {/* Tour List */}
            <section className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {landBasedTours.map((tour) => (
                        <div key={tour.id} className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg dark:shadow-[0_4px_20px_0_rgba(255,255,255,0.08)] overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col border border-transparent dark:border-white/5">
                            <div className="relative h-64 w-full">
                                <Image
                                    src={tour.highlightImage}
                                    alt={tour.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-(--color-secondary) uppercase tracking-wide">
                                    {tour.duration}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col grow text-gray-800 dark:text-gray-200">
                                <h3 className="text-2xl font-serif font-bold text-(--color-secondary) mb-2 line-clamp-2 h-16">{tour.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 grow">{tour.description}</p>

                                <div className="border-t border-gray-100 dark:border-gray-800 pt-4 flex items-center justify-between">
                                    <span className="text-brand-green font-bold text-lg">{tour.price}</span>
                                    <Link
                                        href={`/galapagos/land-based/${tour.slug}`}
                                        className="px-6 py-2 bg-brand-green text-white text-sm font-bold rounded-full hover:bg-brand-green-dark transition-colors"
                                    >
                                        View Itinerary
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <Link href="/galapagos" className="text-brand-green hover:underline flex items-center gap-2">
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
