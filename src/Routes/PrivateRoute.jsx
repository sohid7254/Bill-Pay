import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext); // 🔹 useContext instead of use
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-success"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    // 🔹 Pass state as object with "from"
    return <Navigate to="/register" state={{ from: location }} replace />;
    
};

export default PrivateRoute;
