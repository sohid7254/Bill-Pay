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
                loader: ({ params }) => fetch(`http://localhost:3000/bills/${params.id}`),
                element: (
                    <PrivateRoute>
                        <BillsDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: "/myBills",
                element: (
                    <PrivateRoute>
                        <MyBills />
                    </PrivateRoute>
                ),
            },
            {
                path: "/addBills",
                element: <PrivateRoute>
                    <AddBills/>
                </PrivateRoute>
            }
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
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>
);
