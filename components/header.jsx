'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './theme-toggle';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Services', href: '/services' },
    { linkText: 'About', href: '/about' },
    { linkText: 'Book Now', href: '/booking' }
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 glass border-b border-white/20 dark:border-white/10">
            <nav className="flex items-center justify-between py-4">
                <Link href="/" className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-800 via-black to-blue-900 bg-clip-text text-transparent animate-float">
                    TechTutor Pro
                </Link>
                
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="relative text-gray-900 dark:text-gray-100 hover:text-blue-800 dark:hover:text-blue-200 font-semibold transition-all duration-300 group"
                        >
                            {item.linkText}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-800 to-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <Link
                        href="/booking"
                        className="btn btn-primary hidden sm:inline-flex px-4 py-2 text-sm"
                    >
                        Get Started
                    </Link>
                    
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg glass"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden glass border-t border-white/20 dark:border-white/10">
                    <div className="flex flex-col space-y-4 p-4">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-900 dark:text-gray-100 hover:text-blue-800 dark:hover:text-blue-200 font-semibold py-2 transition-colors"
                            >
                                {item.linkText}
                            </Link>
                        ))}
                        <Link
                            href="/booking"
                            onClick={() => setIsMenuOpen(false)}
                            className="btn btn-primary w-full mt-4"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
