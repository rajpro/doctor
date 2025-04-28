import { getToken } from "@/storage";
import API from "./api";

export const login = async (username: string, password: string) => {
    try {
        const response = await API.post('/login', {email: username, password: password});
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const register = async (full_name: string, email: string, mobile: string, password: string) => {
    try {
        const response = await API.post('/register', {user_name: full_name, email: email, mobile: mobile, password: password});
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateWishlist = async (wl_id: string, wl_type: string) => {
    try {
        const uid = await getToken('user_id');
        const response = await API.post('/toggle_wishlist', {userId: uid, wl_id: wl_id, wl_type:wl_type});
        return response.data;
    } catch (error) {
        throw error;
    }
};