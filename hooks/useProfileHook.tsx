import { login } from "@/api/user";
import { deleteToken, getToken, saveToken } from "@/storage";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ProfileContextType = {
    username: string;
    password: string;
    loginStatus: boolean;
    setUsername: (username: string) => void;
    setPassword: (password: string) => void;
    Login: () => void;
    Logout: () => void;
};
type ProfileProviderProps = {
    children: ReactNode;
};

const ProfileContext = createContext<ProfileContextType | null>(null);

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
    const [loginStatus, setloginStatus] = useState<boolean>(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        gt();
    }, []);

    async function gt() {
        const t = await getToken('token');
        if(t != null){
            setloginStatus(true);
        }
    }

    const Login = async () => {
        try {
            const result = await login(username, password);
            saveToken('token', result.jwtToken);
            saveToken('user_id', result.tokenObject._id);
            setloginStatus(true);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        } finally {
            console.log("Login Successfull");
        }
    };

    const Logout = async () => {
        await deleteToken('token');
        await deleteToken('user_id');
        setloginStatus(false);
    }

    return (
        <ProfileContext.Provider value={{
            username, password, loginStatus, setUsername, setPassword, Login, Logout
        }}>
            {children}
        </ProfileContext.Provider>
    );
}

export const useProfileHook = () => {
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error("useProfileHook must be used inside a ProfileProvider");
    }
    return context;
};