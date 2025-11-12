import { useEffect, useState } from "react";

import { useNavigate } from "react-router";
import BillCardFull from "../Components/BillCardFull";

const Bills = () => {
    const [bills, setBills] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        let url = "http://localhost:3000/bills";
        if (selectedCategory) {
            url += `?category=${selectedCategory}`;
        }

        fetch(url)
            .then((res) => res.json())
            .then((data) => setBills(data))
            .catch((err) => console.error(err));
    }, [selectedCategory]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-6">All Bills</h2>

            {/* Category Filter */}
            <div className="mb-6 text-right">
                <select value={selectedCategory} onChange={handleCategoryChange} className="border border-gray-300 px-4 py-2 rounded">
                    <option value="">All Categories</option>
                    <option value="Gas">Gas</option>
                    <option value="Water">Water</option>
                    <option value="Electricity">Electricity</option>
                    <option value="Internet">Internet</option>
                </select>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {bills.map((bill) => (
                    <BillCardFull key={bill._id} bill={bill} onDetails={() => navigate(`/billsDetails/${bill._id}`)} />
                ))}
            </div>
        </div>
    );
};

export default Bills;
