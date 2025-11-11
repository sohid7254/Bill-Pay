import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const LogIn = () => {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 shadow-md bg-base-100 rounded">
            <h2 className="text-2xl  font-bold mb-4 text-center">Login to your Account!</h2>
            <form>
                <label className="text-xl font-semibold">Your Email:</label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full mb-3" required />
                <label className="text-xl font-semibold">Your Password:</label>
                <input type="password" name="password" placeholder="*******" className="input input-bordered w-full mb-3" required />
                <button type="submit" className="btn text-white bg-[#8f6ded] w-full hover:bg-[#b09adc]">
                    Login
                </button>
            </form>
            <div className="mt-4 text-center">
                <p>
                    Don't have an account?{" "}
                    <Link to="/register" className="hover:text-[#8559ff]">
                        Register
                    </Link>
                </p>
                <button className="btn text-white border-[#e5e5e5] mt-5 bg-[#856dc7] hover:bg-[#a08bca]">
                    <FcGoogle className="w-7 h-7" /> Login with Google
                </button>
            </div>
        </div>
    );
};

export default LogIn;