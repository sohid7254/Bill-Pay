import React from "react";
import { GrAppleAppStore } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router"; 

const AppStore = () => {
    return (
        <div className="w-full bg-purple-100 mt-5">
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">
                
                <div className="text-center md:text-left mb-6 md:mb-0 max-w-xl">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800 leading-snug">
                        Download our App to get all kinds of <br />
                        Payment benefits from anywhere
                    </h2>
                </div>

                
                <div className="flex flex-col sm:flex-row gap-4 text-black
                ">
                    <Link to="#" className="flex items-center gap-2 bg-white shadow-md px-4 py-3 rounded-lg hover:shadow-lg transition">
                        <IoLogoGooglePlaystore className="text-3xl text-purple-400" />
                        <span className="text-sm leading-tight">
                            Download on <br />
                            <span className="font-bold text-base-co sm:text-lg">Google Play</span>
                        </span>
                    </Link>
                    <Link to="#" className="flex items-center gap-2 bg-white shadow-md px-4 py-3 rounded-lg hover:shadow-lg transition">
                        <GrAppleAppStore className="text-3xl text-purple-400" />
                        <span className="text-sm leading-tight">
                            Download on <br />
                            <span className="font-bold text-base sm:text-lg">Apple Store</span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppStore;
