'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AmazonLodge, LodgeItinerary as LodgeItineraryType } from '@/data/amazon-lodges';
import LodgeItinerary from './LodgeItinerary';

interface LodgeDetailProps {
    lodge: AmazonLodge;
}

export default function LodgeDetail({ lodge }: LodgeDetailProps) {
    const [selectedItineraryIndex, setSelectedItineraryIndex] = useState<number | null>(null);

    if (!lodge.itineraries || lodge.itineraries.length === 0) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-serif text-gray-600">Itinerary details coming soon for {lodge.name}.</h2>
                <Link href="/amazon/deep-jungle-lodge" className="text-[var(--color-brand-green)] hover:underline mt-4 inline-block">
                    Back to Amazon Lodges
                </Link>
            </div>
        );
    }

    // View specific itinerary details
    if (selectedItineraryIndex !== null) {
        const selectedItinerary = lodge.itineraries[selectedItineraryIndex];
        return (
            <div className="bg-background min-h-screen pb-20">
                {/* Hero Area */}
                <div className="relative h-[40vh] w-full">
                    <Image
                        src={lodge.image}
                        alt={lodge.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white px-4">
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">{lodge.name}</h1>
                            <p className="text-lg opacity-90">{selectedItinerary.name}</p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <button
                        onClick={() => setSelectedItineraryIndex(null)}
                        className="mb-8 text-[var(--color-brand-green)] font-medium hover:underline flex items-center gap-2"
                    >
                        ← Back to all {lodge.name} itineraries
                    </button>

                    <LodgeItinerary itinerary={selectedItinerary} lodgeName={lodge.name} />
                </div>
            </div>
        );
    }

    // Default view: Lodge Info & Itinerary Cards
    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Hero / Header Area for Lodge */}
            <div className="relative h-[50vh] w-full">
                <Image
                    src={lodge.image}
                    alt={lodge.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white container mx-auto">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-2">{lodge.name}</h1>
                    <p className="text-lg opacity-90">{lodge.location}</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-12">
                    {lodge.description}
                </p>

                <h2 className="text-3xl font-serif font-bold text-[var(--color-secondary)] dark:text-white mb-8">
                    Lodge Amenities & Features
                </h2>

                <div className="grid md:grid-cols-2 gap-12 mb-16 bg-gray-50 dark:bg-white/5 p-8 rounded-xl border border-gray-100 dark:border-gray-800 relative shadow-sm">
                    {lodge.amenities && (
                        <div>
                            <ul className="space-y-4">
                                {lodge.amenities.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 text-gray-700 dark:text-gray-300 text-md">
                                        <svg className="w-6 h-6 text-[var(--color-brand-green)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Itinerary Cards Section */}

                {(() => {
                    const categorized = lodge.itineraries.reduce((acc, current, index) => {
                        const category = current.category || 'Itineraries';
                        if (!acc[category]) {
                            acc[category] = [];
                        }
                        acc[category].push({ itinerary: current, originalIndex: index });
                        return acc;
                    }, {} as Record<string, { itinerary: LodgeItineraryType, originalIndex: number }[]>);

                    return Object.entries(categorized).map(([categoryName, items]) => (
                        <div key={categoryName} className="mb-20">
                            <h2 className="text-3xl font-serif font-bold text-[var(--color-secondary)] dark:text-white mb-4 mt-8">
                                {categoryName}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-3xl">
                                {categoryName === 'EXPLORE the Ecuadorian Amazon'
                                    ? 'Connect with biodiversity on excursions surrounded by nature and amazing wildlife.'
                                    : categoryName === 'Explore Yasuní, a birdwatcher’s paradise'
                                        ? 'Experience the most complete birding adventure in the heart of Yasuní National Park.'
                                        : ''}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                {items.map(({ itinerary, originalIndex }) => (
                                    <div key={originalIndex} className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg dark:shadow-[0_4px_20px_0_rgba(255,255,255,0.08)] overflow-hidden flex flex-col border border-transparent dark:border-white/5 relative">
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 uppercase tracking-wide z-10 shadow-sm border border-gray-200">
                                            {itinerary.duration}
                                        </div>
                                        <div className="relative h-56 w-full">
                                            <Image
                                                src={itinerary.image || lodge.image}
                                                alt={itinerary.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2">{itinerary.name}</h3>
                                            {itinerary.description && (
                                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{itinerary.description}</p>
                                            )}
                                            <div className="border-t border-gray-100 dark:border-gray-800 pt-4 flex items-center justify-between">
                                                <Link href="/contact" className="text-[var(--color-primary)] font-bold text-sm hover:underline">
                                                    Contact Us
                                                </Link>
                                                <button
                                                    onClick={() => setSelectedItineraryIndex(originalIndex)}
                                                    className="px-6 py-2 bg-[var(--color-brand-green)] text-white text-sm font-bold rounded-lg hover:bg-[var(--color-brand-green-dark)] transition-colors"
                                                >
                                                    View Itinerary
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ));
                })()}

                <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                    <Link href="/amazon/deep-jungle-lodge" className="text-[var(--color-brand-green)] font-medium hover:underline inline-flex items-center gap-2">
                        ← Back to deep jungle lodges
                    </Link>
                </div>
            </div>
        </div>
    );
}
