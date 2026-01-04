import React, { useContext, useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { AuthContext } from "../Context/AuthContext";
import logo from "../assets/Logo.png";
import { NavLink, Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

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

    const linkStyle = ({ isActive }) => (isActive ? "text-[#8559ff] font-semibold" : "text-base-content hover:text-[#8559ff] transition");

    return (
        <nav className="sticky top-0 z-50 bg-base-100 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 md:px-4">
                {/* Left: Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-20 h-10" />
                </Link>

                {/* Middle: Links (Desktop only) */}
                <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
                    <NavLink to="/" className={linkStyle}>
                        Home
                    </NavLink>
                    <NavLink to="/bills" className={linkStyle}>
                        Bills
                    </NavLink>
                    <NavLink to="/FAQ" className={linkStyle}>
                        FAQ
                    </NavLink>

                    {user && (
                        <NavLink to="/dashboard" className={linkStyle}>
                            Dashboard
                        </NavLink>
                    )}
                </div>

                {/* Right: Auth / User (Desktop only) */}
                <div className="hidden md:flex items-center gap-6">
                    {user ? (
                        <>
                            <input onChange={(e) => handleTheme(e.target.checked)} type="checkbox" defaultChecked={localStorage.getItem("theme") === "dark"} className="toggle" />
                            {/* User Image with Tooltip */}
                            <div className="relative group">
                                <img src={user?.photoURL || "https://i.ibb.co/MBtjqXQ/user.png"} alt="User" className="w-9 h-9 rounded-full border-2 border-[#8559ff]" />
                                <span
                                    className="absolute top-8 left-1/2 -translate-x-1/2 
                                         bg-white/20 backdrop-blur-md  text-xs font-medium 
                                            rounded-lg px-3 py-1 shadow-md
                                            opacity-0 group-hover:opacity-100 
                                         "
                                >
                                    {user?.displayName || "User"}
                                </span>
                            </div>

                            <button onClick={handleLogout} className="flex items-center gap-1 text-base-content font-semibold hover:text-[#8559ff] transition">
                                <FiLogOut /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <input onChange={(e) => handleTheme(e.target.checked)} type="checkbox" defaultChecked={localStorage.getItem("theme") === "dark"} className="toggle" />
                            <NavLink to="/login" className={({ isActive }) => (isActive ? "text-[#8559ff] font-bold" : "text-base-content font-bold hover:text-[#8559ff]")}>
                                Login
                            </NavLink>
                            <NavLink to="/register" className={({ isActive }) => (isActive ? "text-[#8559ff] font-bold" : "text-base-content font-bold hover:text-[#8559ff]")}>
                                Register
                            </NavLink>
                        </>
                    )}
                </div>

                {/* Mobile: Right side */}
                <div className="md:hidden flex items-center gap-3">
                    {user ? (
                        <div className="relative group">
                            <img src={user?.photoURL || "https://i.ibb.co/MBtjqXQ/user.png"} alt="User" className="w-8 h-8 rounded-full border border-[#8559ff]" />
                            <span
                                className="absolute top-8 left-1/2 -translate-x-1/2 
                                         bg-white/20 backdrop-blur-md  text-xs font-medium 
                                            rounded-lg px-3 py-1 shadow-md
                                            opacity-0 group-hover:opacity-100 
                                         "
                            >
                                {user?.displayName || "User"}
                            </span>
                        </div>
                    ) : (
                        <>
                            <NavLink to="/login" className={({ isActive }) => (isActive ? "text-[#8559ff] font-semibold" : "text-base-content hover:text-[#8559ff] font-bold")}>
                                Login
                            </NavLink>
                            <NavLink to="/register" className={({ isActive }) => (isActive ? "text-[#8559ff] font-semibold" : "text-base-content font-bold hover:text-[#8559ff]")}>
                                Register
                            </NavLink>
                        </>
                    )}

                    {/* Menu Button */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className={`text-3xl transition-colors duration-200 ${menuOpen ? "text-[#8559ff]" : "text-base-content hover:text-[#8559ff]"}`}>
                        <BsList />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute bg-base-100 right-4 mt-2 text-base-content rounded-lg py-3 px-6 border border-gray-100">
                    <div className="flex flex-col items-center space-y-2 text-[15px] font-medium">
                        <NavLink to="/" className={linkStyle} onClick={() => setMenuOpen(false)}>
                            Home
                        </NavLink>
                        <NavLink to="/bills" className={linkStyle} onClick={() => setMenuOpen(false)}>
                            Bills
                        </NavLink>
                        <input onChange={(e) => handleTheme(e.target.checked)} type="checkbox" defaultChecked={localStorage.getItem("theme") === "dark"} className="toggle" />
                        {user && (
                            <NavLink to="/dashboard" className={linkStyle} onClick={() => setMenuOpen(false)}>
                                Dashboard
                            </NavLink>
                        )}
                        {user && (
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setMenuOpen(false);
                                }}
                                className="flex items-center gap-1 text-base-content hover:text-red-500 transition"
                            >
                                <FiLogOut /> Logout
                            </button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
