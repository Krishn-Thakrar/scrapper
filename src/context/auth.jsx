import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const initialUserValue = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
    id : 0,
};

const initialState = {
    setUser: () => {},
    user: initialUserValue,
    signOut: () => {},
};

const authContext = createContext(initialState);

export const AuthWrapper = ({ children }) => {
    const [user, _setUser] = useState(initialUserValue);
    const navigate = useNavigate();
    const pathname = useLocation();

    useEffect(() => {
        const str = JSON.parse(localStorage.getItem("user")) || initialUserValue;
        if (str.id) {
            _setUser(str);
        }
        if (!str.id) {
            navigate("/");
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (pathname === "/login" && user.id) {
            navigate("/");
        }
        if (!user.id) {
            return;
        }
        // eslint-disable-next-line
    }, [user, pathname]);

    const setUser = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        _setUser(user);
    }

    const signOut = () => {
        setUser(initialUserValue);
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