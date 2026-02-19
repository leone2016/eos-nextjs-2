import Image from 'next/image';
import Link from 'next/link';

const destinations = [
    {
        title: "Galapagos",
        description: "Experience the wonders of the Galapagos Islands! Immerse yourself in nature, discover unique wildlife, and enjoy breathtaking, paradisiacal views in this unforgettable paradise.",
        image: "/galapagos.png",
        link: "/galapagos"
    },
    {
        title: "Amazon",
        description: "Immerse yourself in Ecuador's Amazon rainforest, a realm of lush flora and fauna, and discover the ancient culture of its local communities.",
        image: "/amazon.png",
        link: "/amazon"
    },
    {
        title: "Climbing & Trekking",
        description: "Embark on incredible climbing and hiking adventures in the majestic Ecuadorian Andes! Our expert team is fully equipped to handle all logistics, ensuring a seamless journey.",
        image: "/hero.jpg", // Fallback until specific image is generated
        link: "/trekking"
    }
];

export default function DestinationPreview() {
    return (
        <section className="py-20 bg-[var(--color-accent)]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-24">
                    {destinations.map((dest, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>

                            {/* Image Side */}
                            <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                                {dest.image && (
                                    <Image
                                        src={dest.image}
                                        alt={dest.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                )}
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 text-left space-y-6">
                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-secondary)] dark:text-[var(--color-brand-green)] transition-colors">
                                    {dest.title}
                                </h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light transition-colors">
                                    {dest.description}
                                </p>
                                <Link
                                    href={dest.link}
                                    className="inline-block px-8 py-3 bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-dark)] text-white font-semibold rounded-md transition-colors uppercase tracking-wider text-sm shadow-md"
                                >
                                    Discover More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
