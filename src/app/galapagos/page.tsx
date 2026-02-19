import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Galapagos Islands Vacation Packages | Cruises & Land Based Tours",
    description: "Discover the enchanted Galapagos Islands with EOS Ecuador. Choose from luxury cruises, island hopping tours, or diving expeditions. Book your sustainable adventure today.",
    keywords: ["galapagos islands", "galapagos cruises", "galapagos land based", "diving galapagos", "sustainable tourism galapagos"],
    openGraph: {
        title: "Galapagos Islands Vacation Packages",
        description: "Discover the enchanted Galapagos Islands with EOS Ecuador.",
        images: ["/galapagos_kicker_rock.png"], // Assumed path after moving artifact
    },
};

export default function GalapagosPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Galapagos Islands",
        "description": "A volcanic archipelago in the Pacific Ocean. It's considered one of the world's foremost destinations for wildlife-viewing.",
        "url": "https://example.com/galapagos",
        "image": "https://example.com/galapagos_kicker_rock.png"
    };

    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd data={jsonLd} />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/galapagos_kicker_rock.png"
                        alt="Kicker Rock Galapagos Sunset"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg tracking-wide">GALAPAGOS</h1>
                    <p className="text-xl md:text-2xl font-light tracking-widest uppercase">The Enchanted Islands</p>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-serif text-[var(--color-secondary)] mb-6">Discover wildlife, nature, and stunning views in this unforgettable enchanted place.</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Scout the Galapagos Islands with EOS through cruise or land-based tours; choose the style that suits you best. Enjoy competitive rates tailored to your budget, with special pricing based on availability and group size. We're committed to making your journey seamless, enriching, and unforgettable.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg mt-4 font-medium text-[var(--color-brand-green)]">
                        Don't miss the chance to explore this extraordinary destination, your adventure awaits!
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-10 pb-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                        {/* Cruises */}
                        <Link href="/galapagos/cruises" className="group block bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden transform hover:-translate-y-2">
                            <div className="relative h-80 w-full overflow-hidden">
                                <Image
                                    src="/galapagos_luxury_yacht.png"
                                    alt="Galapagos Cruises"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                    <h3 className="text-3xl font-serif font-bold text-white">Cruises</h3>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-600 mb-4">Explore the Galapagos on a breathtaking cruise with options for every budget and personalized guidance.</p>
                                <span className="text-[var(--color-brand-green)] font-bold uppercase tracking-widest text-sm group-hover:underline">Explore Cruises →</span>
                            </div>
                        </Link>

                        {/* Land Based */}
                        <Link href="/galapagos/land-based" className="group block bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden transform hover:-translate-y-2">
                            <div className="relative h-80 w-full overflow-hidden">
                                <Image
                                    src="/galapagos_sea_lion_beach_relaxed.png"
                                    alt="Galapagos Land Based Tours"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                    <h3 className="text-3xl font-serif font-bold text-white">Land Based</h3>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-600 mb-4">Scout the Galapagos on a land-based journey with expert guidance and handpicked accommodations.</p>
                                <span className="text-[var(--color-brand-green)] font-bold uppercase tracking-widest text-sm group-hover:underline">Explore Tours →</span>
                            </div>
                        </Link>

                        {/* Diving */}
                        <Link href="/galapagos/diving" className="group block bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden transform hover:-translate-y-2">
                            <div className="relative h-80 w-full overflow-hidden">
                                <Image
                                    src="/galapagos_hammerhead_shark.png"
                                    alt="Galapagos Diving Tours - Hammerhead Sharks"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                    <h3 className="text-3xl font-serif font-bold text-white">Diving</h3>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-600 mb-4">Discover the underwater wonders of the marine reserve with our specialized diving cruises.</p>
                                <span className="text-[var(--color-brand-green)] font-bold uppercase tracking-widest text-sm group-hover:underline">Explore Diving →</span>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
}
