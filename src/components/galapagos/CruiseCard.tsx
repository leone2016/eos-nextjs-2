import Image from 'next/image';
import Link from 'next/link';
import { Cruise } from '@/data/cruises';

interface CruiseCardProps {
    cruise: Cruise;
}

export default function CruiseCard({ cruise }: CruiseCardProps) {
    return (
        <Link href={`/galapagos/cruises/${cruise.slug}`} className="block h-full group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full bg-white dark:bg-[#1a1a1a]">
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                        src={cruise.image}
                        alt={cruise.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-6 flex flex-col flex-grow text-center relative z-10 bg-white -mt-2 mx-2 rounded-lg shadow-sm border border-gray-100 mb-2 bg-white dark:bg-[#1a1a1a]">
                    <h3 className="text-2xl font-serif font-bold text-[var(--color-secondary)] mb-3">{cruise.name}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed flex-grow">
                        {cruise.description}
                    </p>
                </div>
            </div>
        </Link>
    );
}
