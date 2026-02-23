import React from 'react';
import Link from 'next/link';
import type { LodgeItinerary } from '@/data/amazon-lodges';
import ItineraryTable from '@/components/shared/ItineraryTable';
import ItineraryInclusions from '@/components/shared/ItineraryInclusions';

interface LodgeItineraryProps {
    itinerary: LodgeItinerary;
    lodgeName?: string;
}

export default function LodgeItinerary({ itinerary, lodgeName }: LodgeItineraryProps) {
    return (
        <div className="space-y-12">
            {/* Header Section */}
            <div className="text-center space-y-4 mb-8">
                {itinerary.title && (
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
                        {itinerary.title}
                    </h2>
                )}

                <h3 className="text-2xl font-bold text-[var(--color-primary)] bg-gray-50 dark:bg-gray-800 inline-block px-6 py-2 rounded-full shadow-sm">
                    {itinerary.duration}
                </h3>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
                <div className="w-full space-y-12">
                    <ItineraryTable days={itinerary.days} />
                    <ItineraryInclusions inclusions={itinerary.inclusions} />
                </div>
            </div>

            <div className="flex justify-center mt-12 pt-8">
                <Link
                    href={`/contact?subject=Inquiry about ${encodeURIComponent(lodgeName ? `${lodgeName} - ${itinerary.name}` : itinerary.name)}`}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-brand-green)] text-white text-lg font-bold rounded-xl hover:bg-[var(--color-brand-green-dark)] transition-all transform hover:scale-105 shadow-lg shadow-[var(--color-brand-green)]/30"
                >
                    Contact Us to Book
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
