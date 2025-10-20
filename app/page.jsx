import Link from 'next/link';
import { Card } from 'components/card';

const services = [
    {
        title: 'Tech Tutoring',
        description: 'One-on-one programming lessons in JavaScript, React, Python, and more.',
        price: 'From $50/hour',
        features: ['Personalized curriculum', 'Project-based learning', 'Career guidance']
    },
    {
        title: 'Web Design',
        description: 'Custom website design and development for businesses and individuals.',
        price: 'From $500/project',
        features: ['Responsive design', 'Modern frameworks', 'SEO optimization']
    }
];

export default function Page() {
    return (
        <div className="flex flex-col gap-20 sm:gap-32">
            {/* Hero Section */}
            <section className="relative text-center py-12 sm:py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-[3rem] blur-3xl"></div>
                <div className="relative z-10 px-4">
                    <div className="mb-8 sm:mb-12">
                        <h1 className="mb-6 sm:mb-8 text-4xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-800 via-black to-blue-900 bg-clip-text text-transparent leading-tight animate-float">
                            Learn Tech.
                            <br />Build Websites.
                        </h1>
                        <p className="mb-8 sm:mb-12 text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium px-4">
                            Professional tech tutoring and web design services to help you master programming and create stunning websites.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
                        <Link href="/booking" className="btn btn-primary w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                            🚀 Book a Session
                        </Link>
                        <Link href="/services" className="btn btn-secondary w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                            ✨ View Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="relative px-4">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-blue-800 via-black to-blue-900 bg-clip-text text-transparent">
                        Our Services
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-800 to-black mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="group">
                            <Card title={service.title}>
                                <p className="mb-6 sm:mb-8 text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">{service.description}</p>
                                <p className="font-black text-2xl sm:text-3xl mb-6 sm:mb-8 bg-gradient-to-r from-blue-800 to-black bg-clip-text text-transparent">{service.price}</p>
                                <ul className="space-y-3 sm:space-y-4">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center group/item">
                                            <div className="w-3 h-3 bg-gradient-to-r from-blue-800 to-black rounded-full mr-3 sm:mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                                            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm sm:text-base">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative text-center py-12 sm:py-16 md:py-20 glass rounded-2xl sm:rounded-[3rem] border border-white/20 dark:border-white/10 overflow-hidden mx-4">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-black/15 to-blue-900/20"></div>
                <div className="relative z-10 px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-blue-800 to-black bg-clip-text text-transparent">Ready to Get Started?</h2>
                    <p className="mb-8 sm:mb-10 text-gray-800 dark:text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto px-4">Book your first session today and start your learning journey.</p>
                    <Link href="/booking" className="btn btn-primary w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 animate-glow">
                        🎯 Schedule Now
                    </Link>
                </div>
            </section>
        </div>
    );
}
