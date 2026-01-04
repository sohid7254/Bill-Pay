import React, { useState } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Swal from "sweetalert2";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log("Form Data:", formData);
        Swal.fire({
            title: "Message Sent!",
            text: "We will get back to you shortly.",
            icon: "success",
            confirmButtonColor: "#8559ff",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <Helmet>
                <title>Contact Us - Bill Pay</title>
            </Helmet>

            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Get in Touch</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Have questions or need support? We're here to help.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="flex items-start">
                        <div className="bg-[#f3edff] p-4 rounded-full mr-4 text-[#8559ff]">
                            <FiMapPin size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                            <p className="text-gray-600 dark:text-gray-300">22 Banani, Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-[#f3edff] p-4 rounded-full mr-4 text-[#8559ff]">
                            <FiPhone size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                            <p className="text-gray-600 dark:text-gray-300">+880 1637 687254</p>
                            <p className="text-sm text-gray-500">Mon-Fri from 9am to 6pm</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-[#f3edff] p-4 rounded-full mr-4 text-[#8559ff]">
                            <FiMail size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                            <p className="text-gray-600 dark:text-gray-300">sohidameen321@gmail.com</p>
                            <p className="text-sm text-gray-500">We usually reply within 24 hours</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input input-bordered w-full focus:ring-2 focus:ring-[#8559ff]" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input input-bordered w-full focus:ring-2 focus:ring-[#8559ff]" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Subject</label>
                            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="input input-bordered w-full focus:ring-2 focus:ring-[#8559ff]" placeholder="How can we help?" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} required className="textarea textarea-bordered w-full h-32 focus:ring-2 focus:ring-[#8559ff]" placeholder="Write your message here..."></textarea>
                        </div>
                        <button type="submit" className="btn bg-[#8559ff] hover:bg-[#7046d9] text-white w-full">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
