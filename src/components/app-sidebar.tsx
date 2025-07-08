"use client"

import * as React from "react"
import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { CreditCard, DollarSign, Home, PieChart, Settings, Target } from "lucide-react"
import { Link } from "react-router-dom"

const data = {
    navMain: [
        {
            id: 'dashboard',
            title: "Dashboard",
            icon: Home,
        },
        {
            id: 'transactions',
            title: "Transações",
            icon: CreditCard
        },
        {
            id: "reports",
            title: "Relatórios",
            icon: PieChart
        },
        {
            id: "goals",
            title: "Metas",
            icon: Target,
        },
    ],

    navSecondary: [
        {
            id: "settings",
            title: "Configurações",
            icon: Settings,
        },
    ],

}

export function AppSidebar() {
    return (
        <Sidebar collapsible="offcanvas">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem >

                        <Link to="/" className="flex justify-center items-center gap-1 pt-2">
                            <DollarSign className="w-8 h-8 text-blue-500" />
                            <h1 className="text-3xl font-bold text-muted-foreground">FinanceApp</h1>
                        </Link>

                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavSecondary items={data.navSecondary} />
            </SidebarContent>

            <SidebarFooter>
                {/* Talvez colocar algo aqui */}
            </SidebarFooter>
        </Sidebar >
    )
}
