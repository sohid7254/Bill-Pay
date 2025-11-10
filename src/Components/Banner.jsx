
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Using Lucide icons for navigation

// Data for the slider slides
const bannerSlides = [
    {
        id: 1,
        message: "Track Your Energy Footprint. See hourly usage data and cut costs.",
        tagline: "Electricity: Optimize Usage, Maximize Efficiency.",
        color: "bg-red-600", // Fallback background color
        backgroundImage: "https://images.unsplash.com/photo-1554572912-4a133a37c822?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332", // Electricity/Energy Meter
    },
    {
        id: 2,
        message: "Upcoming Payment Alert: Water Bill Due in 3 Days. Pay Now to Avoid Fees.",
        tagline: "Water: Never Miss a Deadline Again.",
        color: "bg-blue-600", // Fallback background color
        backgroundImage: "https://plus.unsplash.com/premium_photo-1661674537971-e108f26c4da9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", // Water Drops
    },
    {
        id: 3,
        message: "Monitor Gas Safety & Usage. Get alerts for unusual consumption patterns.",
        tagline: "Gas: Safety First, Savings Follow.",
        color: "bg-yellow-600", // Fallback background color
        backgroundImage: "https://images.unsplash.com/photo-1590720563742-f88d6bff91ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1333", // Gas Pipes/Meter
    },
    {
        id: 4,
        message: "Internet Service Bill Review: Ensure you are on the best plan for your speed.",
        tagline: "Internet: Don't Overpay for Connection.",
        color: "bg-green-600", // Fallback background color
        backgroundImage: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1086", // Internet/Fiber Optics
    },
];

// The main component, acting as the Banner Slider
const Banner = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const totalSlides = bannerSlides.length;

    // Function to move to the next slide
    const goToNextSlide = useCallback(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
    }, [totalSlides]);

    // Function to move to the previous slide
    const goToPrevSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
    };

    // Autoplay functionality using useEffect
    useEffect(() => {
        const slideInterval = setInterval(() => {
            goToNextSlide();
        }, 5000); // Change slide every 5 seconds

        // Clear the interval when the component unmounts or dependencies change
        return () => clearInterval(slideInterval);
    }, [goToNextSlide]);

    const currentSlide = bannerSlides[currentSlideIndex];

    return (
        <div className="flex justify-center p-4 sm:p-6 bg-gray-50 min-h-[300px] font-sans">
            <div className="w-full max-w-6xl relative overflow-hidden rounded-2xl shadow-xl">
                {/* SLIDE CONTENT CONTAINER */}
                <div
                    className={`relative flex items-center justify-center p-8 sm:p-12 md:p-16 text-white h-64 sm:h-80 transition-all duration-700 ease-in-out`}
                    style={{
                        backgroundImage: `url(${currentSlide.backgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transitionProperty: "background-image, transform, opacity", // Ensure background-image transition
                        opacity: 1,
                    }}
                >
                    {/* Overlay to improve text readability */}
                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

                    {/* Slide Text Content */}
                    <div className="max-w-3xl text-center relative z-10">
                        {" "}
                        {/* z-10 to bring text above overlay */}
                        <p className="text-xl sm:text-3xl font-extrabold mb-3">{currentSlide.message}</p>
                        <p className="text-sm sm:text-lg font-light opacity-80 mt-2">{currentSlide.tagline}</p>
                    </div>
                </div>

                {/* NAVIGATION BUTTONS (Arrows) */}
                <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4 z-20">
                    {" "}
                    {/* Higher z-index for controls */}
                    {/* Left Arrow */}
                    <button onClick={goToPrevSlide} aria-label="Previous Slide" className="p-2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full transition-all duration-300 backdrop-blur-sm">
                        <ChevronLeft size={24} />
                    </button>
                    {/* Right Arrow */}
                    <button onClick={goToNextSlide} aria-label="Next Slide" className="p-2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full transition-all duration-300 backdrop-blur-sm">
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* PAGINATION DOTS */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                    {" "}
                    {/* Higher z-index for dots */}
                    {bannerSlides.map((_, index) => (
                        <button key={index} onClick={() => setCurrentSlideIndex(index)} aria-label={`Go to slide ${index + 1}`} className={`transition-all duration-300 rounded-full h-3 w-3 ${currentSlideIndex === index ? "bg-white scale-110" : "bg-white bg-opacity-50"}`}>
                            {/* Screen reader only text */}
                            <span className="sr-only">Go to slide {index + 1}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;