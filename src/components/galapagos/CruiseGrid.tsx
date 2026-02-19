import React from 'react';
import { Cruise } from '@/data/cruises';
import CruiseCard from './CruiseCard';

interface CruiseGridProps {
    cruises: Cruise[];
}

export default function CruiseGrid({ cruises }: CruiseGridProps) {
    if (cruises.length === 0) {
        return (
            <div className="col-span-full text-center py-20 text-gray-500 dark:text-gray-400">
                No cruises found matching your criteria.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cruises.map((cruise) => (
                <CruiseCard key={cruise.id} cruise={cruise} />
            ))}
        </div>
    );
}
