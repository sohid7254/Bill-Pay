import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <Helmet>
                <title>About Us - Bill Pay</title>
            </Helmet>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Bill Pay</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Simplifying your financial life, one bill at a time.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Our Mission</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        At Bill Pay, our mission is to provide a seamless, secure, and efficient platform for managing all your utility and service payments. We believe that staying on top of your bills shouldn't be a chore, but a simple part of your digital lifestyle.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Founded in 2025, we've helped thousands of users save time and avoid late fees by centralizing their bill payments in one easy-to-use dashboard.</p>
                </div>
                <div className="bg-base-200 rounded-lg p-8 shadow-inner flex items-center justify-center">
                    {/* Placeholder for an image or illustration */}
                    <div className="text-center">
                        <div className="text-6xl mb-4">💡</div>
                        <p className="font-semibold text-gray-500">Innovation at Heart</p>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-8">Why Choose Us?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold mb-3 text-[#8559ff]">Secure</h3>
                        <p className="text-gray-600 dark:text-gray-300">Top-tier encryption to ensure your financial data is always safe.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold mb-3 text-[#8559ff]">Fast</h3>
                        <p className="text-gray-600 dark:text-gray-300">Instant processing ensures your payments are recorded immediately.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold mb-3 text-[#8559ff]">Reliable</h3>
                        <p className="text-gray-600 dark:text-gray-300">24/7 uptime so you can pay your bills whenever it suits you.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
