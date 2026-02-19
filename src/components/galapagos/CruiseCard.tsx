import Image from 'next/image';
import Link from 'next/link';
import { Cruise } from '@/data/cruises';

interface CruiseCardProps {
    cruise: Cruise;
    onClick?: (cruise: Cruise) => void;
}

export default function CruiseCard({ cruise, onClick }: CruiseCardProps) {
    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            e.preventDefault();
            onClick(cruise);
        }
    };

    return (
        <Link href={`/galapagos/cruises/${cruise.slug}`} onClick={handleClick} className="block h-full group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full bg-white dark:bg-[#1a1a1a]">
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                        src={cruise.image}
                        alt={cruise.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-6 flex flex-col flex-grow text-center relative z-10 bg-white -mt-2 mx-2 rounded-lg">
                    <h3 className="text-2xl font-serif font-bold text-[var(--color-secondary)] mb-3">{cruise.name}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed flex-grow mb-4">
                        {cruise.description}
                    </p>
                    <span className="inline-block px-6 py-2 bg-[var(--color-primary)] text-white text-sm font-medium rounded-full hover:bg-[var(--color-primary-dark)] transition-colors mt-auto">
                        View Details
                    </span>
                </div>
            </div>
        </Link>
    );
}
