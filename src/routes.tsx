import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/Dashboard";
import { AppLayout } from "./pages/_layouts/app";
import { Transactions } from "./pages/app/Transactions";
import { NotFound } from "./pages/NotFound";
import { Goals } from "./pages/app/Goals";
import { Reports } from "./pages/app/Reports";
import { Settings } from "./pages/app/Settings";
import { Error } from "./pages/Error";

export const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <AppLayout />,
        children: [
            { path: "/dashboard", element: <Dashboard /> },
            { path: "/transactions", element: <Transactions /> },
            { path: "/reports", element: <Reports /> },
            { path: "/goals", element: <Goals /> },
            { path: "/settings", element: <Settings /> },
        ],
    },
    {
        path: '*',
        element: <NotFound />
    }
])
