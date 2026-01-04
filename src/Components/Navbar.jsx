import React, { useContext, useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { AuthContext } from "../Context/AuthContext";
import logo from "../assets/Logo.png";
import { NavLink, Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaRegMoon } from "react-icons/fa";
import { CiBrightnessUp } from "react-icons/ci";

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const { user, signOutUser } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                Swal.fire("You have successfully logged out", "", "success");
                navigate("/");
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    const linkStyle = ({ isActive }) => (isActive ? "text-[#8559ff] font-bold border-b-2 border-[#8559ff] pb-1" : "text-gray-600 dark:text-gray-300 hover:text-[#8559ff] font-medium transition-colors duration-200 pb-1");

    const mobileLinkStyle = ({ isActive }) => (isActive ? "block px-4 py-2 text-[#8559ff] font-bold bg-[#8559ff]/10 rounded-lg" : "block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium");

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/bills", label: "All Bills" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" },
        { path: "/FAQ", label: "FAQ" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90 border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <img src={logo} alt="Logo" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-[#8559ff] to-[#6d42e6] bg-clip-text text-transparent">BillPay</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink key={link.path} to={link.path} className={linkStyle}>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right Section: Auth & Actions */}
                    <div className="hidden lg:flex items-center gap-5">
                        {/* Theme Toggle */}
                        <label className="swap swap-rotate text-gray-500 hover:text-[#8559ff] transition-colors">
                            <input type="checkbox" onChange={(e) => handleTheme(e.target.checked)} checked={theme === "dark"} />
                            {/* Sun icon */}
                            
                            <CiBrightnessUp className="swap-on fill-current w-6 h-6" />
                            {/* Moon icon */}
                            
                            <FaRegMoon className="swap-off fill-current w-6 h-6" />
                        </label>

                        {user ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-[#8559ff]/30 hover:border-[#8559ff] transition-all">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL || "https://i.ibb.co/MBtjqXQ/user.png"} alt="User" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-gray-100 dark:border-gray-700">
                                    <li className="menu-title px-4 py-2">
                                        <span className="text-xs text-black font-normal truncate max-w-[150px]">{user?.displayName}</span>
                                    </li>
                                    <div className="divider my-0"></div>
                                    <li>
                                        <Link to="/dashboard" className="py-2 hover:text-[#8559ff] hover:bg-[#8559ff]/10">
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/profile" className="py-2 hover:text-[#8559ff] hover:bg-[#8559ff]/10">
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout} className="py-2 text-red-500 hover:bg-red-50">
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link to="/login" className="px-5 py-2.5 rounded-full font-bold text-[#8559ff] hover:bg-[#8559ff]/10 transition-colors">
                                    Login
                                </Link>
                                <Link to="/register" className="px-5 py-2.5 rounded-full font-bold text-white bg-[#8559ff] hover:bg-[#7245e8] shadow-lg shadow-[#8559ff]/30 transition-all hover:scale-105">
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-4">
                        {/* Mobile Theme Toggle */}
                        <label className="swap swap-rotate text-gray-500">
                            <input type="checkbox" onChange={(e) => handleTheme(e.target.checked)} checked={theme === "dark"} />
                            <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,4.93,1,1,0,0,0,5.64,7.05ZM12,22a1,1,0,0,0,1-1V20a1,1,0,0,0-2,0v1A1,1,0,0,0,12,22ZM19.07,17.94a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM19,12a1,1,0,0,0,1,1h1a1,1,0,0,0,0-2H20A1,1,0,0,0,19,12Zm-2.64-4.59a1,1,0,0,0,.7-.29A1,1,0,0,0,17.07,4.93l-.71.71a1,1,0,0,0,0,1.41A1,1,0,0,0,16.36,7.41ZM21,12a9,9,0,1,1-9-9,9,9,0 0,1,9,9Z" />
                            </svg>
                            <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
                            </svg>
                        </label>

                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600 dark:text-gray-300 hover:text-[#8559ff] transition-colors p-2">
                            {menuOpen ? <span className="text-2xl">✕</span> : <BsList size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`lg:hidden absolute w-full bg-base-100 border-b border-gray-100 dark:border-gray-800 shadow-xl transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100 visible" : "max-h-0 opacity-0 invisible"} overflow-hidden`}>
                <div className="px-4 py-6 space-y-3">
                    {/* User Info Mobile */}
                    {user && (
                        <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg mb-4">
                            <img src={user?.photoURL || "https://i.ibb.co/MBtjqXQ/user.png"} alt="User" className="w-10 h-10 rounded-full border border-[#8559ff]" />
                            <div className="overflow-hidden">
                                <p className="font-bold text-sm truncate">{user?.displayName}</p>
                                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                            </div>
                        </div>
                    )}

                    {navLinks.map((link) => (
                        <NavLink key={link.path} to={link.path} onClick={() => setMenuOpen(false)} className={mobileLinkStyle}>
                            {link.label}
                        </NavLink>
                    ))}

                    {user ? (
                        <>
                            <NavLink to="/dashboard" onClick={() => setMenuOpen(false)} className={mobileLinkStyle}>
                                Dashboard
                            </NavLink>
                            <NavLink to="/dashboard/profile" onClick={() => setMenuOpen(false)} className={mobileLinkStyle}>
                                Profile
                            </NavLink>
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setMenuOpen(false);
                                }}
                                className="w-full text-left px-4 py-2 text-red-500 font-bold hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2"
                            >
                                <FiLogOut /> Logout
                            </button>
                        </>
                    ) : (
                        <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                            <Link to="/login" onClick={() => setMenuOpen(false)} className="w-full text-center py-3 rounded-lg font-bold text-[#8559ff] border border-[#8559ff] hover:bg-[#8559ff]/5 transition-colors">
                                Login
                            </Link>
                            <Link to="/register" onClick={() => setMenuOpen(false)} className="w-full text-center py-3 rounded-lg font-bold text-white bg-[#8559ff] shadow-lg shadow-[#8559ff]/30 hover:bg-[#7245e8] transition-colors">
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
