import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"
import { AppSidebar } from "../../components/app-sidebar"
import { SiteHeader } from "../../components/site-header"

export function AppLayout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <SiteHeader />

                <div className="@container/main flex flex-1 flex-col gap-2">
                    <Outlet />
                </div>

            </SidebarInset>
        </SidebarProvider>
    )
}