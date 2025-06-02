import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/Dashboard";
import { AppLayout } from "./pages/_layouts/app";
import { Login } from "./pages/auth/Login";
import { AuthLayout } from "./pages/_layouts/auth";
import { Transactions } from "./pages/app/Transactions";
import { NotFound } from "./pages/NotFound";
import { Goals } from "./pages/app/Goals";
import { Reports } from "./pages/app/Reports";
import { Settings } from "./pages/app/Settings";
import { Register } from "./pages/auth/Register";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Dashboard /> },
            { path: "/dashboard", element: <Dashboard /> },
            { path: "/transactions", element: <Transactions /> },
            { path: "/reports", element: <Reports /> },
            { path: "/goals", element: <Goals /> },
            { path: "/settings", element: <Settings /> },
        ],
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
        ],
    },
    {
        path: '*',
        element: <NotFound />
    }
])
