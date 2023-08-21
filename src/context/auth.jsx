import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
    setUser: () => { },
    user: () => { },
    signOut: () => { },
};

const authContext = createContext(initialState);

export const AuthWrapper = ({ children }) => {
    const [user, _setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const str = JSON.parse(localStorage.getItem("user"));
        if (str) {
            _setUser(str);
        }
        if (!str) {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, []);

    const setUser = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        _setUser(user);
    }

    const signOut = () => {
        setUser();
        localStorage.removeItem("user");
        navigate("/");
    };

    const value = {
        user,
        setUser,
        signOut,
    };

    return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export const useAuthContext = () => {
    return useContext(authContext);
};