import './global.css'

import { RouterProvider } from "react-router-dom";
import { routes } from "@/routes";
import { ThemeProvider } from './components/theme/theme-provider';
import { AuthProvider } from './contexts/auth-context';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </ThemeProvider>
  )
}
