import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Services', href: '/services' },
    { linkText: 'About', href: '/about' },
    { linkText: 'Book Now', href: '/booking' }
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 glass border-b border-white/20 dark:border-white/10">
            <nav className="flex items-center justify-between py-6">
                <Link href="/" className="text-3xl font-black bg-gradient-to-r from-blue-800 via-black to-blue-900 bg-clip-text text-transparent animate-float">
                    TechTutor Pro
                </Link>
                
                <div className="hidden md:flex items-center space-x-10">
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

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Link
                        href="/booking"
                        className="btn btn-primary btn-lg hidden sm:inline-flex animate-glow"
                    >
                        Get Started
                    </Link>
                </div>
            </nav>
        </header>
    );
}
