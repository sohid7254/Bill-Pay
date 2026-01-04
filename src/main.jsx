import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./Context/AuthProvider";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "./Layout/MainLayouts";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import Bills from "./Pages/Bills";
import BillsDetails from "./Pages/BillsDetails";
import PrivateRoute from "./Routes/PrivateRoute";
import MyBills from "./Pages/MyBills";
import AddBills from "./Components/AddBills";
import User from "./Pages/User";
import FAQ from "./Pages/FAQ";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Terms from "./Pages/Terms";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import DashboardLayout from "./Layout/DashboardLayout";
import DashboardHome from "./Pages/Dashboard/DashboardHome";
import Profile from "./Pages/Dashboard/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/terms",
                element: <Terms />,
            },
            {
                path: "/privacy",
                element: <PrivacyPolicy />,
            },
            {
                path: "/FAQ",
                element: <FAQ />,
            },
            {
                path: "/login",
                element: <LogIn />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/bills",
                element: <Bills />,
            },
            {
                path: "/billsDetails/:id",

                element: <BillsDetails />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        children: [
            {
                index: true,
                element: <DashboardHome />,
            },
            {
                path: "my-bills",
                element: <MyBills />,
            },
            {
                path: "add-bills",
                element: <AddBills />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <HelmetProvider>
                <RouterProvider router={router} />
            </HelmetProvider>
        </AuthProvider>
    </StrictMode>
);
