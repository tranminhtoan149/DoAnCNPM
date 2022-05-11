import { useState, createContext, useEffect } from "react";

export const AuthController = createContext();

const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(null);

    const authData = {
        isLogin,
        setIsLogin,
        setUser,
        user,
    };
    useEffect(() => {
        if (document.cookie.split("username=")[1]) {
            setIsLogin(true);
            setUser(JSON.parse(document.cookie.split("username=")[1]));
        }
    }, []);
    return <AuthController.Provider value={authData}>{children}</AuthController.Provider>;
};

export default AuthProvider;
