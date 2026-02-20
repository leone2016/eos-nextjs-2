import Image from 'next/image';
import Link from 'next/link';
import { Cruise } from '@/data/cruises';

interface CruiseCardProps {
    cruise: Cruise;
    onClick?: (cruise: Cruise) => void;
    onBookClick?: (cruise: Cruise) => void;
}

export default function CruiseCard({ cruise, onClick, onBookClick }: CruiseCardProps) {
    const handleDetailClick = (e: React.MouseEvent) => {
        if (onClick) {
            e.preventDefault();
            onClick(cruise);
        }
    };

    const handleBookClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (onBookClick) {
            onBookClick(cruise);
        }
    };

    return (
        <div className="bg-[var(--background)] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full bg-white dark:bg-[#1a1a1a] group">
            <Link href={`/galapagos/cruises/${cruise.slug}`} onClick={handleDetailClick} className="block overflow-hidden h-64 relative">
                <Image
                    src={cruise.image}
                    alt={cruise.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </Link>
            <div className="p-6 flex flex-col flex-grow text-center relative z-10 bg-white dark:bg-[#1a1a1a] -mt-2 mx-2 rounded-lg transition-colors">
                <Link href={`/galapagos/cruises/${cruise.slug}`} onClick={handleDetailClick} className="block group/title">
                    <h3 className="text-2xl font-serif font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors mb-3">
                        {cruise.name}
                    </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed flex-grow mb-4">
                    {cruise.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <Link
                        href={`/galapagos/cruises/${cruise.slug}`}
                        onClick={handleDetailClick}
                        className="flex-1 px-4 py-2 border border-[var(--color-primary)] text-[var(--color-primary)] text-xs font-bold rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all text-center uppercase tracking-wider"
                    >
                        View Details
                    </Link>
                    <button
                        onClick={handleBookClick}
                        className="flex-1 px-4 py-2 bg-[var(--color-primary)] text-white text-xs font-bold rounded-full hover:bg-[var(--color-primary-dark)] transition-all uppercase tracking-wider shadow-md hover:shadow-lg transform active:scale-95"
                    >
                        Book
                    </button>
                </div>
            </div>
        </div>
    );
}
