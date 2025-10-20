import Link from 'next/link';
import { Card } from 'components/card';

export const metadata = {
    title: 'About'
};

const skills = [
    'JavaScript/TypeScript',
    'React & Next.js',
    'Python & Django',
    'Node.js & Express',
    'PostgreSQL & MongoDB',
    'AWS & Cloud Services',
    'Git & DevOps',
    'UI/UX Design'
];

const experience = [
    {
        title: 'Senior Full Stack Developer',
        company: 'Tech Startup',
        period: '2020 - Present',
        description: 'Led development of web applications serving 10k+ users'
    },
    {
        title: 'Programming Instructor',
        company: 'Coding Bootcamp',
        period: '2019 - 2021',
        description: 'Taught 100+ students web development fundamentals'
    },
    {
        title: 'Freelance Web Developer',
        company: 'Self-Employed',
        period: '2018 - Present',
        description: 'Built 50+ websites for small businesses and startups'
    }
];

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className="text-center">
                <h1 className="mb-4 text-4xl font-bold">About TechTutor Pro</h1>
                <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                    Passionate about teaching technology and building amazing web experiences
                </p>
            </section>

            {/* Personal Story */}
            <section>
                <Card title="My Story">
                    <div className="space-y-4 text-blue-200">
                        <p>
                            Hi! I'm a full-stack developer with over 5 years of experience building web applications 
                            and teaching programming. My journey started with a simple "Hello World" program, and 
                            I've been passionate about code ever since.
                        </p>
                        <p>
                            After working at several tech companies and teaching at coding bootcamps, I realized 
                            my true calling was helping others master technology. Whether you're a complete beginner 
                            or looking to advance your career, I'm here to guide you every step of the way.
                        </p>
                        <p>
                            When I'm not coding or teaching, you'll find me contributing to open source projects, 
                            writing technical blogs, or exploring the latest web technologies.
                        </p>
                    </div>
                </Card>
            </section>

            {/* Skills & Experience */}
            <div className="grid md:grid-cols-2 gap-6">
                <Card title="Technical Skills">
                    <div className="grid grid-cols-2 gap-3">
                        {skills.map((skill, i) => (
                            <div key={i} className="flex items-center text-sm">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                                {skill}
                            </div>
                        ))}
                    </div>
                </Card>

                <Card title="Experience">
                    <div className="space-y-4">
                        {experience.map((job, i) => (
                            <div key={i} className="border-l-2 border-blue-600 pl-4">
                                <h4 className="font-semibold">{job.title}</h4>
                                <p className="text-blue-300 text-sm">{job.company} • {job.period}</p>
                                <p className="text-blue-200 text-sm mt-1">{job.description}</p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Teaching Philosophy */}
            <section>
                <Card title="Teaching Philosophy">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl">🎯</span>
                            </div>
                            <h3 className="font-semibold mb-2">Personalized Learning</h3>
                            <p className="text-sm text-blue-200">
                                Every student learns differently. I adapt my teaching style to match your learning preferences.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl">🚀</span>
                            </div>
                            <h3 className="font-semibold mb-2">Project-Based</h3>
                            <p className="text-sm text-blue-200">
                                Learn by building real projects that you can add to your portfolio and showcase to employers.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl">💡</span>
                            </div>
                            <h3 className="font-semibold mb-2">Practical Focus</h3>
                            <p className="text-sm text-blue-200">
                                Focus on skills and technologies that are in demand in today's job market.
                            </p>
                        </div>
                    </div>
                </Card>
            </section>

            {/* CTA */}
            <section className="text-center py-12 bg-blue-800 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
                <p className="mb-6 text-blue-200">
                    Let's discuss your goals and create a personalized learning plan for you.
                </p>
                <Link href="/booking" className="btn btn-lg bg-white text-blue-900 hover:bg-blue-50">
                    Schedule a Free Consultation
                </Link>
            </section>
        </div>
    );
}