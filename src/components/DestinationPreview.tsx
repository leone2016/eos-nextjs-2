import Image from 'next/image';
import Link from 'next/link';

const destinations = [
    {
        title: "Galapagos",
        subtitle: "The Enchanted Islands",
        description: "Experience the ultimate wildlife encounter in a volcanic paradise that changed science forever.",
        image: "/galapagos.png",
        link: "/galapagos",
        accent: "from-blue-500/20"
    },
    {
        title: "Amazon",
        subtitle: "Untamed Rainforest",
        description: "Venture into the world's most biodiverse ecosystem, home to unique wildlife and ancestral cultures.",
        image: "/amazon.png",
        link: "/amazon",
        accent: "from-green-500/20"
    },
    {
        title: "Volcanoes",
        subtitle: "Climbing & Trekking",
        description: "Conquer the Avenue of the Volcanoes and witness the majestic power of the Ecuadorian Andes.",
        image: "/hero.jpg",
        link: "/trekking",
        accent: "from-orange-500/20"
    }
];

export default function DestinationPreview() {
    return (
        <section className="py-32 bg-[var(--background)] relative overflow-hidden">
            {/* Background Texture Placeholder */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none dark:opacity-[0.05]">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col gap-32">
                        {destinations.map((dest, index) => (
                            <div
                                key={index}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
                            >
                                {/* Image side with unique frame */}
                                <div className="w-full lg:w-3/5 relative group">
                                    <div className={`absolute -inset-4 bg-gradient-to-br ${dest.accent} to-transparent rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                                    <div className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                                        <Image
                                            src={dest.image}
                                            alt={dest.title}
                                            fill
                                            className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                            sizes="(max-width: 1024px) 100vw, 60vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                    </div>

                                    {/* Small floating badge */}
                                    <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} bg-white dark:bg-[#1a1a1a] p-4 rounded-2xl shadow-xl hidden md:block border border-gray-100 dark:border-white/5`}>
                                        <div className="w-12 h-1 bg-[var(--color-primary)] rounded-full mb-2"></div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)] dark:text-white">Discover</p>
                                    </div>
                                </div>

                                {/* Content side */}
                                <div className="w-full lg:w-2/5 space-y-8">
                                    <div className="space-y-4">
                                        <p className="text-xs font-bold tracking-[0.4em] uppercase text-[var(--color-primary)]">
                                            {dest.subtitle}
                                        </p>
                                        <h3 className="text-4xl md:text-6xl font-serif font-bold text-[var(--color-secondary)] dark:text-white leading-tight">
                                            {dest.title}
                                        </h3>
                                    </div>

                                    <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                                        {dest.description}
                                    </p>

                                    <Link
                                        href={dest.link}
                                        className="group relative inline-flex items-center gap-4 text-[var(--color-secondary)] dark:text-white font-bold uppercase tracking-widest text-xs transition-colors hover:text-[var(--color-primary)]"
                                    >
                                        <span className="relative">
                                            Discover More
                                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
