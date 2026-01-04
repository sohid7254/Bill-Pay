import { useEffect, useState } from "react";

import BillCardFull from "../Components/BillCardFull";
import { Helmet } from "@dr.pogodin/react-helmet";

const Bills = () => {
    const [bills, setBills] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [loading, setloading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setloading(true);
        let url = "https://assignment10-server-beta-weld.vercel.app/bills";
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

    const filteredBills = bills.filter((bill) => bill.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <Helmet>
                <title>Bills</title>
            </Helmet>
            <h2 className="text-2xl font-bold text-center mb-6">All Bills</h2>

            {/* Controls */}
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                    <h3 className="text-xl font-bold">Bills ({filteredBills.length})</h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <input type="text" placeholder="Search by title..." value={search} onChange={(e) => setSearch(e.target.value)} className="border border-gray-300 px-4 py-2 rounded w-full sm:w-auto" />
                    <select value={selectedCategory} onChange={handleCategoryChange} className="border border-gray-300 px-4 py-2 rounded w-full sm:w-auto">
                        <option value="">All Categories</option>
                        <option value="Gas">Gas</option>
                        <option value="Water">Water</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Internet">Internet</option>
                    </select>
                </div>
            </div>

            {/* Grid Layout */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <span className="loading loading-bars loading-xl scale-150"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredBills.map((bill) => (
                        <BillCardFull key={bill._id} bill={bill} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Bills;
