"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { NAVIGATION_ITEMS } from '@/data/navigation';
import { usePathname } from 'next/navigation';

// Simple Icons Mapping
const ICONS: Record<string, React.ReactNode> = {
    home: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    ),
    ship: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
    ), // Generic directional for now, or use a ship SVG path if available. Using arrow for "Go" as placeholder or similar. Let's use a ship/boat approximation or generic.
    // Better Ship Icon
    ship_alt: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
    ),
    tree: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.333 1.333l-7 14h4l-3 7.333h12l-3-7.333h4l-7-14z" />  {/* Simplified tree */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0h18M5 10.5h.008v.008H5V10.5Zm0 3h.008v.008H5V13.5Zm0 3h.008v.008H5V16.5Zm3-6h.008v.008H8V10.5Zm0 3h.008v.008H8V13.5Zm0 3h.008v.008H8V16.5Zm3-6h.008v.008H11V10.5Zm0 3h.008v.008H11V13.5Zm0 3h.008v.008H11V16.5Zm3-6h.008v.008H14V10.5Zm0 3h.008v.008H14V13.5Zm0 3h.008v.008H14V16.5Zm3-6h.008v.008H17V10.5Zm0 3h.008v.008H17V13.5Zm0 3h.008v.008H17V16.5Z" />
        </svg>
    ),
    mountain: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-9.22 9.22m-9 0 3.75-3.75m0 0L16.24 7.5" />
        </svg>
    ),
    map: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
        </svg>
    ),
    mail: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
    ),
};

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<string | null>(null);
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();

    // Reset menu on route change during render
    const [prevPathname, setPrevPathname] = useState(pathname);
    if (pathname !== prevPathname) {
        setPrevPathname(pathname);
        if (isMenuOpen) setIsMenuOpen(false);
        if (expandedMobileSubmenu) setExpandedMobileSubmenu(null);
    }

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isMenuOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const toggleMobileSubmenu = (name: string) => {
        setExpandedMobileSubmenu(prev => prev === name ? null : name);
    };

    return (
        <>
            <header className="bg-(--color-gray-dark) backdrop-blur-md sticky top-0 z-50 border-b border-white/10 shadow-sm transition-all duration-300">
                <nav className="container mx-auto px-4 h-20 flex items-center justify-between" aria-label="Main Navigation">
                    <Link href="/" className="flex items-center group p-4 shrink-0">
                        <Image src="/logo-eos.svg" alt="Eos Ecuador Logo" width={160} height={80} className="w-40 h-20 object-contain" priority />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        <ul className="flex space-x-6">
                            {NAVIGATION_ITEMS.map((item) => (
                                <li key={item.name} className="relative group">
                                    <Link
                                        href={item.path}
                                        className={`text-gray-300 hover:text-white transition-colors font-medium text-sm uppercase tracking-wide relative flex items-center gap-1 py-4 ${pathname === item.path ? 'text-white' : ''
                                            }`}
                                    >
                                        {item.name}
                                        {item.submenu && (
                                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 mt-0.5 transition-transform group-hover:rotate-180">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        )}
                                        <span className={`absolute bottom-2 left-0 h-0.5 bg-(--color-brand-green) transition-all duration-300 ${pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {item.submenu && (
                                        <div className="absolute top-full left-0 w-48 bg-white dark:bg-[#1a1a1a] shadow-xl rounded-b-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border-t-2 border-(--color-brand-green)">
                                            <ul className="py-2">
                                                {item.submenu.map((subItem) => (
                                                    <li key={subItem.name}>
                                                        <Link
                                                            href={subItem.path}
                                                            className="block px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-(--color-brand-green) dark:hover:text-(--color-brand-green) transition-colors border-l-2 border-transparent hover:border-(--color-brand-green)"
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
                        <div className="relative group flex items-center">
                            <input
                                type="text"
                                placeholder="Search..."
                                aria-label="Search tours and cruises"
                                className="bg-white/10 border border-white/20 rounded-full py-2.5 pl-4 pr-12 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-(--color-brand-green) focus:ring-1 focus:ring-(--color-brand-green) transition-all w-32 focus:w-48 h-11"
                            />
                            <button
                                className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center text-gray-400 hover:text-(--color-brand-green) transition-colors"
                                aria-label="Submit search"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </div>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-(--color-brand-green) transition-colors ml-2"
                            aria-label="Toggle Theme"
                            suppressHydrationWarning
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 block dark:hidden">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hidden dark:block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Button Info */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="w-11 h-11 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-colors"
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
                            className="w-11 h-11 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-colors z-50 relative"
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

                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-100 lg:hidden w-screen h-dvh"
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar Drawer */}
            <aside
                className={`fixed top-0 right-0 inset-y-0 h-dvh w-[80%] max-w-sm bg-background z-110 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header of Sidebar (Colored) */}
                <div className="bg-(--color-accent) p-6 shrink-0 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white overflow-hidden relative">
                            <Image src="/logo-eos.svg" alt="Eos Ecuador Profile Logo" fill className="object-cover p-1" />
                        </div>
                        <div className='dark:hover:bg-white/5'>
                            <p className="font-bold text-black text-lg dark:text-gray-200 dark:hover:bg-white/5">Eos Ecuador</p>
                            <p className="text-black/70 text-sm dark:text-gray-200 dark:hover:bg-white/5 ">Travel & Adventures</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 text-black/70 hover:text-black transition-colors dark:text-gray-200 dark:hover:bg-white/5"
                        aria-label="Close menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Menu Content */}
                <div className="flex-1 overflow-y-auto pt-4 flex flex-col">
                    <ul className="flex flex-col">
                        {NAVIGATION_ITEMS.map((item) => (
                            <li key={item.name} className="">
                                {item.submenu ? (
                                    <div className="flex flex-col">
                                        <button
                                            onClick={() => toggleMobileSubmenu(item.name)}
                                            className="flex items-center justify-between w-full px-6 py-4 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors font-serif font-semibold text-lg text-left"
                                        >
                                            <div className="flex items-center gap-4">
                                                <span className="text-gray-500 w-6 flex justify-center">{item.icon && ICONS[item.icon]}</span>
                                                <span>{item.name}</span>
                                            </div>
                                            <svg
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className={`w-4 h-4 transition-transform duration-300 ${expandedMobileSubmenu === item.name ? 'rotate-180 text-[#FFD700]' : 'text-gray-400'}`}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMobileSubmenu === item.name ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <ul className="flex flex-col bg-gray-50/50 dark:bg-white/5">
                                                {item.submenu.map((subItem) => (
                                                    <li key={subItem.name}>
                                                        <Link
                                                            href={subItem.path}
                                                            className="flex items-center gap-4 px-6 pl-16 py-3 text-gray-600 dark:text-gray-400 hover:text-[#FFD700] dark:hover:text-[#FFD700] text-base"
                                                            onClick={() => setIsMenuOpen(false)}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.path}
                                        className="flex items-center gap-4 px-6 py-4 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors font-serif font-semibold text-lg"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span className="text-gray-500 w-6 flex justify-center">{item.icon && ICONS[item.icon]}</span>
                                        <span>{item.name}</span>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
}
