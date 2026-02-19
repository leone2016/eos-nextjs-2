import React from 'react';

interface CruiseFiltersProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export default function CruiseFilters({
    categories,
    selectedCategory,
    onCategoryChange,
    searchQuery,
    onSearchChange,
}: CruiseFiltersProps) {
    return (
        <section className="container mx-auto px-4 py-8 -mt-8 relative z-20">
            <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-xl p-4 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-300">
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => onCategoryChange(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === cat
                                    ? 'bg-[var(--color-brand-green)] text-white border-[var(--color-brand-green)]'
                                    : 'bg-white dark:bg-transparent text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/20 hover:border-[var(--color-brand-green)] hover:text-[var(--color-brand-green)]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="Search cruises..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-white/20 bg-white dark:bg-transparent text-gray-800 dark:text-white focus:outline-none focus:border-[var(--color-brand-green)] focus:ring-1 focus:ring-[var(--color-brand-green)] transition-all placeholder-gray-400 dark:placeholder-gray-500"
                    />
                </div>
            </div>
        </section>
    );
}
