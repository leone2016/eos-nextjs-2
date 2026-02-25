'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Cruise } from '@/data/cruises';
import CruiseItinerary from './CruiseItinerary';
import CruiseDecks from './CruiseDecks';

interface CruiseDetailProps {
    cruise: Cruise;
}

export default function CruiseDetail({ cruise }: CruiseDetailProps) {
    // Default to the first itinerary if available
    const [selectedItineraryIndex, setSelectedItineraryIndex] = useState(0);

    if (!cruise.itineraries || cruise.itineraries.length === 0) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-serif text-gray-600">Itinerary details coming soon for {cruise.name}.</h2>
                <Link href="/galapagos/cruises" className="text-[var(--color-brand-green)] hover:underline mt-4 inline-block">
                    Back to Cruises
                </Link>
            </div>
        );
    }

    const selectedItinerary = cruise.itineraries[selectedItineraryIndex];

    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Hero / Header Area for Cruise */}
            <div className="relative h-[50vh] w-full">
                <Image
                    src={cruise.image}
                    alt={cruise.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white container mx-auto">
                    <h1 className="text-5xl font-serif font-bold mb-2">{cruise.name}</h1>
                    <p className="text-lg opacity-90">{cruise.category} Class • {cruise.capacity} Passengers</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-4xl">
                    {cruise.description}
                </p>

                <h2 className="text-3xl font-serif font-bold text-[var(--color-secondary)] mb-8">
                    Technical Specifications & Safety
                </h2>

                {/* Technical Specifications & Safety */}
                <div className="grid md:grid-cols-2 gap-12 mb-16 bg-gray-50 dark:bg-white/5 p-8 rounded-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">

                    {/* Safety Equipment */}
                    {cruise.safetyEquipment && (
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-brand-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Safety Equipment
                            </h3>
                            <ul className="space-y-3">
                                {cruise.safetyEquipment.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
                                        <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Dimensions & Fact Sheet */}
                    <div className="space-y-8">
                        {cruise.dimensions && (
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-brand-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    Dimensions
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                        <span className="font-semibold text-gray-600">Length</span>
                                        <span className="text-gray-800 font-medium">{cruise.dimensions.length}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                        <span className="font-semibold text-gray-600">Beam</span>
                                        <span className="text-gray-800 font-medium">{cruise.dimensions.beam}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {cruise.factSheetUrl && (
                            <a
                                href={cruise.factSheetUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[var(--color-secondary)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors font-bold shadow-md hover:shadow-lg w-full justify-center md:w-auto transform hover:-translate-y-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                DOWNLOAD FACT SHEET
                            </a>
                        )}
                    </div>
                </div>

                {/* Deck Plans Carousel */}
                {cruise.decks && cruise.decks.length > 0 && (
                    <CruiseDecks decks={cruise.decks} />
                )}

                {/* Itinerary Selector */}
                {cruise.itineraries.length > 1 && (
                    <div className="flex flex-wrap gap-4 mb-8">
                        {cruise.itineraries.map((itinerary, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedItineraryIndex(index)}
                                className={`px-6 py-3 rounded-lg text-sm font-bold transition-all border-2 ${selectedItineraryIndex === index
                                    ? 'bg-[var(--color-brand-green)] text-white border-[var(--color-brand-green)] shadow-md'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-[var(--color-brand-green)] hover:text-[var(--color-brand-green)]'
                                    }`}
                            >
                                {itinerary.name}
                            </button>
                        ))}
                    </div>
                )}

                {/* Selected Itinerary View */}
                <CruiseItinerary itinerary={selectedItinerary} />

                <div className="mt-16 pt-8 border-t border-gray-200">
                    <Link href="/galapagos/cruises" className="text-[var(--color-brand-green)] font-medium hover:underline flex items-center gap-2">
                        ← Back to all cruises
                    </Link>
                </div>
            </div>
        </div>
    );
}
