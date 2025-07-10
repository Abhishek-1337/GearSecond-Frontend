import { createContext, useContext, useEffect, useState } from "react";
import { FetchUser, loginUser } from "../utils/api";
import { useNavigate } from "react-router-dom";

type User = {
    username: string;                                 
    email: string;
}

type AuthContextType = {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    login: () => {},
    logout: () => {}
});

const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<{ type: "login" | "logout", errorMsg: string} | null>(null);
	const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        FetchUser().then((data) => {
                if(data.username ) {
                    setUser({username: data.username, email: data.email});
                }
                setLoading(false);
            });
    },[])

    const login = (email: string, password: string) => {
            loginUser({email, password}).then((data) => {
                console.log(data);
                if (data.error) {
                    setError({type: "login", errorMsg: data.errorMsg});
                }
                else {
                    console.log(data.access_token);
                    setUser({username: data.user.username, email: data.user.email});
                    localStorage.setItem('Access', data.access_token);
                    navigate("/");
                }
            });
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    }
    return (
        <AuthContext.Provider value={{user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;