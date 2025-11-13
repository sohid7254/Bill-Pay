
import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayouts = () => {
    return (
        <div className="flex flex-col min-h-screen bg-base-200 text-base-content">
            {/* Navbar */}
            <Navbar />

            {/* Main Content - grows to fill available space */}
            <main className="grow">
                <div className="max-w-7xl mx-auto px-4 ">
                    <Outlet />
                </div>
            </main>

            {/* Footer stays at the bottom */}
            <Footer />
        </div>
    );
};

export default MainLayouts;