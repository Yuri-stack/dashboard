import {
    Tooltip,
    ResponsiveContainer,
    PieChart as RechartsPieChart,
    Cell,
    Pie
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function OutcomeChart() {
    const mockData = {
        pieData: [
            { name: 'Alimentação', value: 30, color: '#8884d8' },
            { name: 'Transporte', value: 25, color: '#82ca9d' },
            { name: 'Moradia', value: 35, color: '#ffc658' },
            { name: 'Outros', value: 10, color: '#ff7c7c' }
        ]
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Gastos por Categoria</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                        <Pie
                            data={mockData.pieData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            dataKey="value"
                            label={({ name, value }) => `${name}: ${value}%`}
                        >
                            {mockData.pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </RechartsPieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}


