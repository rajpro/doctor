import { getDoctors, getDoctorsByDepartment } from "@/api/doctor";
import { getPosts } from "@/api/post";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type PostContextType = {
    loading: boolean;
    post: [];
    getPost: () => void;
};
type PostProviderProps = {
    children: ReactNode;
};

const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: PostProviderProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [post, setPost] = useState<[]>([]);

    useEffect(() => {
        
    }, []);

    const getPost = async () => {
        try {
            const result = await getPosts();
            setLoading(true);
            setPost(result.data);
            console.log(result);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        } finally {
            console.log("List Doctors Successfull");
        }
    };

    return (
        <PostContext.Provider value={{
            loading, post , getPost
        }}>
            {children}
        </PostContext.Provider>
    );
}

export const usePostHook = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error("usePostHook must be used inside a ProfileProvider");
    }
    return context;
};