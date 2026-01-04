import React from "react";
import { Link, Outlet, NavLink, useNavigate } from "react-router"; // react-router v7
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { RxDashboard } from "react-icons/rx";
import { FaMoneyBillWave, FaUserCircle, FaPlusCircle, FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/logo.png"; // Assuming logo exists there

const DashboardLayout = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                navigate("/");
            })
            .catch((error) => console.log(error));
    };

    const sidebarLinks = [
        { name: "Overview", path: "/dashboard", icon: <RxDashboard size={20} /> },
        { name: "My Bills", path: "/dashboard/my-bills", icon: <FaMoneyBillWave size={20} /> },
        { name: "Add Bill", path: "/dashboard/add-bills", icon: <FaPlusCircle size={20} /> },
        { name: "Profile", path: "/dashboard/profile", icon: <FaUserCircle size={20} /> },
    ];

    return (
        <div className="drawer lg:drawer-open min-h-screen">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col bg-base-200 min-h-screen">
                {/* Navbar for Mobile/Tablet */}
                <div className="w-full navbar bg-base-100 shadow-sm lg:hidden sticky top-0 z-40">
                    <div className="flex-none">
                        <label htmlFor="dashboard-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 font-bold text-lg">Bill Pay Dashboard</div>
                </div>

                {/* Page Content */}
                <div className="p-6 md:p-10 grow">
                    <Outlet />
                </div>
            </div>

            {/* Sidebar */}
            <div className="drawer-side z-50">
                <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-60 min-h-full bg-base-100 text-base-content border-r border-gray-200 flex flex-col justify-between">
                    {/* Top Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-8 px-2">
                            {/* Keep logo or brand name */}
                            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                            <span className="text-xl font-bold text-[#8559ff]">Bill Pay</span>
                        </div>

                        <ul className="space-y-2">
                            {sidebarLinks.map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        end={link.path === "/dashboard"} // Only exact match for root dashboard
                                        className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${isActive ? "bg-[#8559ff] text-white shadow-md focus:bg-[#8559ff]" : "text-gray-600 hover:bg-gray-100 active:bg-gray-200"}`}
                                    >
                                        {link.icon}
                                        <span className="font-medium">{link.name}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-200 pt-4">
                        <div className="px-4 py-2 mb-2">
                            <div className="flex items-center gap-3 mb-4">
                                <img src={user?.photoURL || "https://via.placeholder.com/40"} alt="User" className="w-10 h-10 rounded-full bg-gray-200" />
                                <div className="overflow-hidden">
                                    <p className="text-sm font-semibold truncate">{user?.displayName || "User"}</p>
                                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                                </div>
                            </div>
                        </div>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg">
                                    <FaHome size={20} />
                                    <span className="font-medium">Home</span>
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="flex w-full items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                    <FiLogOut size={20} />
                                    <span className="font-medium">Logout</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
