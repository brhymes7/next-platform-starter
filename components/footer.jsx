import Link from 'next/link';

export function Footer() {
    return (
        <footer className="mt-20 pt-12 pb-8 border-t border-blue-300 dark:border-blue-700">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p>&copy; 2024 TechTutor Pro. All rights reserved.</p>
                </div>
                <div className="flex gap-8 text-sm">
                    <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                        Services
                    </Link>
                    <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                        About
                    </Link>
                    <Link href="/booking" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                        Book Now
                    </Link>
                    <a href="mailto:hello@techtutorpro.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
