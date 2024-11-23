import { createContext, useEffect, useState } from "react";
import axios from '../axios';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser) {
            setUser(storedUser);
        }
    }, [])

    const login = async (email, password) => {

        try {
            const response = await axios.post('user/login', { email, password });
            const { token, ...userData } = response.data;
            setUser(userData);

            if (rememberMe) {
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(userData));
            } else {
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('user', JSON.stringify(userData));
            }

        } catch (error) {
            alert(error.response.data.message);
        }

    }

    const register = async (name, email, password) => {
        try {
            const response = await axios.post('user/register', { name, email, password });
            alert(response.data.message);
        } catch (error) {
            console.log(error);

            const errors = error.response.data.errors?.flat();
            errors && errors.forEach(elem => alert(elem.msg));

            !errors && alert(error.response.data.message);
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{ user, login, setRememberMe, register, logout }}>
            {children}
        </AuthContext.Provider>
    )

}