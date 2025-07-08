import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

export function BalanceChart() {
    const mockData = {
        balance: 15420.50,
        income: 8500.00,
        expenses: 3200.75,
        chartData: [
            { name: 'Jan', receitas: 4000, despesas: 2400 },
            { name: 'Fev', receitas: 3000, despesas: 1398 },
            { name: 'Mar', receitas: 2000, despesas: 9800 },
            { name: 'Abr', receitas: 2780, despesas: 3908 },
            { name: 'Mai', receitas: 1890, despesas: 4800 },
            { name: 'Jun', receitas: 2390, despesas: 3800 }
        ]
    };

    return (
        <div className='bg-card border rounded-xl px-6 pt-6 mx-4 lg:mx-7'>
            <h1 className='text-xl font-bold mb-4 text-muted-foreground'>Receitas vs Despesas</h1>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockData.chartData}>
                    <CartesianGrid vertical={false} className="stroke-muted" />
                    <XAxis dataKey="date" axisLine={true} tickLine={false} dy={16} />
                    <YAxis
                        stroke="#888"
                        axisLine={true}
                        tickLine={false}
                        width={100}
                        tickFormatter={(value: number) =>
                            value.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            })
                        }
                    />

                    <Tooltip />
                    <Line type="monotone" dataKey="receitas" stroke="#22c55e" strokeWidth={2} />
                    <Line type="monotone" dataKey="despesas" stroke="#ef4444" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
