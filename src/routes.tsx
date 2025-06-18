import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/Dashboard";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Transactions } from "./pages/app/Transactions";
import { NotFound } from "./pages/NotFound";
import { Goals } from "./pages/app/Goals";
import { Reports } from "./pages/app/Reports";
import { Settings } from "./pages/app/Settings";
import { Register } from "./pages/auth/Register";
import { Error } from "./pages/Error";
import LoginPage from "./pages/auth/login/Login";

export const routes = createBrowserRouter([
    {
        path: "/",
        // element: <AuthLayout />,
        children: [
            { path: "/", element: <LoginPage /> },
            { path: "/login", element: <LoginPage /> },
            { path: "/register", element: <Register /> },
        ],
    },
    {
        path: "/",
        // element: <PrivateRoute />,
        // children: [
        // {
        errorElement: <Error />,
        element: <AppLayout />,
        children: [
            { path: "/dashboard", element: <Dashboard /> },
            { path: "/transactions", element: <Transactions /> },
            { path: "/reports", element: <Reports /> },
            { path: "/goals", element: <Goals /> },
            { path: "/settings", element: <Settings /> },
        ],
        // }
        // ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])
