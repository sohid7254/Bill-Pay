import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";

const Terms = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <Helmet>
                <title>Terms and Conditions - Bill Pay</title>
            </Helmet>

            <h1 className="text-3xl font-bold mb-8 text-center">Terms and Conditions</h1>

            <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">
                <p className="text-sm text-gray-500">Last updated: January 2025</p>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">1. Introduction</h2>
                    <p>Welcome to Bill Pay. By accessing our website and using our services, you agree to be bound by these Terms and Conditions. Please read them carefully.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2. Use of Service</h2>
                    <p>You agree to use Bill Pay only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">3. User Accounts</h2>
                    <p>To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">4. Payments</h2>
                    <p>All payments made through Bill Pay are subject to verification. We verify payments to ensure protection against fraud. We reserve the right to refuse to process a transaction for any reason.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">5. Limitation of Liability</h2>
                    <p>Bill Pay shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">6. Changes to Terms</h2>
                    <p>We reserve the right to modify these terms at any time. We will always post the most current version on our website. By continuing to use the service, you agree to be bound by the updated terms.</p>
                </section>
            </div>
        </div>
    );
};

export default Terms;
