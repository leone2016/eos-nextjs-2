import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Climbing & Trekking Tours in Ecuador | Andes Adventures",
    description: "Summit the majestic volcanoes of the Andes with Eos Ecuador. Guided climbing and trekking tours for all skill levels.",
};

export default function ClimbingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Ecuadorian Andes",
        "description": "A climber&apos;s paradise featuring the Avenue of the Volcanoes.",
        "url": "https://eosecuador.com/climbing",
        "image": "https://eosecuador.com/hero.jpg"
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <JsonLd data={jsonLd} />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 scale-105">
                    <Image
                        src="/hero.jpg"
                        alt="Andes Mountains Climbing"
                        fill
                        priority
                        className="object-cover opacity-90"
                        sizes="100vw"
                        quality={95}
                    />
                    <div className="absolute inset-0 bg-black/45 z-10" />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 right-10 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[120px] animate-pulse transition-all duration-1000"></div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase mb-8 animate-fade-in shadow-xl">
                        Summit the Andes
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 drop-shadow-2xl tracking-tight leading-[0.9]">
                        Climbing <br />
                        <span className="italic text-[var(--color-primary)]">& Trekking</span>
                    </h1>
                </div>

                {/* Bottom Fade Transition */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[var(--background)] to-transparent z-10"></div>
            </section>

            {/* Intro Text */}
            <section className="relative py-24 -mt-12 z-20">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-secondary)] dark:text-white mb-8 leading-tight">
                        Reach new heights in the <span className="text-[var(--color-primary)]">heart of the Andes</span>.
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-xl font-light">
                        Ecuador offers some of the most accessible and stunning high-altitude climbing in the world. Whether you are an experienced mountaineer looking to summit Cotopaxi or Chimborazo, or a trekker wanting to explore the crater lakes and highland paramos, we have the perfect adventure for you.
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-20 pb-40">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

                        {/* High Altitude Climbing */}
                        <div className="group block relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#1a1a1a] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white dark:border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] dark:shadow-none">
                            <div className="relative h-[28rem] w-full overflow-hidden">
                                <Image
                                    src="/hero.jpg"
                                    alt="High Altitude Climbing"
                                    fill
                                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
                                    <div>
                                        <h3 className="text-4xl font-serif font-bold text-white mb-2">Expeditions</h3>
                                        <div className="h-1 w-12 bg-[var(--color-primary)] rounded-full group-hover:w-24 transition-all duration-500"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10">
                                <p className="text-gray-500 dark:text-gray-400 mb-6 font-light leading-relaxed">Challenge yourself on Ecuador&apos;s iconic peaks like Cotopaxi, Cayambe, and Chimborazo with expert guides.</p>
                                <span className="text-[var(--color-primary)] font-bold uppercase tracking-[0.2em] text-xs cursor-pointer">View Expeditions →</span>
                            </div>
                        </div>

                        {/* Trekking */}
                        <div className="group block relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#1a1a1a] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white dark:border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] dark:shadow-none">
                            <div className="relative h-[28rem] w-full overflow-hidden">
                                <Image
                                    src="/hero.jpg"
                                    alt="Trekking Tours"
                                    fill
                                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
                                    <div>
                                        <h3 className="text-4xl font-serif font-bold text-white mb-2">Trekking</h3>
                                        <div className="h-1 w-12 bg-[var(--color-primary)] rounded-full group-hover:w-24 transition-all duration-500"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10">
                                <p className="text-gray-500 dark:text-gray-400 mb-6 font-light leading-relaxed">Explore scenic trails through national parks, crater lakes, and indigenous trails without technical climbing.</p>
                                <span className="text-[var(--color-primary)] font-bold uppercase tracking-[0.2em] text-xs cursor-pointer">View Treks →</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
