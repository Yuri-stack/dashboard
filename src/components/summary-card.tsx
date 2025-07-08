import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface SummaryCardProps {
    title?: string;
    value?: number;
    icon?: React.ReactNode;
    type?: 'total' | 'income' | 'outcome';
}

export function SummaryCard({ title, value, icon, type }: SummaryCardProps) {
    return (
        <Card className="@container/card">
            <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-sm opacity-70 text-muted-foreground">{title}</CardTitle>
                <span className={cn(
                    "text-2xl font-bold",
                    type === 'outcome' ? 'text-red-500' : 'text-green-500'
                )}>
                    {icon}
                </span>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between gap-2">
                    <p className={cn(
                        "text-3xl lg:text-2xl font-bold",
                        type === 'outcome' ? 'text-red-500' : 'text-green-500'
                    )}>
                        R$ {value?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
