import React from 'react';

export interface ItineraryTableDay {
    day: string;
    am: { description: string };
    pm: { description: string };
}

interface ItineraryTableProps {
    days: ItineraryTableDay[];
}

export default function ItineraryTable({ days }: ItineraryTableProps) {
    if (!days || days.length === 0) return null;

    return (
        <div className="w-full">
            <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <table className="w-full text-sm text-left">
                    <thead className="bg-[var(--color-secondary)] text-white font-serif text-lg tracking-wide border-b border-gray-700">
                        <tr>
                            <th className="px-6 py-4 w-1/4">Day</th>
                            <th className="px-6 py-4 w-20 text-center">Time</th>
                            <th className="px-6 py-4">Activity</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-[#1a1a1a] divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                        {days.map((day, index) => (
                            <React.Fragment key={index}>
                                {/* AM Row */}
                                <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <td rowSpan={2} className="px-6 py-4 font-bold text-gray-900 dark:text-white border-r border-gray-100 dark:border-gray-800 align-middle bg-white dark:bg-[#1a1a1a]">
                                        {day.day}
                                    </td>
                                    <td className="px-6 py-4 font-bold text-[var(--color-secondary)] text-center border-r border-gray-100 dark:border-gray-800">AM</td>
                                    <td className="px-6 py-4">{day.am.description}</td>
                                </tr>
                                {/* PM Row */}
                                <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-bold text-[var(--color-secondary)] text-center border-r border-gray-100 dark:border-gray-800">PM</td>
                                    <td className="px-6 py-4">{day.pm.description}</td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
