import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bannerSlides = [
    {
        id: 1,
        message: "Track Your Energy Footprint. See hourly usage data and cut costs.",
        tagline: "Electricity: Optimize Usage, Maximize Efficiency.",
        backgroundImage: "https://images.unsplash.com/photo-1554572912-4a133a37c822?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1332",
    },
    {
        id: 2,
        message: "Upcoming Payment Alert: Water Bill Due in 3 Days. Pay Now to Avoid Fees.",
        tagline: "Water: Never Miss a Deadline Again.",
        backgroundImage: "https://plus.unsplash.com/premium_photo-1661674537971-e108f26c4da9?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
    },
    {
        id: 3,
        message: "Monitor Gas Safety & Usage. Get alerts for unusual consumption patterns.",
        tagline: "Gas: Safety First, Savings Follow.",
        backgroundImage: "https://images.unsplash.com/photo-1590720563742-f88d6bff91ce?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1333",
    },
    {
        id: 4,
        message: "Internet Service Bill Review: Ensure you are on the best plan for your speed.",
        tagline: "Internet: Don't Overpay for Connection.",
        backgroundImage: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1086",
    },
];

const Banner = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const totalSlides = bannerSlides.length;

    const goToNextSlide = useCallback(() => {
        setCurrentSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, [totalSlides]);

    const goToPrevSlide = () => {
        setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 5000);
        return () => clearInterval(interval);
    }, [goToNextSlide]);

    const currentSlide = bannerSlides[currentSlideIndex];

    return (
        <div className="overflow-hidden mt-3">
            <div className="w-full relative overflow-hidden rounded-lg shadow-xl">
                {/* Slide Content */}
                <div
                    className="relative flex items-center justify-center h-64 sm:h-80 lg:h-[400px] text-white transition-all duration-700 ease-in-out"
                    style={{
                        backgroundImage: `url(${currentSlide.backgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    
                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

                    
                    <div className="max-w-3xl text-center relative z-10 px-4">
                        <p className="text-xl sm:text-3xl font-extrabold mb-3">{currentSlide.message}</p>
                        <p className="text-sm sm:text-lg font-light opacity-80">{currentSlide.tagline}</p>
                    </div>
                </div>

                
                <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 z-20">
                    <button onClick={goToPrevSlide} aria-label="Previous Slide" className="text-white cursor-pointer">
                        <ChevronLeft size={15} />
                    </button>
                    <button onClick={goToNextSlide} aria-label="Next Slide" className="text-white cursor-pointer">
                        <ChevronRight size={15} />
                    </button>
                </div>

                
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                    {bannerSlides.map((_, index) => (
                        <button key={index} onClick={() => setCurrentSlideIndex(index)} aria-label={`Go to slide ${index + 1}`} className={`h-3 w-3 rounded-full transition-all duration-300 ${currentSlideIndex === index ? "bg-white scale-110" : "bg-white bg-opacity-50"}`}>
                            <span className="sr-only">Go to slide {index + 1}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
