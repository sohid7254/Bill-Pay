import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Helmet } from "@dr.pogodin/react-helmet";

const User = () => {
    const { user } = use(AuthContext);

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-success"></span>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6 mt-10 bg-base-100 shadow-lg rounded-lg">
            <Helmet>
                <title>{user.displayName}-Profile</title>
            </Helmet>
            <h2 className="text-2xl font-bold text-center text-[#8559ff] mb-6">My Profile</h2>

            <div className="flex flex-col items-center gap-4">
                {/* Profile Image */}
                <img src={user.photoURL || "https://via.placeholder.com/150"} alt="Profile" className="w-32 h-32 rounded-full border-4 border-[#8559ff] shadow-md" />

                {/* User Info */}
                <div className="text-center space-y-2">
                    <p className="text-lg font-semibold">
                        <strong>Name:</strong> {user.displayName || "N/A"}
                    </p>
                    <p className="text-lg font-semibold">
                        <strong>Email:</strong> {user.email}
                    </p>
                </div>
            </div>

            {/* Extra Section */}
            <div className="mt-6 border-t pt-4">
                <h3 className="text-xl font-bold mb-2">Account Details</h3>
                <ul className="space-y-2">
                    <li>
                        <strong>UID:</strong> {user.uid}
                    </li>
                    <li>
                        <strong>Provider:</strong> {user.providerId || "Email/Password"}
                    </li>
                    <li>
                        <strong>Last Login:</strong> {user.metadata?.lastSignInTime || "N/A"}
                    </li>
                    <li>
                        <strong>Account Created:</strong> {user.metadata?.creationTime || "N/A"}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default User;
