import React from 'react';
import image from "../assets/404page.jpg"
import { Link } from 'react-router';
const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f5f5f5]  p-4 font-sans ">
            <div className="max-w-xl w-full p-8 sm:p-10 text-center transition-colors duration-500">
                <div className="mb-3">
                    <img src={image} alt="" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Sorry, this page could not be found!</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">You've come to the wrong address, or the page you're looking for might have been moved or had its address changed.</p>

                <Link onClick={() => (window.location.href = "/")} className="bg-purple-500 w-45 px-3 py-2 rounded-r-full rounded-l-full font-bold text-white">
                    Return to Home Page
                </Link>
            </div>
        </div>
    );
};

export default NotFound;