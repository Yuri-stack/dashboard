import { DollarSign, TrendingDown, TrendingUp } from "lucide-react";
import { SummaryCard } from "./summary-card";

export function Summary() {
    return (
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-3">

            <SummaryCard
                title="Saldo Total"
                value={15420.50}
                icon={<DollarSign className="w-4 h-4" />}
                type="total" />
            <SummaryCard
                title="Receitas"
                value={8500.00}
                icon={<TrendingUp className="w-4 h-4" />}
                type="income" />
            <SummaryCard
                title="Despesas"
                value={3200.75}
                icon={<TrendingDown className="w-4 h-4" />}
                type="outcome" />
        </div>
    )
}
