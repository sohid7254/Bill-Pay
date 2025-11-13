import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "@dr.pogodin/react-helmet";

const Register = () => {
    const { createUser, updateUser, googleLogin } = use(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;

        const passwordValid = /(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password);
        if (!passwordValid) {
            setError("Password must be at least 6 character, including uppercase and loawercase");
            return;
        }

        createUser(email, password)
            .then((res) => {
                updateUser({ displayName: name, photoURL });
                const newUser = {
                    name: res.user.displayName,
                    email: res.user.email,
                    image: res.user.photoURL,
                };
                // creat user on db
                fetch("https://assignment10-server-beta-weld.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("New USers data has saved", data);
                    });
                Swal.fire("Registeration Successfull", "", "success");
                navigate(from, { replace: true });
                console.log(res);
            })
            .catch((err) => setError(err.message));
    };

    const handleGoogleLogIn = () => {
        googleLogin()
            .then((res) => {
                console.log(res.user);
                const newUser = {
                    name: res.user.displayName,
                    email: res.user.email,
                    image: res.user.photoURL,
                };
                // creat user on db
                fetch("https://assignment10-server-beta-weld.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("New USers data has saved", data);
                    });
                Swal.fire("Google Registeration Successfull", "", "success");
                navigate(from, { replace: true });
            })
            .catch((err) => setError(err.message));
    };
    return (
        <div className="max-w-md mx-auto mt-10 p-6 shadow-lg bg-base-100 rounded">
            <Helmet>
                <title>Register</title>
            </Helmet>
            <h2 className="text-2xl font-bold mb-4 text-center">Register to Brgin!!</h2>
            <form onSubmit={handleRegister}>
                <label className="text-xl font-semibold">Name:</label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full mb-3" required />

                <label className="text-xl font-semibold">Email:</label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full mb-3" required />

                <label className="text-xl font-semibold">Photo Url:</label>
                <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered w-full mb-3" />

                <label className="text-xl font-semibold">Password:</label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered w-full mb-3" required />
                <button type="submit" className="btn text-white bg-[#8f6ded] w-full hover:bg-[#b09adc]">
                    Register
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
            <div className="mt-4 text-center">
                <p>
                    Already have an account?{" "}
                    <Link to="/login" className="hover:text-[#8559ff] text-red-400">
                        Login
                    </Link>
                </p>
                <button onClick={handleGoogleLogIn} className="btn text-white border-[#e5e5e5] mt-5 bg-[#856dc7] hover:bg-[#a08bca]">
                    <FcGoogle className="w-7 h-7" /> Register with Google
                </button>
            </div>
        </div>
    );
};

export default Register;
