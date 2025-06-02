import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Filter, Plus } from "lucide-react"
import { ThemeToggle } from "./theme/theme-toggle"
import { DialogTrigger } from "./ui/dialog"
import { Dialog } from "./ui/dialog"
import { Modal } from "./modal"

export function Header() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    return (
        <header className="border-b">
            <div className="flex h-16 items-center px-4 container mx-auto justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-muted-foreground">Dashboard</h2>

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
