import React from "react";

const FAQ = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 mt-10 bg-base-100 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-center text-[#8559ff] mb-8">Frequently Asked Questions</h2>

            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold text-[#8559ff]">How do I register an account?</h3>
                    <p className="text-gray-600">Click on the Register button in the navigation bar, fill in your details, and submit.</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-[#8559ff]">How can I pay my bills?</h3>
                    <p className="text-gray-600">Go to the Bills page, select the bill you want to pay, and click Pay Bill.</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-[#8559ff]">Can I update my bill details?</h3>
                    <p className="text-gray-600">Yes, on the My Pay Bills page, click the Update button next to the bill record.</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-[#8559ff]">How do I delete a bill?</h3>
                    <p className="text-gray-600">On the My Pay Bills page, click the Delete button and confirm the action.</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-[#8559ff]">Where can I see my profile?</h3>
                    <p className="text-gray-600">Navigate to the Profile page to view your account details and information.</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-[#8559ff]">Can I download my payment report?</h3>
                    <p className="text-gray-600">Yes, on the My Pay Bills page, click the Download Report button to export your data.</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-[#8559ff]">Is my data secure?</h3>
                    <p className="text-gray-600">Yes, all user data is securely stored in the database and only accessible to you.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
