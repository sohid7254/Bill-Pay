import React, { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "@dr.pogodin/react-helmet";

const LogIn = () => {
    const { signIn, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState("");

    // 🔑 Default demo credentials (auto-fill)
    const [email, setEmail] = useState("user@gmail.com");
    const [password, setPassword] = useState("User123");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogIn = (e) => {
        e.preventDefault();

        signIn(email, password)
            .then(() => {
                Swal.fire("Login Successful!", "", "success");
                navigate(from, { replace: true });
            })
            .catch((err) => setError(err.message));
    };

    const handleGoogleLogIn = () => {
        googleLogin()
            .then(() => {
                Swal.fire("Google Login Successful", "", "success");
                navigate(from, { replace: true });
            })
            .catch((err) => setError(err.message));
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 shadow-md bg-base-100 rounded">
            <Helmet>
                <title>LogIn-Page</title>
            </Helmet>
            <h2 className="text-2xl font-bold mb-4 text-center">Login to your Account!</h2>
            <form onSubmit={handleLogIn}>
                <label className="text-xl font-semibold">Your Email:</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input input-bordered w-full mb-3" required />
                <label className="text-xl font-semibold">Your Password:</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*******" className="input input-bordered w-full mb-3" required />
                <button type="submit" className="btn text-white bg-[#8f6ded] w-full hover:bg-[#b09adc]">
                    Login
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
            <div className="mt-4 text-center">
                <p>
                    Forgot Your Password! <span className="text-purple-500">Reset Password</span>
                </p>
                <span>Or</span>
            </div>
            <div className="text-center">
                <p>
                    Don't have an account?{" "}
                    <Link to="/register" className="hover:text-[#8559ff]">
                        Register
                    </Link>
                </p>
                <button onClick={handleGoogleLogIn} className="btn text-white border-[#e5e5e5] mt-5 bg-[#856dc7] hover:bg-[#a08bca]">
                    <FcGoogle className="w-7 h-7" /> Login with Google
                </button>
            </div>
        </div>
    );
};

export default LogIn;
