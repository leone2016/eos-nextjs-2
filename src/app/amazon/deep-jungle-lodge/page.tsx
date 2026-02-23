import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';
import { amazonLodges } from '@/data/amazon-lodges';

export const metadata: Metadata = {
    title: "Amazon Deep Jungle Lodge | Authentic Ecuador Rainforest",
    description: "Venture deep into the Ecuadorian Amazon Rainforest. Stay in remote eco-lodges, experience pristine nature, and encounter unique, untouched wildlife.",
};

export default function DeepJungleLodgePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Amazon Deep Jungle Lodge",
        "description": "Remote and authentic rainforest eco-lodges deep in the Ecuadorian Amazon.",
        "url": "https://eosecuador.com/amazon/deep-jungle-lodge"
    };

    return (
        <div className="min-h-screen pb-20 bg-[var(--background)] relative">
            <JsonLd data={jsonLd} />
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/amazon.png"
                        alt="Deep Jungle Lodge in the Amazon"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Deep Jungle Lodges</h1>
                    <p className="text-xl font-light tracking-wide">Enter the untouched heart of the Amazon</p>
                </div>
            </section>

            {/* SEO Description Section */}
            <section className="container mx-auto px-4 pt-16 pb-8 text-center max-w-4xl">
                <h2 className="text-3xl font-serif font-bold text-[var(--color-secondary)] dark:text-white mb-6">Experience the Pristine Amazon Jungle</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                    For adventurous travelers and true nature enthusiasts, our <strong>Deep Jungle Lodge</strong> tours offer unparalleled immersion into the primary Amazon rainforest. Reached by motorized canoes and remote trails, these sustainably built eco-lodges put you right in the middle of untouched biodiversity. Discover rare species under the canopy, follow local indigenous guides through medicinal plant trails, and listen to the symphony of the forest at night. This is an authentic <strong>Ecuador Amazon</strong> experience for those looking to disconnect from the modern world and connect deeply with the lungs of the Earth.
                </p>
            </section>

            {/* Lodges Grid */}
            <section className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {amazonLodges.map((lodge) => (
                        <div key={lodge.id} className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg dark:shadow-[0_4px_20px_0_rgba(255,255,255,0.08)] overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col border border-transparent dark:border-white/5">
                            <div className="relative h-64 w-full">
                                <Image src={lodge.image} alt={lodge.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wide">
                                    {lodge.location}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-serif font-bold text-[var(--color-secondary)] mb-2">{lodge.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">{lodge.description}</p>
                                <div className="border-t border-gray-100 dark:border-gray-800 pt-4 flex items-center justify-center">
                                    <Link
                                        href={`/amazon/deep-jungle-lodge/${lodge.slug}`}
                                        className="px-6 py-2 bg-[var(--color-brand-green)] text-white text-sm font-bold rounded-full hover:bg-[var(--color-brand-green-dark)] transition-colors w-full text-center"
                                    >
                                        View Details & Itineraries
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <Link href="/amazon" className="text-[var(--color-brand-green)] hover:underline flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Back to Amazon overview
                    </Link>
                </div>
            </section>
        </div>
    );
}
