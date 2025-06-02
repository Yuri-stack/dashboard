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

                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-card px-2 text-muted-foreground">
                                    ou
                                </span>
                            </div>
                        </div>

                        <Button variant="outline" className="w-full">
                            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                            Continuar com Google
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