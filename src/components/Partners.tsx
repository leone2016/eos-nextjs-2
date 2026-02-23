import Image from 'next/image';

export default function Partners() {
    // Placeholder layout for logos
    const partners = [
        "partners-providers/bellavista.png",
        "partners-providers/dracaena.png",
        "partners-providers/galagents.png",
        "partners-providers/gps-suites.png",
        "partners-providers/julio-verne.svg",
        "partners-providers/kuyana.svg",
        "partners-providers/mandari.png",
        "partners-providers/napowc.png",
        "partners-providers/rosedelco.png",
        "partners-providers/sani-lodge.png",

    ];

    return (
        <section className="py-20  bg-[var(--color-accent-dark)]">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-2xl font-serif font-bold text-gray-500 mb-12 uppercase tracking-widest">
                    Partners &amp; Providers
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-12 transition-all duration-500">
                    {partners.map((partner, i) => {
                        const partnerName = partner.split('/').pop()?.split('.')[0] || 'Partner';
                        return (
                            <div key={i} className="h-20 w-36 bg-[var(--color-accent-darker)] rounded-lg shadow-sm flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={`/${partner}`}
                                    alt={`${partnerName} Logo`}
                                    width={144}
                                    height={80}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
