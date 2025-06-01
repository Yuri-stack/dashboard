import { Button } from "@/components/ui/button"
import { Filter, Plus } from "lucide-react"

export function Header() {
    return (
        <header className="border-b">
            <div className="flex h-16 items-center px-4 container mx-auto justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>

                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                        <Filter className="h-[1.2rem] w-[1.2rem]" />
                        <span className="sr-only">Filtros</span>
                    </Button>

                    <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Nova Transação
                    </Button>
                </div>
            </div>
        </header>
    )
}
