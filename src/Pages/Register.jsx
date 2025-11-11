import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Register = () => {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 shadow-lg bg-base-100 rounded">
            <h2 className="text-2xl font-bold mb-4 text-center">Register to Brgin!!</h2>
            <form>
                <label className="text-xl font-semibold">Name:</label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full mb-3" required />

                <label className="text-xl font-semibold">Email:</label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full mb-3" required />

                <label className="text-xl font-semibold">Photo Url:</label>
                <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered w-full mb-3" required />

                <label className="text-xl font-semibold">Password:</label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered w-full mb-3" required />
                <button type="submit" className="btn text-white bg-[#8f6ded] w-full hover:bg-[#b09adc]">
                    Register
                </button>
                {/* {error && <p className="text-red-500 mt-2">{error}</p>} */}
            </form>
            <div className="mt-4 text-center">
                <p>
                    Already have an account?{" "}
                    <Link to="/login" className="hover:text-[#8559ff] text-red-400">
                        Login
                    </Link>
                </p>
                <button className="btn text-white border-[#e5e5e5] mt-5 bg-[#856dc7] hover:bg-[#a08bca]">
                    <FcGoogle className="w-7 h-7" /> Register with Google
                </button>
            </div>
        </div>
    );
};

export default Register;
