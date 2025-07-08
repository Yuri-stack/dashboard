"use client"

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import type { LucideIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

interface itemsNavProps {
    id: string
    title: string
    icon: LucideIcon
}

interface NavMainProps {
    items: itemsNavProps[]
}

export function NavMain({ items }: NavMainProps) {
    const { pathname } = useLocation();

    return (
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title} role="none">

                            <Link
                                to={`/${item.id}`}
                                data-current={pathname === `/${item.id}`}
                                role="menuitem"
                                aria-current={item.id ? 'page' : undefined}
                                className={`
                                    w-full 
                                    flex 
                                    items-center
                                     gap-3 
                                     p-3 
                                     rounded-lg 
                                     transition-colors 
                                     data-[current=true]:bg-slate-200 
                                     data-[current=true]:dark:bg-gray-700 
                                     hover:bg-slate-100 dark:hover:bg-slate-900`}
                            >


                                <div className="w-5 flex items-center justify-center" aria-hidden="true">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <p className="text-base text-muted-foreground">{item.title}</p>

                            </Link>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
