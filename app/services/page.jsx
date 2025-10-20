import Link from 'next/link';
import { Card } from 'components/card';

export const metadata = {
    title: 'Services'
};

const tutoring = {
    title: 'Tech Tutoring',
    subtitle: 'One-on-One Programming Instruction',
    price: '$50-80/hour',
    description: 'Personalized programming lessons tailored to your skill level and goals.',
    topics: [
        'JavaScript & TypeScript',
        'React & Next.js',
        'Python & Django',
        'Node.js & Express',
        'Database Design',
        'Git & Version Control',
        'Web APIs & REST',
        'Testing & Debugging'
    ],
    includes: [
        'Customized learning plan',
        'Hands-on coding projects',
        'Code review sessions',
        'Career guidance',
        'Interview preparation',
        'Portfolio development'
    ]
};

const webDesign = {
    title: 'Web Design & Development',
    subtitle: 'Custom Websites for Your Business',
    price: '$500-5000/project',
    description: 'Professional website design and development services from concept to launch.',
    services: [
        'Landing Pages',
        'Business Websites',
        'E-commerce Stores',
        'Portfolio Sites',
        'Web Applications',
        'Mobile-Responsive Design'
    ],
    includes: [
        'Custom design mockups',
        'Responsive development',
        'SEO optimization',
        'Performance optimization',
        'Content management',
        '30 days support'
    ]
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className="text-center">
                <h1 className="mb-4 text-4xl font-bold">Our Services</h1>
                <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                    Choose from our comprehensive tech education and web development services
                </p>
            </section>

            {/* Tech Tutoring */}
            <section>
                <Card title={tutoring.title}>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">{tutoring.subtitle}</h3>
                            <p className="text-2xl font-bold text-blue-300 mb-4">{tutoring.price}</p>
                            <p className="text-blue-200">{tutoring.description}</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3">Topics Covered</h4>
                                <ul className="space-y-2">
                                    {tutoring.topics.map((topic, i) => (
                                        <li key={i} className="flex items-center text-sm">
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">What&apos;s Included</h4>
                                <ul className="space-y-2">
                                    {tutoring.includes.map((item, i) => (
                                        <li key={i} className="flex items-center text-sm">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Web Design */}
            <section>
                <Card title={webDesign.title}>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">{webDesign.subtitle}</h3>
                            <p className="text-2xl font-bold text-blue-300 mb-4">{webDesign.price}</p>
                            <p className="text-blue-200">{webDesign.description}</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3">Services Offered</h4>
                                <ul className="space-y-2">
                                    {webDesign.services.map((service, i) => (
                                        <li key={i} className="flex items-center text-sm">
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">What&apos;s Included</h4>
                                <ul className="space-y-2">
                                    {webDesign.includes.map((item, i) => (
                                        <li key={i} className="flex items-center text-sm">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>

            {/* CTA */}
            <section className="text-center py-12 bg-blue-800 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
                <p className="mb-6 text-blue-200">Book a consultation to discuss your needs and goals.</p>
                <Link href="/booking" className="btn btn-lg bg-white text-blue-900 hover:bg-blue-50">
                    Book Consultation
                </Link>
            </section>
        </div>
    );
}