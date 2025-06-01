import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/app/Home";
import { AppLayout } from "./pages/_layouts/app";
import { Login } from "./pages/auth/Login";
import { AuthLayout } from "./pages/_layouts/auth";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
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
])
