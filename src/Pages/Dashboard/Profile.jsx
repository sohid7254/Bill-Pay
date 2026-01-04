import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Helmet } from "@dr.pogodin/react-helmet";
import { FaUser, FaEnvelope, FaFingerprint, FaCalendarAlt, FaSignInAlt, FaShieldAlt } from "react-icons/fa";

const Profile = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return (
            <div className="flex justify-center items-center h-full min-h-[50vh]">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <Helmet>
                <title>Profile - {user.displayName}</title>
            </Helmet>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Header Banner */}
                <div className="h-32 bg-gradient-to-r from-[#8559ff] to-[#a37cff]"></div>

                <div className="px-8 pb-8">
                    {/* Avatar overlapping banner */}
                    <div className="relative -mt-16 mb-6">
                        <img src={user.photoURL || "https://via.placeholder.com/150"} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-md object-cover bg-white" />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{user.displayName || "User Name"}</h1>
                            <p className="text-gray-500 flex items-center gap-2">
                                <FaEnvelope className="text-gray-400" />
                                {user.email}
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <button className="btn btn-outline btn-primary btn-sm">Edit Profile</button>
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-700 dark:text-gray-200">
                                <FaShieldAlt className="text-[#8559ff]" />
                                Account Information
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">User ID</p>
                                    <p className="font-mono text-sm bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded inline-block">{user.uid}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Provider</p>
                                    <div className="badge badge-lg badge-ghost gap-2">{user.providerId || "Email/Password"}</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-700 dark:text-gray-200">
                                <FaCalendarAlt className="text-[#8559ff]" />
                                Activity
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                        <FaSignInAlt />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Last Login</p>
                                        <p className="font-medium text-gray-700 dark:text-gray-300">{user.metadata?.lastSignInTime || "N/A"}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                                        <FaFingerprint />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Member Since</p>
                                        <p className="font-medium text-gray-700 dark:text-gray-300">{user.metadata?.creationTime || "N/A"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
