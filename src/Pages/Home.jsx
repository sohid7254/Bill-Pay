import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Category from "../Components/Category";
import FeatureSection from "../Components/FeatureSection";
import BillCard from "../Components/BillCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";
import AppStore from "../Components/AppStore";
import NewsLater from "../Components/NewsLater";
import { Helmet } from "@dr.pogodin/react-helmet";

const Home = () => {
    const [latestBills, setLatestBills] = useState([]);
    
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setloading(true);
        fetch("https://assignment10-server-beta-weld.vercel.app/latest-bills")
            .then((res) => res.json())
            .then((data) => {
                console.log("Latest bills", data);
                setLatestBills(data);
                setloading(false);
            })
            .catch((err) => {
                console.log(err.message);
                setloading(false);
            });
    }, []);
    return (
        <div>
            <Helmet>
                <title>Home-Bills Management System</title>
            </Helmet>
            <Banner />
            <FeatureSection />
            <Category />
            <div>
                <h2 className="md:text-3xl lg:4xl text-xl font-semibold text-center mt-5">Recent Bills</h2>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <span className="loading loading-bars loading-xl scale-150"></span>
                    </div>
                ) : (
                    <div className=" mt-10 px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {latestBills.map((bill) => (
                                <BillCard key={bill._id} bill={bill} ></BillCard>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="px-4 mt-6 flex justify-end">
                <Link to={"/bills"} className="flex items-center gap-2 text-[#8559ff] font-semibold hover:underline">
                    See More <FaLongArrowAltRight />
                </Link>
            </div>
            <AppStore />
            <NewsLater />
        </div>
    );
};

export default Home;
