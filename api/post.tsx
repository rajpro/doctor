import API from "./api";

export const getPosts = async () => {
    try {
        const response = await API.post('/get_all_post');
        return response.data;
    } catch (error) {
        throw error;
    }
};