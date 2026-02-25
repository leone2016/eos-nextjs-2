import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Galapagos Islands Vacation Packages | Cruises & Land Based Tours",
    description: "Discover the enchanted Galapagos Islands with Eos Ecuador. Choose from luxury cruises, island hopping tours, or diving expeditions. Book your sustainable adventure today.",
    keywords: ["galapagos islands", "galapagos cruises", "galapagos land based", "diving galapagos", "sustainable tourism galapagos"],
    openGraph: {
        title: "Galapagos Islands Vacation Packages",
        description: "Discover the enchanted Galapagos Islands with Eos Ecuador.",
        images: ["/galapagos/land-based-tours/galapagos_kicker_rock.png"],
    },
};

export default function GalapagosPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Galapagos Islands",
        "description": "A volcanic archipelago in the Pacific Ocean. It's considered one of the world's foremost destinations for wildlife-viewing.",
        "url": "https://eosecuador.com/galapagos",
        "image": "https://eosecuador.com/galapagos/land-based-tours/galapagos_kicker_rock.png"
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <JsonLd data={jsonLd} />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 scale-105">
                    <Image
                        src="/galapagos/land-based-tours/galapagos_kicker_rock.png"
                        alt="Kicker Rock Galapagos Sunset"
                        fill
                        priority
                        className="object-cover opacity-90"
                        sizes="100vw"
                        quality={95}
                    />
                    <div className="absolute inset-0 bg-black/40 z-10" />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 right-10 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[120px] animate-pulse transition-all duration-1000"></div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase mb-8 animate-fade-in shadow-xl">
                        Nature Unveiled
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 drop-shadow-2xl tracking-tight leading-[0.9]">
                        Galapagos <br />
                        <span className="italic text-[var(--color-primary)]">Enchanted</span>
                    </h1>
                </div>

                {/* Bottom Fade Transition */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[var(--background)] to-transparent z-10"></div>
            </section>

            {/* Intro Text */}
            <section className="relative py-24 -mt-12 z-20">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-secondary)] dark:text-white mb-8 leading-tight">
                        Discover wildlife and stunning views in this <span className="text-[var(--color-primary)]">unforgettable place</span>.
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-xl font-light">
                        Scout the Galapagos Islands with EOS through cruise or land-based tours; choose the style that suits you best. Enjoy competitive rates tailored to your budget, with special pricing based on availability and group size. We&apos;re committed to making your journey seamless, enriching, and unforgettable.
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-20 pb-40">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                        {/* Cruises */}
                        <Link href="/galapagos/cruises" className="group block relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#1a1a1a] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white dark:border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] dark:shadow-none">
                            <div className="relative h-96 w-full overflow-hidden">
                                <Image
                                    src="/galapagos/galapagos-cruises/galapagos_luxury_yacht.png"
                                    alt="Galapagos Cruises"
                                    fill
                                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
                                    <div>
                                        <h3 className="text-4xl font-serif font-bold text-white mb-2">Cruises</h3>
                                        <div className="h-1 w-12 bg-[var(--color-primary)] rounded-full group-hover:w-24 transition-all duration-500"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10">
                                <p className="text-gray-500 dark:text-gray-400 mb-6 font-light leading-relaxed">Explore the Galapagos on a breathtaking cruise with options for every budget and personalized guidance.</p>
                                <span className="text-brand-green-text font-bold uppercase tracking-[0.2em] text-xs">Explore Cruises →</span>
                            </div>
                        </Link>

                        {/* Land Based */}
                        <Link href="/galapagos/land-based" className="group block relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#1a1a1a] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white dark:border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] dark:shadow-none">
                            <div className="relative h-96 w-full overflow-hidden">
                                <Image
                                    src="/galapagos/land-based-tours/galapagos_sea_lion_beach_relaxed.png"
                                    alt="Galapagos Land Based Tours"
                                    fill
                                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
                                    <div>
                                        <h3 className="text-4xl font-serif font-bold text-white mb-2">Land Based</h3>
                                        <div className="h-1 w-12 bg-[var(--color-primary)] rounded-full group-hover:w-24 transition-all duration-500"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10">
                                <p className="text-gray-500 dark:text-gray-400 mb-6 font-light leading-relaxed">Scout the Galapagos on a land-based journey with expert guidance and handpicked accommodations.</p>
                                <span className="text-[var(--color-primary-text)] font-bold uppercase tracking-[0.2em] text-xs">Explore Tours →</span>
                            </div>
                        </Link>

                        {/* Diving */}
                        <Link href="/galapagos/diving" className="group block relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#1a1a1a] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white dark:border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] dark:shadow-none">
                            <div className="relative h-96 w-full overflow-hidden">
                                <Image
                                    src="/galapagos/land-based-tours/galapagos_hammerhead_shark.png"
                                    alt="Galapagos Diving Tours - Hammerhead Sharks"
                                    fill
                                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
                                    <div>
                                        <h3 className="text-4xl font-serif font-bold text-white mb-2">Diving</h3>
                                        <div className="h-1 w-12 bg-[var(--color-primary)] rounded-full group-hover:w-24 transition-all duration-500"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10">
                                <p className="text-gray-500 dark:text-gray-400 mb-6 font-light leading-relaxed">Discover the underwater wonders of the marine reserve with our specialized diving cruises.</p>
                                <span className="text-[var(--color-primary-text)] font-bold uppercase tracking-[0.2em] text-xs">Explore Diving →</span>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
}
