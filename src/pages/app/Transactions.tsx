import { TrendingDown, TrendingUp } from "lucide-react";

export function Transactions() {
    return (
        <div className='bg-card border rounded-xl p-6 m-6'>
            <h1 className='text-xl font-bold text-muted-foreground mb-4'>Últimas transações</h1>

            <div className="space-y-4 mt-6">

                <div className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-emerald-500" />
                        </div>
                        <div>
                            <p className="font-medium text-muted-foreground">Transação</p>
                            <p className="text-sm opacity-70 text-muted-foreground">Categoria exemplo</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="font-medium text-muted-foreground">R$ 150,00</p>
                        <p className="text-sm opacity-70 text-muted-foreground">Hoje</p>
                    </div>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <TrendingDown className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                            <p className="font-medium text-muted-foreground">Transação</p>
                            <p className="text-sm opacity-70 text-muted-foreground">Categoria exemplo</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="font-medium text-muted-foreground">R$ 150,00</p>
                        <p className="text-sm opacity-70 text-muted-foreground ">Hoje</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

