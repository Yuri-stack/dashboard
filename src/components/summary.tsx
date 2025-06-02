import { DollarSign, TrendingDown, TrendingUp } from "lucide-react";
import { SummaryCard } from "./summary-card";

export function Summary() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 m-6">
                <SummaryCard title="Saldo Total" value={15420.50} icon={<DollarSign className="w-4 h-4" />} type="total" />
                <SummaryCard title="Receitas" value={8500.00} icon={<TrendingUp className="w-4 h-4" />} type="income" />
                <SummaryCard title="Despesas" value={3200.75} icon={<TrendingDown className="w-4 h-4" />} type="outcome" />
            </div>
        </>
    )
}
