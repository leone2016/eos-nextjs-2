import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden ">
            <div className="absolute inset-0 z-0 scale-105">
                <Image
                    src="/hero.jpg"
                    alt="Tropical paradise landscape with beach and sunset"
                    fill
                    priority
                    className="object-cover object-center opacity-90"
                    sizes="100vw"
                    quality={95}
                />
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[120px] animate-pulse transition-all duration-1000"></div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <span className="inline-block px-5 py-2 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold tracking-[0.4em] uppercase mb-8 animate-fade-in shadow-2xl border border-white/20">
                    Discover Your Adventure
                </span>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-8 tracking-tight drop-shadow-2xl leading-[0.9]">
                    Explore <br />
                    <span className="italic text-[var(--color-primary)]">The Galapagos</span>
                </h1>

                <p className="text-lg md:text-2xl text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-light">
                    Join us on a sustainable journey through the most extraordinary archipelago on Earth. Crafting bespoke memories since 2005.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                        href="/galapagos"
                        className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary-dark)] hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 active:scale-95 overflow-hidden"
                    >
                        <span className="relative z-10 uppercase tracking-widest text-sm">Explore Now</span>
                        <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    </Link>
                    <Link
                        href="/contact"
                        className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-bold rounded-full transition-all text-sm uppercase tracking-widest hover:border-white/60 active:scale-95 shadow-lg"
                    >
                        Plan Your Trip
                    </Link>
                </div>
            </div>

            {/* Bottom Fade Transition */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[var(--background)] to-transparent z-10"></div>
        </section>
    );
}
