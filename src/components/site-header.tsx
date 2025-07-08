import { Modal } from "@/components/modal"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Filter, Plus } from "lucide-react"
import { useState } from "react"
import { useLocation } from "react-router-dom"

export function SiteHeader() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { pathname } = useLocation();

    const url: string = pathname.slice(1);

    const items = [
        {
            urlText: 'dashboard',
            title: "Dashboard",
        },
        {
            urlText: 'transactions',
            title: "Transações",
        },
        {
            urlText: 'reports',
            title: "Relatórios",
        },
        {
            urlText: 'goals',
            title: "Metas",
        },
        {
            urlText: 'settings',
            title: "Configurações",
        },
    ]

    const item = items.find((elemento) => elemento.urlText === url)

    return (
        <header
            className="flex shrink-0 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)"
        >
            <div className="flex h-16 container mx-auto justify-between items-center px-4 lg:gap-2 lg:px-6">
                <div className="flex items-center">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                        orientation="vertical"
                        className="mx-2 data-[orientation=vertical]:h-4"
                    />
                    <h1 className="text-2xl font-bold tracking-tight text-muted-foreground">
                        {item ? item.title : 'Dashboard'}
                    </h1>

                </div>

                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                        <Filter className="h-[1.2rem] w-[1.2rem]" />
                        <span className="sr-only">Filtros</span>
                    </Button>

                    <ThemeToggle />

                    <Dialog
                        open={isModalOpen}
                        onOpenChange={setIsModalOpen}
                    >
                        <DialogTrigger asChild>
                            <Button>
                                <Plus className="h-4 w-4" />
                                <span>Nova Transação</span>
                            </Button>
                        </DialogTrigger>

                        <Modal onClose={setIsModalOpen} />

                    </Dialog>
                </div>
            </div>
        </header>
    )
}
