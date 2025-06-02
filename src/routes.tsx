import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/Dashboard";
import { AppLayout } from "./pages/_layouts/app";
import { Login } from "./pages/auth/Login";
import { AuthLayout } from "./pages/_layouts/auth";
import { Transactions } from "./pages/app/Transactions";
import { NotFound } from "./pages/NotFound";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Dashboard /> },
            { path: "/dashboard", element: <Dashboard /> },
            { path: "/transactions", element: <Transactions /> },
        ],
    },
    {
        path: "/login",
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />
    }
])
