import { createContext, useContext, useEffect, useState } from "react";
import { FetchUser } from "../utils/api";

type AuthContext = {
    user: string | null;
    loading: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContext>({
    user: null,
    loading: true,
    login: () => {},
    logout: () => {}
});

const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

    useEffect(() => {
        FetchUser().then(data => console.log(data));
    },[])

    const login = () => {

    }

    const logout = () => {

    }
    return (
        <AuthContext.Provider value={{user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;