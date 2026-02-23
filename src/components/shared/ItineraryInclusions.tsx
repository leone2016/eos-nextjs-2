import React from 'react';

export interface InclusionItem {
    title: string;
    description: string;
}

interface ItineraryInclusionsProps {
    inclusions?: InclusionItem[];
    title?: string;
}

export default function ItineraryInclusions({ inclusions, title = "Accommodations & Details" }: ItineraryInclusionsProps) {
    if (!inclusions || inclusions.length === 0) return null;

    return (
        <div className="w-full mt-12 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 p-8">
            <h3 className="text-3xl font-serif font-bold text-[var(--color-secondary)] dark:text-white mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">
                {title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {inclusions.map((inclusion, idx) => (
                    <div key={idx} className="flex flex-col">
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2 flex items-center gap-2">
                            <svg className="w-5 h-5 text-[var(--color-brand-green)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            {inclusion.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 pl-7 text-sm leading-relaxed">
                            {inclusion.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
