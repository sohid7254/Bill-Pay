import { useEffect, useState } from "react";

import { useNavigate } from "react-router";
import BillCardFull from "../Components/BillCardFull";
import { Helmet } from "@dr.pogodin/react-helmet";

const Bills = () => {
    const [bills, setBills] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [loading, setloading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setloading(true);
        let url = "http://localhost:3000/bills";
        if (selectedCategory) {
            url += `?category=${selectedCategory}`;
        }

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setBills(data);
                setloading(false);
            })
            .catch((err) => {
                console.error(err);
                setloading(false);
            });
    }, [selectedCategory]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <Helmet>
                <title>Bills</title>
            </Helmet>
            <h2 className="text-2xl font-bold text-center mb-6">All Bills</h2>

            {/* Category Filter */}
            <div className="mb-6 flex justify-between">
                <div>
                    <h3 className="text-xl font-bold">Bills ({bills.length})</h3>
                </div>
                <select value={selectedCategory} onChange={handleCategoryChange} className="border border-gray-300 px-4 py-2 rounded">
                    <option value="">All Categories</option>
                    <option value="Gas">Gas</option>
                    <option value="Water">Water</option>
                    <option value="Electricity">Electricity</option>
                    <option value="Internet">Internet</option>
                </select>
            </div>

            {/* Grid Layout */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <span className="loading loading-bars loading-xl scale-150"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bills.map((bill) => (
                        <BillCardFull key={bill._id} bill={bill} onDetails={() => navigate(`/billsDetails/${bill._id}`)} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Bills;
