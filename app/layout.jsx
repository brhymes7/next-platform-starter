import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | TechTutor Pro',
        default: 'TechTutor Pro - Tech Tutoring & Web Design'
    },
    description: 'Professional tech tutoring and web design services. Learn programming, build websites, and advance your career with personalized instruction.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-500 min-h-screen">
                <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/20 via-white/5 to-transparent dark:from-blue-800/20 dark:via-gray-900/5 dark:to-transparent pointer-events-none"></div>
                <div className="relative flex flex-col min-h-screen">
                    <div className="flex flex-col w-full max-w-7xl mx-auto grow px-4 sm:px-6 md:px-8 lg:px-12">
                        <Header />
                        <main className="grow relative z-10">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
