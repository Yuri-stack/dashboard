import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { CardContent } from "@/components/ui/card";

export function Transactions() {
    return (
        <div className="p-6">
            <Card>
                <CardHeader >
                    <CardTitle>
                        <h3 className="text-lg font-semibold mb-4">Todas as Transações</h3>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="opacity-70">Lista de transações será implementada aqui</p>
                </CardContent>
            </Card>
        </div>
    )
}

