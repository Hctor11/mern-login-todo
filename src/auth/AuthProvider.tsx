import { useContext, createContext, useState, useEffect } from "react";

interface AuthProviderProps{
    children: React.ReactNode
}

const AuthContext = createContext({
    isAuthenticated: false,

})

const AuthProvider = ({children}: AuthProviderProps) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <AuthContext.Provider value={{
        isAuthenticated, // solo se pone isAuthenticated por que tiene que ser los mismos elementos de la interfaz
    }}>
        {children}
    </AuthContext.Provider>

  )
}

export default AuthProvider
export const useAuth = () => useContext(AuthContext)

