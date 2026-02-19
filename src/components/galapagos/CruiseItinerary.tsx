import Image from 'next/image';
import React from 'react';
import { Itinerary } from '@/data/cruises';

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
                    <button className="text-[var(--color-secondary)] hover:underline flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        Reservar Crucero
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Table Section - Order 2 on mobile, Order 1 on desktop (Left) */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-[var(--color-secondary)] text-white font-serif text-lg tracking-wide border-b border-gray-700">
                                <tr>
                                    <th className="px-6 py-4 w-1/4">Day</th>
                                    <th className="px-6 py-4 w-20 text-center">Time</th>
                                    <th className="px-6 py-4">Activity</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100 text-gray-700">
                                {itinerary.days.map((day, index) => (
                                    <React.Fragment key={index}>
                                        {/* AM Row */}
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td rowSpan={2} className="px-6 py-4 font-bold text-gray-900 border-r border-gray-100 align-middle bg-white">
                                                {day.day}
                                            </td>
                                            <td className="px-6 py-4 font-bold text-[var(--color-secondary)] text-center border-r border-gray-100">AM</td>
                                            <td className="px-6 py-4">{day.am.description}</td>
                                        </tr>
                                        {/* PM Row */}
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-[var(--color-secondary)] text-center border-r border-gray-100">PM</td>
                                            <td className="px-6 py-4">{day.pm.description}</td>
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
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
                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
                            <span className="text-[var(--color-secondary)] font-bold text-lg tracking-wide uppercase">{itinerary.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

