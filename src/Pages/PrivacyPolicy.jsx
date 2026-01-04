import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <Helmet>
                <title>Privacy Policy - Bill Pay</title>
            </Helmet>

            <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>

            <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">
                <p className="text-sm text-gray-500">Last updated: January 2025</p>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">1. Information We Collect</h2>
                    <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, and payment information.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2. How We Use Your Information</h2>
                    <p>We use the information we collect to provide, maintain, and improve our services, such as to:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Process payments and send receipts.</li>
                        <li>Send you technical notices, updates, security alerts, and support messages.</li>
                        <li>Respond to your comments, questions, and requests.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">3. Sharing of Information</h2>
                    <p>We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>With third-party service providers to enable them to provide services on our behalf.</li>
                        <li>With the public if you submit content to a public forum, such as blog comments.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">4. Security</h2>
                    <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">5. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at sohidameen321@gmail.com.</p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
