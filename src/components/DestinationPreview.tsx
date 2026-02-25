import Image from 'next/image';
import Link from 'next/link';

const destinations = [
    {
        title: "Galapagos",
        subtitle: "The Enchanted Islands",
        description: "Experience the ultimate wildlife encounter in a volcanic paradise that changed science forever.",
        image: "/galapagos.png",
        link: "/galapagos"
    },
    {
        title: "Amazon",
        subtitle: "Untamed Rainforest",
        description: "Venture into the world's most biodiverse ecosystem, home to unique wildlife and ancestral cultures.",
        image: "/amazon.png",
        link: "/amazon"
    },
    {
        title: "Volcanoes",
        subtitle: "Climbing & Trekking",
        description: "Conquer the Avenue of the Volcanoes and witness the majestic power of the Ecuadorian Andes.",
        image: "/hero.jpg",
        link: "/trekking"
    }
];

export default function DestinationPreview() {
    return (
        <section className="bg-background flex flex-col relative overflow-hidden pb-32">

            {/* Background Texture Placeholder */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none dark:opacity-[0.05] z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
            </div>

            {/* Full-width Horizontal Section for Custom Tours */}
            <div className="w-full relative py-24 md:py-36 mb-20 md:mb-32 z-10 shadow-2xl">
                <div className="absolute inset-0 z-0 group">
                    <Image
                        src="/custom-tours.png"
                        alt="Custom Tours"
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s]"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
                    <div className="max-w-3xl text-center md:text-left text-white">
                        <p className="inline-block px-4 py-2 bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/30 backdrop-blur-sm rounded-full text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-white mb-6 md:mb-8">
                            Tailored Adventures
                        </p>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 md:mb-8 text-white drop-shadow-lg">
                            Custom Tours
                        </h2>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 font-light leading-relaxed max-w-2xl drop-shadow-md">
                            Create your own adventure with our custom tour packages. Whether you&apos;re seeking a specific wildlife encounter, a unique cultural experience, or a specialized itinerary.
                        </p>
                        <Link
                            href="/custom-tours"
                            className="inline-flex items-center gap-4 px-8 py-4 bg-[var(--color-primary)] text-white text-sm font-bold rounded-full hover:bg-[var(--color-primary-dark)] transition-all uppercase tracking-wider shadow-[0_0_20px_rgba(0,170,108,0.4)] hover:shadow-[0_0_30px_rgba(0,170,108,0.6)] transform hover:-translate-y-1 group"
                        >
                            Start Planning
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 transition-transform group-hover:translate-x-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col items-center mb-16 text-center">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--color-primary)] mb-4">
                        Discover Ecuador
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-secondary-text)] dark:text-white">
                        Featured Destinations
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto">
                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {destinations.map((dest, index) => (
                            <div key={index} className="bg-background rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 transition-all duration-300 flex flex-col h-full bg-white dark:bg-[#1a1a1a] group">
                                <Link href={dest.link} className="block overflow-hidden h-72 md:h-80 relative">
                                    <Image
                                        src={dest.image}
                                        alt={dest.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Link>
                                <div className="p-8 md:p-10 flex flex-col flex-grow text-center relative z-10 bg-white dark:bg-[#1a1a1a] -mt-10 mx-5 rounded-3xl transition-colors">
                                    <Link href={dest.link} className="block group/title">
                                        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-3">
                                            {dest.subtitle}
                                        </p>
                                        <h3 className="text-3xl font-serif font-bold text-[var(--color-secondary-text)] dark:text-white group-hover/title:text-[var(--color-primary)] transition-colors mb-4">
                                            {dest.title}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow mb-8 font-light">
                                        {dest.description}
                                    </p>

                                    <div className="flex flex-col mt-auto pt-6">
                                        <Link
                                            href={dest.link}
                                            className="inline-flex items-center justify-center gap-2 group/btn text-[var(--color-primary)] font-bold text-sm uppercase tracking-wider hover:text-[var(--color-primary-dark)] transition-colors"
                                        >
                                            Explore Now
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform group-hover/btn:translate-x-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
