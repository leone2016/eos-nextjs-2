import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Itinerary } from '@/data/cruises';
import ItineraryTable from '@/components/shared/ItineraryTable';

interface CruiseItineraryProps {
    itinerary: Itinerary;
}

export default function CruiseItinerary({ itinerary }: CruiseItineraryProps) {


    return (
        <div className="space-y-8">

            {/* Header Section */}
            <div className="text-center space-y-4">
                {itinerary.title && (
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
                        {itinerary.title}
                    </h2>
                )}

                <h3 className="text-2xl font-bold text-[var(--color-primary)] bg-gray-50 inline-block px-6 py-2 rounded-full">
                    {itinerary.duration}
                </h3>

                <div className="flex justify-center gap-6 text-[var(--color-primary)] text-sm font-medium pt-2">
                    <button className="hover:underline flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        Itinerario detallado
                    </button>
                    <span className="text-gray-300">|</span>
                    <Link href={`/contact?subject=Inquiry about the ${encodeURIComponent(itinerary.name)} Cruise`} className="text-[var(--color-secondary)] hover:underline flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        Reservar Crucero
                    </Link>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Table Section - Order 2 on mobile, Order 1 on desktop (Left) */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <ItineraryTable days={itinerary.days} />

                    <div className="flex justify-center mt-12 pt-4">
                        <Link
                            href={`/contact?subject=Inquiry about the ${encodeURIComponent(itinerary.name)} Cruise`}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-brand-green)] text-white text-lg font-bold rounded-xl hover:bg-[var(--color-brand-green-dark)] transition-all transform hover:scale-105 shadow-lg shadow-[var(--color-brand-green)]/30"
                        >
                            Contact Us to Book
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Map Section - Order 1 on mobile, Order 2 on desktop (Right) */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2 sticky top-4">
                    <div className="relative w-full aspect-[16/9] bg-gray-200 rounded-xl overflow-hidden shadow-2xl">
                        <Image
                            src={itinerary.mapImage}
                            alt={`${itinerary.name} Map`}
                            fill
                            className="object-contain p-4 bg-[var(--color-secondary)]"
                        />
                        <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
                            <span className="text-[var(--color-secondary)] font-bold text-lg tracking-wide uppercase">{itinerary.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

