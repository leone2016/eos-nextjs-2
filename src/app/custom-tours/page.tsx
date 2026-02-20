import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Custom Tailor-Made Tours in Ecuador | Design Your Trip",
    description: "Create your dream vacation in Ecuador with EOS Ecuador. Fully customizable itineraries tailored to your interests, budget, and schedule.",
};

export default function CustomToursPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom Tours Ecuador",
        "description": "Bespoke travel planning services for Ecuador and Galapagos.",
        "url": "https://example.com/custom-tours",
        "image": "https://example.com/hero.png"
    };

    return (
        <div className="flex flex-col min-h-screen bg-[var(--background)]">
            <JsonLd data={jsonLd} />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 scale-105">
                    <Image
                        src="/hero.png"
                        alt="Custom Travel Planning"
                        fill
                        priority
                        className="object-cover opacity-90"
                        sizes="100vw"
                        quality={95}
                    />
                    <div className="absolute inset-0 bg-black/40 z-10" />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[120px] animate-pulse transition-all duration-1000"></div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase mb-8 animate-fade-in shadow-xl">
                        Bespoke Journeys
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 drop-shadow-2xl tracking-tight leading-[0.9]">
                        Design Your <br />
                        <span className="italic text-[var(--color-primary)]">Dream Trip</span>
                    </h1>
                </div>

                {/* Bottom Fade Transition */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[var(--background)] to-transparent z-10"></div>
            </section>

            {/* Intro Text */}
            <section className="relative py-24 -mt-12 z-20">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-secondary)] dark:text-white mb-8 leading-tight">
                        Designed <span className="text-[var(--color-primary)]">around you</span>.
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-xl font-light">
                        We understand that every traveler is unique. Whether you want a romantic honeymoon, a family adventure, a photography tour, or a birdwatching expedition, our experts will craft the perfect itinerary just for you. Tell us your dreams, and we will handle the logistics.
                    </p>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 pb-40">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden bg-white dark:bg-[#1a1a1a] shadow-2xl border border-white dark:border-white/5 p-10 md:p-20 text-center">
                        <div className="mb-12">
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-secondary)] dark:text-white mb-6">Start Planning Today</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed">Fill out our contact form or get in touch directly to start building your custom Ecuadorian adventure.</p>
                        </div>

                        <div className="flex justify-center">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center px-12 py-5 font-bold text-white transition-all duration-300 bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary-dark)] hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 active:scale-95 overflow-hidden"
                            >
                                <span className="relative z-10 uppercase tracking-[0.2em]">Contact Our Specialists</span>
                                <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
