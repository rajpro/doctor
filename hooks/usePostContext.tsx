import { getDoctors, getDoctorsByDepartment } from "@/api/doctor";
import { getLatestPosts, getPosts } from "@/api/post";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type PostContextType = {
    loading: boolean;
    post: [];
    getPost: () => void;
    getLatestPost: () => void;
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
        } catch (error) {
            console.error("Error fetching doctors:", error);
        } finally {
            console.log("List Post Successfull");
        }
    };

    const getLatestPost = async () => {
        try {
            const result = await getLatestPosts();
            setLoading(true);
            setPost(result.data);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        } finally {
            console.log("List Post Successfull");
        }
    };

    return (
        <PostContext.Provider value={{
            loading, post , getPost, getLatestPost
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