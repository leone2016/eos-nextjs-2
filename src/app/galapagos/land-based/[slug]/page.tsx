import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { landBasedTours } from '@/data/land-based-tours';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const tour = landBasedTours.find((t) => t.slug === slug);

    if (!tour) {
        return {
            title: 'Tour Not Found',
        };
    }

    return {
        title: `${tour.title} | Galapagos Land Based Tours`,
        description: tour.description,
    };
}

export default async function TourPage({ params }: Props) {
    const { slug } = await params;
    const tour = landBasedTours.find((t) => t.slug === slug);

    if (!tour) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": tour.title,
        "description": tour.description,
        "image": `https://example.com${tour.highlightImage}`,
        "offers": {
            "@type": "Offer",
            "price": tour.price.replace(/[^0-9.]/g, '') || "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <JsonLd data={jsonLd} />

            {/* Hero */}
            <section className="relative h-[50vh]">
                <div className="absolute inset-0">
                    <Image
                        src={tour.highlightImage}
                        alt={tour.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="container mx-auto">
                        <span className="text-teal-400 font-bold uppercase tracking-wider text-sm mb-2 block">Land Based Tour</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{tour.title}</h1>
                        <div className="flex items-center gap-6 text-white/90">
                            <span className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                {tour.duration}
                            </span>
                            <span className="flex items-center gap-2 font-bold text-teal-400">
                                {tour.price}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <h2 className="text-2xl font-serif font-bold text-[var(--color-secondary)] mb-6">Itinerary</h2>

                    <div className="space-y-6">
                        {tour.itinerary.map((day) => (
                            <div key={day.day} className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-brand-green)] text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        {day.day}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{day.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">{day.description}</p>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                            {day.accommodation && (
                                                <span className="flex items-center gap-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                                    </svg>
                                                    {day.accommodation}
                                                </span>
                                            )}
                                            {day.meals && (
                                                <span className="flex items-center gap-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0" />
                                                    </svg>
                                                    {day.meals}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3 space-y-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 sticky top-24">
                        <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Included</h3>
                        <ul className="space-y-2 mb-6">
                            {tour.included.map((inc, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="green" className="w-4 h-4 mt-0.5 flex-shrink-0">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    {inc}
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-4">Not Included</h3>
                        <ul className="space-y-2 mb-8">
                            {tour.notIncluded.map((exc, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="red" className="w-4 h-4 mt-0.5 flex-shrink-0">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                    {exc}
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/contact"
                            className="block w-full text-center py-4 bg-[var(--color-brand-green)] text-white font-bold rounded-lg hover:bg-[var(--color-brand-green-dark)] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Book This Tour
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
