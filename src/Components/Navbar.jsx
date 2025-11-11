import React, { use, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { AuthContext } from "../Context/AuthContext";
import logo from "../assets/Logo.png";
import { NavLink, Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                Swal.fire("You have successfully loged out", "", "success");
                navigate("/");
            })
            .catch((err) => console.error(err));
    };

    const linkStyle = ({ isActive }) => (isActive ? "text-[#8559ff] font-semibold" : "text-black hover:text-[#8559ff] transition");

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className=" max-w-7xl mx-auto flex justify-between items-center py-3 px-4 md:px-4">
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
                    {user && (
                        <NavLink to="/mypaybills" className={linkStyle}>
                            My Pay Bills
                        </NavLink>
                    )}
                </div>

                {/* Right: Auth / User (Desktop only) */}
                <div className="hidden md:flex items-center gap-6">
                    {user ? (
                        <>
                            <img src={user?.photoURL || "https://i.ibb.co/MBtjqXQ/user.png"} alt="User" className="w-9 h-9 rounded-full border-2 border-[#8559ff]" />
                            <button onClick={handleLogout} className="flex items-center gap-1 text-black font-semibold hover:text-[#8559ff] transition">
                                <FiLogOut /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" className={({ isActive }) => (isActive ? "text-[#8559ff] font-bold" : "text-black font-bold hover:text-[#8559ff]")}>
                                Login
                            </NavLink>
                            <NavLink to="/register" className={({ isActive }) => (isActive ? "text-[#8559ff] font-bold" : "text-black font-bold hover:text-[#8559ff]")}>
                                Register
                            </NavLink>
                        </>
                    )}
                </div>

                {/* Mobile: Right side */}
                <div className="md:hidden flex items-center gap-3">
                    {/* User Image or Login/Register (mobile topbar only) */}
                    {user ? (
                        <img src={user?.photoURL || "https://i.ibb.co/MBtjqXQ/user.png"} alt="User" className="w-8 h-8 rounded-full border border-[#8559ff]" />
                    ) : (
                        <>
                            <NavLink to="/login" className={({ isActive }) => (isActive ? "text-[#8559ff] font-semibold" : "text-black hover:text-[#8559ff] font-bold")}>
                                Login
                            </NavLink>
                            <NavLink to="/register" className={({ isActive }) => (isActive ? "text-[#8559ff] font-semibold" : "text-black font-bold hover:text-[#8559ff]")}>
                                Register
                            </NavLink>
                        </>
                    )}

                    {/* Menu Button */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className={`text-3xl transition-colors duration-200 ${menuOpen ? "text-[#8559ff]" : "text-black hover:text-[#8559ff]"}`}>
                        <BsList />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute right-4 mt-2 bg-white rounded-lg py-3 px-6 border border-gray-100">
                    <div className="flex flex-col items-center space-y-2 text-[15px] font-medium">
                        <NavLink to="/" className={linkStyle} onClick={() => setMenuOpen(false)}>
                            Home
                        </NavLink>
                        <NavLink to="/bills" className={linkStyle} onClick={() => setMenuOpen(false)}>
                            Bills
                        </NavLink>
                        {user && (
                            <NavLink to="/mypaybills" className={linkStyle} onClick={() => setMenuOpen(false)}>
                                My Pay Bills
                            </NavLink>
                        )}
                        {user && (
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setMenuOpen(false);
                                }}
                                className="flex items-center gap-1 text-black hover:text-red-500 transition"
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
