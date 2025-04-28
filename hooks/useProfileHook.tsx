import { login, register } from "@/api/user";
import { deleteToken, getToken, saveToken } from "@/storage";
import { router } from "expo-router";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ProfileContextType = {
    username: string;
    password: string;
    fullName: string;
    mobile: string;
    loginStatus: boolean;
    setUsername: (username: string) => void;
    setPassword: (password: string) => void;
    setFullName: (fullName: string) => void;
    setMobile: (mobile: string) => void;
    Login: () => void;
    Register: () => void;
    Logout: () => void;
};
type ProfileProviderProps = {
    children: ReactNode;
};

const ProfileContext = createContext<ProfileContextType | null>(null);

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
    const [loginStatus, setloginStatus] = useState<boolean>(false);
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
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
            // console.error("Error fetching doctors:", error);
            alert("Username Password Incorrect");
        } finally {
            console.log("Login Successfull");
        }
    };

    const Register = async () => {
        try {
            const result = await register(fullName, username, mobile, password);
            alert("Registration Successful");
            setTimeout(() => {
                router.back();
            }, 1000)
        } catch (error) {
            console.error("Error fetching doctors:", error);
        } finally {
            console.log("Register Successfull");
        }
    };

    const Logout = async () => {
        await deleteToken('token');
        await deleteToken('user_id');
        setloginStatus(false);
    }

    return (
        <ProfileContext.Provider value={{
            username, password, loginStatus, fullName, mobile, setUsername, setPassword, Login, Logout, setFullName, setMobile, Register
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