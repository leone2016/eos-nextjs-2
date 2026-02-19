'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Deck {
    name: string;
    image: string;
    description: string;
}

interface CruiseDecksProps {
    decks: Deck[];
}

export default function CruiseDecks({ decks }: CruiseDecksProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === decks.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? decks.length - 1 : prevIndex - 1));
    };

    return (
        <div className="py-12 bg-white">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-secondary)] mb-8 text-center">Deck Plans</h2>

            <div className="relative max-w-6xl mx-auto px-4">
                {/* Carousel Container */}
                <div className="relative bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="grid lg:grid-cols-[1.5fr_1fr]">
                        {/* Image Section */}
                        <div className="relative h-80 lg:h-[500px] bg-gray-50 flex items-center justify-center p-8">
                            <Image
                                src={decks[currentIndex].image}
                                alt={decks[currentIndex].name}
                                fill
                                className="object-contain p-4 transition-opacity duration-300"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="p-8 flex flex-col justify-center bg-white text-gray-800">
                            <div className="mb-2 text-[var(--color-primary)] font-bold tracking-widest text-sm uppercase">Deck Level</div>
                            <h3 className="text-3xl font-serif font-bold mb-4 text-[var(--color-secondary)]">
                                {decks[currentIndex].name}
                            </h3>
                            <div className="w-12 h-1 bg-[var(--color-primary)] mb-6"></div>
                            <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                {decks[currentIndex].description}
                            </p>

                            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                                <span className="text-sm text-gray-400 font-medium">
                                    Deck {currentIndex + 1} of {decks.length}
                                </span>
                                <div className="flex gap-3">
                                    <button
                                        onClick={prevSlide}
                                        className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] transition-all"
                                        aria-label="Previous deck"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] transition-all"
                                        aria-label="Next deck"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                    {decks.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-[var(--color-secondary)] w-6' : 'bg-gray-300'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
