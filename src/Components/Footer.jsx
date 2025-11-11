import React from "react";
import logo from "../assets/logo.png"
import { SlSocialFacebook } from "react-icons/sl";
import { GrLinkedinOption } from "react-icons/gr";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { IoIosMailOpen } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

// Footer component
const Footer = () => {
    
    

    
    const headingClass = "text-lg font-semibold mb-4 border-b-2 border-b-current pb-2 w-2/4 sm:w-1/3 md:w-1/2 lg:w-3/4  text-gray-100";

    
    const linkClass = "text-gray-200 hover:text-[#8559ff] transition duration-200 cursor-pointer text-sm mb-2 flex items-center";

    return (
        <footer className="bg-gray-700 text-gray-300 font-sans mt-12 pt-10 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-2">
                    <div className="lg:col-span-1">
                        <div className="flex flex-col space-x-1 mb-4">
                            <img src={logo} alt="logo" className="w-25" />
                            <p>Bill Pay is a smart solution for bill payment and financial management. We are committed to making your transactions easy, secure, and timely.</p>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm"></p>
                    </div>

                    <div>
                        <h4 className={headingClass}>Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className={linkClass}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className={linkClass}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className={linkClass}>
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className={linkClass}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={headingClass}>Company Policy</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className={linkClass}>
                                    Terms and Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className={linkClass}>
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={headingClass}>Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-400 text-sm flex items-start">
                                <FiMapPin size={18} className="mr-3 mt-1 text-gray-500" />

                                <span>22 Banani,Bangladesh</span>
                            </li>
                            <li className="text-gray-400 text-sm flex items-start">
                                <IoIosMailOpen size={18} className="mr-3 mt-1 text-gray-500" />

                                <a href="mailto:demo@example.com" className="hover:text-[#8559ff] transition">
                                    sohidameen321@gmail.com
                                </a>
                            </li>
                            <li className="text-gray-400 text-sm flex items-start">
                                <FaPhoneAlt size={18} className="mr-3 mt-1 text-gray-500" />
                                
                                <span>+8801637687254</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={headingClass}>Social Links</h4>
                        <div className="flex items-center space-x-3">
                            <a href="#" className="flex items-center justify-center p-2 rounded-full bg-gray-800 hover:bg-[#8559ff] transition duration-300">
                                <SlSocialFacebook size={20} />
                            </a>
                            <a href="#" className="flex items-center justify-center p-2 rounded-full bg-gray-800 hover:bg-[#8559ff] transition duration-300">
                                <GrLinkedinOption size={20} />
                            </a>
                            <a href="#" className="flex items-center justify-center p-2 rounded-full bg-gray-800 hover:bg-[#8559ff] transition duration-300">
                                <FaXTwitter size={20} />
                            </a>
                            <a href="#" className="flex items-center justify-center p-2 rounded-full bg-gray-800 hover:bg-[#8559ff] transition duration-300">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-300 pt-5 pb-5 text-xs text-center text-gray-200">
                    <p>Copyright ©2025 Bill Pay. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;