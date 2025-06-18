import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Outlet } from "react-router-dom";
import Page from "../app/dashboard/page";

export function AppLayout() {
    return (
        <div className="flex h-screen">
            <Page />
            {/* <div className="flex flex-col flex-1">
                <Header />
                <Outlet />
            </div> */}
        </div>
    )
}