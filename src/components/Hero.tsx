import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.jpg"
                    alt="Tropical paradise landscape with beach and sunset"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                    Discover <span className="text-teal-400">Paradise</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                    Explore unforgettable destinations and unique adventures. Your dream trip starts with a single click.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/destinations"
                        className="px-8 py-4 bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-dark)] text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
                    >
                        View Destinations
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/50 backdrop-blur-sm font-bold rounded-full transition-all"
                    >
                        Plan Your Trip
                    </Link>
                </div>
            </div>
        </section>
    );
}
