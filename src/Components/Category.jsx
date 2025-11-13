// src/components/CategorySection.jsx
import React from "react";
import power from "../assets/electricity.png"
import web from "../assets/internet.png"
import gas from "../assets/gas.png"
import water from "../assets/water.png"

const Category = () => {
    return (
        <div className=" mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">Bill Categories</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div
                    className="bg-[#e8eefc] text-black  p-6 rounded-lg  shadow-sm 
                       hover:scale-105
                       hover:bg-[#eae7fc] 
                       transition duration-300 ease-in-out"
                >
                    <div className="flex flex-col justify-center items-center">
                        <img src={power} alt="power" className="w-10" />
                        <p className="text-lg font-semibold">Electricity</p>
                    </div>
                </div>
                <div
                    className="bg-[#e8eefc] text-black p-6 rounded-lg text-center shadow-sm 
                       hover:scale-105
                       hover:bg-[#eae7fc] 
                       transition duration-300 ease-in-out"
                >
                    <div className="flex flex-col justify-center items-center">
                        <img src={web} alt="internet" className="w-10" />
                        <p className="text-lg font-semibold">Internet</p>
                    </div>
                </div>
                <div
                    className="bg-[#e8eefc] text-black p-6 rounded-lg text-center shadow-sm 
                       hover:scale-105
                       hover:bg-[#eae7fc] 
                       transition duration-300 ease-in-out"
                >
                    <div className="flex flex-col justify-center items-center">
                        <img src={water} alt="" className="w-10" />
                        <p className="text-lg font-semibold">Water</p>
                    </div>
                </div>
                <div
                    className="bg-[#e8eefc] text-black p-6 rounded-lg text-center shadow-sm 
                       hover:scale-105
                       hover:bg-[#eae7fc]
                       transition duration-300 ease-in-out"
                >
                    <div className="flex flex-col justify-center items-center">
                        <img src={gas} alt="" className="w-8" />
                        <p className="text-lg font-semibold">Gas</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
