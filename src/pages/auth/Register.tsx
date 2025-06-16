import { DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link, useNavigate } from "react-router-dom"

export function Register() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background dark:bg-background m-6">
            <Card className="w-full max-w-md p-2">
                <CardHeader className="space-y-2 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                        <DollarSign className="w-8 h-8 text-blue-500" />
                    </div>
                    <div className="text-center">
                        <CardTitle className="text-2xl font-bold">FinanceApp</CardTitle>
                        <CardDescription className="text-lg mt-6">Criar nova conta</CardDescription>
                        <CardDescription className="text-sm">Comece a gerenciar suas finanças</CardDescription>
                    </div>
                </CardHeader>

                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nome completo</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Digite seu nome completo"
                                className="w-full"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Digite seu email"
                                className="w-full"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Digite sua senha"
                                className="w-full"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirmar senha</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirme sua senha"
                                className="w-full"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            onClick={() => {
                                navigate("/dashboard")
                            }}
                        >
                            Criar conta
                        </Button>

                        <div className="text-center text-sm text-muted-foreground">
                            Já tem uma conta?{" "}
                            <Link to="/login">Entrar</Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
} 