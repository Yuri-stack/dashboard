export function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-full max-w-md px-8 py-12 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

                <form className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    )
}
