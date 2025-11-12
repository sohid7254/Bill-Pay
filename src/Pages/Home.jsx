import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Category from "../Components/Category";
import FeatureSection from "../Components/FeatureSection";
import BillCard from "../Components/BillCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router";

const Home = () => {
    const [latestBills, setLatestBills] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:3000/latest-bills")
            .then(res => res.json())
            .then((data) => {
                console.log("Latest bills", data);
                setLatestBills(data);
                
            })
            .catch((err) => console.log(err.message));
    }, []);
    return (
        <div>
            <Banner />
            <FeatureSection />
            <Category />
            <div>
                <h2 className="md:text-3xl lg:4xl text-xl font-semibold text-center mt-5">Recent Bills</h2>

                <div className=" mt-10 px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {latestBills.map((bill) => (
                            <BillCard key={bill._id} bill={bill} onDetails={() => navigate(`/billsDetails/${bill._id}`)}></BillCard>
                        ))}
                    </div>
                </div>
            </div>
            <div className="px-4 mt-6 flex justify-end">
                <Link to={"/bills"} className="flex items-center gap-2 text-[#8559ff] font-semibold hover:underline">
                    See More <FaLongArrowAltRight />
                </Link>
            </div>
        </div>
    );
};

export default Home;
