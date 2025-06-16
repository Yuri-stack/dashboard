import { createContext, useContext, useState, type ReactNode } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextData {
    user: User | null;
    isAuthenticated: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(() => {
        const storedUser = localStorage.getItem('@FinanceApp:user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const isAuthenticated = !!user;

    const signIn = async (email: string, password: string) => {
        try {
            // TODO: Implementar chamada à API de autenticação
            // Por enquanto, vamos simular um login bem-sucedido
            const user = {
                id: '1',
                name: 'João Silva',
                email: email
            };

            setUser(user);
            localStorage.setItem('@FinanceApp:user', JSON.stringify(user));
        } catch (error) {
            throw new Error('Erro ao fazer login');
        }
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem('@FinanceApp:user');
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }

    return context;
}; 