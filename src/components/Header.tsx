"use client"; // Required for state

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from 'next-themes';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    return (
        <header className="bg-[var(--color-gray-dark)] backdrop-blur-md sticky top-0 z-50 border-b border-white/10 shadow-sm transition-all duration-300">
            <nav className="container mx-auto px-4 h-20 flex items-center justify-between" aria-label="Main Navigation">
                <Link href="/" className="flex items-center group p-4 shrink-0">
                    {/* Logo Placeholder */}
                    <img src="/logo-eos.png" alt="EOS Ecuador Logo" className="w-40 h-20 object-contain" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex space-x-6">
                        {['Home', 'Galapagos', 'Amazon', 'Climbing & Trekking', 'Custom Tours', 'Contact'].map((item) => (
                            <li key={item}
                                className="relative group"
                                onMouseEnter={() => item === 'Galapagos' && setIsMenuOpen(true)}
                                onMouseLeave={() => item === 'Galapagos' && setIsMenuOpen(false)}
                            >
                                <Link
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ & /g, '-').replace(' ', '-')}`}
                                    className="text-gray-300 hover:text-white transition-colors font-medium text-sm uppercase tracking-wide relative flex items-center gap-1 py-4"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                    {item === 'Galapagos' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 mt-0.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    )}
                                    <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-[var(--color-brand-green)] transition-all group-hover:w-full"></span>
                                </Link>

                                {/* Dropdown Menu */}
                                {item === 'Galapagos' && (
                                    <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-b-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border-t-2 border-[var(--color-brand-green)]">
                                        <ul className="py-2">
                                            {[
                                                { name: 'Cruises', path: '/galapagos/cruises' },
                                                { name: 'Land based', path: '/galapagos/land-based' },
                                                { name: 'Diving', path: '/galapagos/diving' }
                                            ].map((subItem) => (
                                                <li key={subItem.name}>
                                                    <Link
                                                        href={subItem.path}
                                                        className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[var(--color-brand-green)] transition-colors border-l-2 border-transparent hover:border-[var(--color-brand-green)]"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Search Bar */}
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-white/10 border border-white/20 rounded-full py-2 pl-4 pr-10 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-brand-green)] focus:ring-1 focus:ring-[var(--color-brand-green)] transition-all w-32 focus:w-48"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--color-brand-green)]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-[var(--color-brand-green)] transition-colors"
                        aria-label="Toggle Theme"
                        suppressHydrationWarning
                    >
                        {/* Simple Sun/Moon Icon Logic - defaulting to sun for simplicity if unmounted, or checking theme */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 block dark:hidden">
                            {/* Moon Icon (shows in light mode to switch to dark) */}
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hidden dark:block">
                            {/* Sun Icon (shows in dark mode to switch to light) */}
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Button + Spacer (Mobile Toggle could go in menu) */}
                <div className="flex items-center gap-4 lg:hidden">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Toggle Theme Mobile"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 block dark:hidden">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hidden dark:block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    </button>

                    <button
                        className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors z-50 relative"
                        aria-label="Toggle menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white dark:bg-black/95 backdrop-blur-xl z-40 flex flex-col pt-24 px-6 gap-6 overflow-y-auto transition-colors duration-300">
                        <ul className="flex flex-col space-y-4">
                            {['Home', 'Galapagos', 'Amazon', 'Climbing & Trekking', 'Custom Tours', 'Contact'].map((item) => (
                                <li key={item} className="border-b border-gray-100 dark:border-white/10 pb-2">
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ & /g, '-').replace(' ', '-')}`}
                                        className="text-[var(--color-secondary)] dark:text-white hover:text-[var(--color-brand-green)] transition-colors font-serif font-bold text-2xl block"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {/* Mobile Search */}
                        <div className="relative mt-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-gray-100/50 border border-gray-200 rounded-full py-3 pl-4 pr-10 text-base focus:outline-none focus:border-[var(--color-brand-green)]"
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
