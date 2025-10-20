'use client';

import { useState } from 'react';
import { Card } from 'components/card';

export default function BookingPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: '',
        preferredTime: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you would typically send to your backend
        console.log('Booking submitted:', formData);
        setIsSubmitted(true);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (isSubmitted) {
        return (
            <div className="flex flex-col gap-8 max-w-2xl mx-auto">
                <Card title="Booking Submitted!">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold">Thank you, {formData.name}!</h2>
                        <p className="text-blue-200">
                            We&apos;ve received your booking request for {formData.service.toLowerCase()}. 
                            We&apos;ll contact you within 24 hours to confirm your session.
                        </p>
                        <button 
                            onClick={() => setIsSubmitted(false)}
                            className="btn btn-primary"
                        >
                            Book Another Session
                        </button>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
            <section className="text-center">
                <h1 className="mb-4 text-4xl font-bold">Book a Session</h1>
                <p className="text-xl text-blue-200">
                    Ready to start learning or build your website? Let&apos;s schedule a time to connect.
                </p>
            </section>

            <Card title="Booking Form">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Your full name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="service" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                            Service *
                        </label>
                        <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        >
                            <option value="">Select a service</option>
                            <option value="Tech Tutoring">Tech Tutoring</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Consultation">Free Consultation</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="preferredTime" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                            Preferred Time
                        </label>
                        <input
                            type="text"
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="e.g., Weekday evenings, Saturday mornings"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                            placeholder="Tell us about your goals, current skill level, or project requirements..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full btn btn-primary btn-lg"
                    >
                        Submit Booking Request
                    </button>
                </form>
            </Card>

            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                <p>We&apos;ll respond within 24 hours to confirm your session.</p>
                <p>Have questions? Email us at <a href="mailto:hello@techtutorpro.com" className="text-blue-600 dark:text-blue-400 hover:underline">hello@techtutorpro.com</a></p>
            </div>
        </div>
    );
}