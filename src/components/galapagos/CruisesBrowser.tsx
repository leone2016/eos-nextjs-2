'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { cruises, Cruise } from '@/data/cruises';
import CruiseFilters from './CruiseFilters';
import CruiseGrid from './CruiseGrid';
import Pagination from '@/components/ui/Pagination';
import Modal from '@/components/ui/Modal';

const ITEMS_PER_PAGE = 8;
const CATEGORIES = ['All', 'Luxury', 'First Class', 'Tourist'];

function CruisesBrowserContent() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Get current state from URL or defaults
    const currentCategory = searchParams.get('category') || 'All';
    const currentPage = Number(searchParams.get('page')) || 1;
    const currentSearch = searchParams.get('q') || '';

    // Local state for search input to avoid lagging typing
    const [searchTerm, setSearchTerm] = useState(currentSearch);

    // Sync local search term with URL param if URL changes externally
    useEffect(() => {
        setSearchTerm(currentSearch);
    }, [currentSearch]);

    // Update URL helper
    const updateUrl = (params: Record<string, string | number | null>) => {
        const newParams = new URLSearchParams(searchParams.toString());

        Object.entries(params).forEach(([key, value]) => {
            if (value === null || value === '' || value === 'All' || value === 1) {
                newParams.delete(key);
            } else {
                newParams.set(key, String(value));
            }
        });

        const queryString = newParams.toString();
        const url = queryString ? `${pathname}?${queryString}` : pathname;
        router.push(url, { scroll: false });
    };

    // Handlers
    const handleCategoryChange = (category: string) => {
        updateUrl({ category, page: 1 });
    };

    // Debounce search URL update
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm !== currentSearch) {
                const paramsToUpdate: Record<string, string | number | null> = { q: searchTerm, page: 1 };
                if (searchTerm.trim() !== '') {
                    paramsToUpdate.category = 'All';
                }
                updateUrl(paramsToUpdate);
            }
        }, 500);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm, currentSearch]); // dependencies valid for effect intent

    const handlePageChange = (page: number) => {
        updateUrl({ page });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Filter logic
    const filteredCruises = cruises.filter((cruise) => {
        const matchesCategory = currentCategory === 'All' || cruise.category === currentCategory;
        const matchesSearch = cruise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cruise.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const totalPages = Math.ceil(filteredCruises.length / ITEMS_PER_PAGE);
    const paginatedCruises = filteredCruises.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Modal state for Elite
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalUrl, setModalUrl] = useState('');

    const handleCruiseClick = (cruise: Cruise) => {
        if (cruise.id === 'elite') {
            setModalUrl('https://www.elitegalapagoscruise.com');
            setIsModalOpen(true);
        } else {
            router.push(`/galapagos/cruises/${cruise.slug}`);
        }
    };

    return (
        <>
            <CruiseFilters
                categories={CATEGORIES}
                selectedCategory={currentCategory}
                onCategoryChange={handleCategoryChange}
                searchQuery={searchTerm}
                onSearchChange={setSearchTerm}
            />

            <section className="container mx-auto px-4 py-12">
                <div className="mb-8 text-(--color-text-muted) text-sm">
                    Showing {paginatedCruises.length} of {filteredCruises.length} cruises
                </div>

                <CruiseGrid
                    cruises={paginatedCruises}
                    onCruiseClick={handleCruiseClick}
                />

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />

                <div className="flex justify-center mt-16">
                    <Link href="/galapagos" className="text-(--color-brand-green) hover:underline flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Back to Galapagos overview
                    </Link>
                </div>
            </section>

            {/* External Site Modal (Elite) */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <iframe
                    src={modalUrl}
                    className="w-full h-full border-0"
                    title="Elite Galapagos Cruise"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </Modal>
        </>
    );
}

export default function CruisesBrowser() {
    return (
        <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center">Loading cruises...</div>}>
            <CruisesBrowserContent />
        </Suspense>
    );
}

