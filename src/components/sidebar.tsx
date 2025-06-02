import { useState } from "react";
import { Settings, PieChart, Target, DollarSign, Home, CreditCard, TrendingUp, TrendingDown, ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

export function Sidebar() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
    const { pathname } = useLocation();

    return (
        <aside aria-label="Navegação principal" className={`${sidebarCollapsed ? 'w-16' : 'w-64'} border-r transition-all duration-300 flex flex-col h-full relative`}>
            <div className="p-4 border-b">
                <div className="flex items-center gap-2">
                    <div aria-hidden="true">
                        <DollarSign className="w-8 h-8 text-blue-500" />
                    </div>
                    {!sidebarCollapsed &&
                        <h1 className="text-xl font-bold">FinanceApp</h1>
                    }
                </div>
            </div>

            <Button
                className="absolute -right-3 top-12 w-6 h-6 border rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                variant="ghost"
                size="icon"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                aria-label={sidebarCollapsed ? "Expandir menu" : "Recolher menu"}
                aria-expanded={!sidebarCollapsed}
            >
                <ChevronLeft className={`w-4 h-4 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} />
            </Button>

            <nav aria-label="Menu principal" className="flex-1 p-2">
                <ul role="list" className="space-y-2">
                    {[
                        { id: 'dashboard', icon: Home, label: 'Dashboard' },
                        { id: 'transactions', icon: CreditCard, label: 'Transações' },
                        { id: 'income', icon: TrendingUp, label: 'Receitas' },
                        { id: 'expenses', icon: TrendingDown, label: 'Despesas' },
                        { id: 'reports', icon: PieChart, label: 'Relatórios' },
                        { id: 'goals', icon: Target, label: 'Metas' },
                        { id: 'settings', icon: Settings, label: 'Configurações' }
                    ].map(item => (
                        <li key={item.id} role="none">
                            <Link
                                to={`/${item.id}`}
                                data-current={pathname === `/${item.id}`}
                                role="menuitem"
                                aria-current={item.id ? 'page' : undefined}
                                className={`w-full flex ${sidebarCollapsed ? 'justify-center' : ''} items-center gap-3 p-3 rounded-lg transition-colors data-[current=true]:bg-gray-700 hover:bg-slate-900`}
                            >
                                <div className="w-5 flex items-center justify-center" aria-hidden="true">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                {!sidebarCollapsed &&
                                    <span>{item.label}</span>
                                }
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}
