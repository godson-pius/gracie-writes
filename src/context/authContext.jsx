import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { handleLogin } from "../api/auth";



export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null)

    const handleAdminAuth = async (creds) => {
        const result = await handleLogin(creds)
        console.table(result)
        setAdmin(result)
        return result
    }

    useEffect(() => {
        const _admin = localStorage.getItem("ADMIN")
        if(_admin) {
            setAdmin(JSON.parse(_admin))
        }
    }, [])

    return (
        <AuthContext.Provider value={{ admin, handleAdminAuth }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)

export default AuthContextProvider

