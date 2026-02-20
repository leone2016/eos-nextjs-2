export default function MissionSection() {
    return (
        <section className="py-24 bg-[var(--background)] transition-colors duration-300 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent"></div>

            <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold tracking-[0.3em] uppercase mb-8 shadow-sm">
                    Our Commitment
                </span>

                <h2 className="text-4xl md:text-6xl font-serif font-bold text-[var(--color-secondary)] dark:text-white mb-10 transition-colors tracking-tight leading-tight">
                    Sustainable Travel in <br />
                    <span className="italic text-[var(--color-primary)] dark:text-[#a3d939]">Ecuador & Galapagos</span>
                </h2>

                <div className="mx-auto text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed font-light space-y-8 transition-colors max-w-4xl">
                    <p>
                        Established in 2008, <span className="font-medium text-[var(--color-secondary)] dark:text-white">EOS Ecuador</span> is more than a travel agency; we are guardians of responsible tourism. We specialize in crafting unforgettable journeys, from private cruises in the Galapagos to deep immersion in the Amazon rainforest.
                    </p>
                    <p>
                        Our philosophy is built on <span className="italic">personalization and purpose</span>. Each tour is tailored to your vision, allowing you to discover Ecuador's extraordinary biodiversity while contributing directly to local communities. Join us in exploring the beauty of our country, sustainably.
                    </p>
                </div>

                <div className="mt-12 flex justify-center">
                    <div className="h-1 w-20 bg-[var(--color-primary)]/30 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
