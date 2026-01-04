import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { FaWallet, FaFileInvoiceDollar, FaChartLine } from "react-icons/fa";
import { Helmet } from "@dr.pogodin/react-helmet";

const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    const [bills, setBills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            fetch(`https://assignment10-server-beta-weld.vercel.app/payments?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setBills(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [user]);

    // Calculate Stats
    const totalBills = bills.length;
    // Ensure amount is treated as number (payments api usually returns string numbers)
    const totalAmount = bills.reduce((sum, bill) => sum + Number(bill.amount || 0), 0);
    const averageBill = totalBills > 0 ? (totalAmount / totalBills).toFixed(0) : 0;

    // Prepare Chart Data (Group by Category)
    // Payments might not have 'category' field if it wasn't saved.
    // We will fallback to 'Uncategorized' if missing, or use 'Bill' if that's generic.
    const categoryData = bills.reduce((acc, bill) => {
        const cat = bill.category || "General";
        const existing = acc.find((item) => item.name === cat);
        if (existing) {
            existing.value += Number(bill.amount || 0);
            existing.count += 1;
        } else {
            acc.push({ name: cat, value: Number(bill.amount || 0), count: 1 });
        }
        return acc;
    }, []);

    const COLORS = ["#8559ff", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <Helmet>
                <title>Dashboard - Overview</title>
            </Helmet>

            {/* Find Me: Welcome Section */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Welcome back, {user?.displayName?.split(" ")[0]}! 👋</h1>
                <p className="text-gray-500 dark:text-gray-400">Here's what's happening with your bills today.</p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="stat bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-100 dark:border-gray-700">
                    <div className="stat-figure text-[#8559ff]">
                        <FaWallet size={32} />
                    </div>
                    <div className="stat-title text-gray-500">Total Spend</div>
                    <div className="stat-value text-[#8559ff] text-3xl">৳{totalAmount}</div>
                    <div className="stat-desc text-gray-400">Lifetime total</div>
                </div>

                <div className="stat bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-100 dark:border-gray-700">
                    <div className="stat-figure text-secondary">
                        <FaFileInvoiceDollar size={32} />
                    </div>
                    <div className="stat-title text-gray-500">Total Bills</div>
                    <div className="stat-value text-secondary text-3xl">{totalBills}</div>
                    <div className="stat-desc text-gray-400">Processed bills</div>
                </div>

                <div className="stat bg-white dark:bg-gray-800 shadow-sm rounded-xl border border-gray-100 dark:border-gray-700">
                    <div className="stat-figure text-primary">
                        <FaChartLine size={32} />
                    </div>
                    <div className="stat-title text-gray-500">Avg. Bill Cost</div>
                    <div className="stat-value text-primary text-3xl">৳{averageBill}</div>
                    <div className="stat-desc text-gray-400">Per transaction</div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Bar Chart */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-bold mb-6 text-gray-700 dark:text-gray-200">Spending by Category</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={categoryData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF" }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF" }} />
                                <Tooltip contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }} cursor={{ fill: "#F3F4F6" }} />
                                <Bar dataKey="value" fill="#8559ff" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-bold mb-6 text-gray-700 dark:text-gray-200">Bill Distribution</h3>
                    <div className="h-80 w-full flex justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#8884d8" paddingAngle={5} dataKey="count">
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }} />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Recent Table (Optional - reusing part of logic if needed or just showing latest 5) */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200">Recent Transactions</h3>
                    <button className="btn btn-sm btn-ghost text-[#8559ff]">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-gray-50 dark:bg-gray-700/50 text-gray-500">
                            <tr>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bills.slice(0, 5).map((bill) => (
                                <tr key={bill._id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    
                                    <td className="text-gray-500">{bill.date}</td>
                                    <td className="font-bold">৳{bill.amount}</td>
                                    <td>
                                        <span className="badge badge-success badge-sm text-white">Paid</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
