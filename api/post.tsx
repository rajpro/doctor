import API from "./api";

export const getPosts = async () => {
    try {
        const response = await API.post('/get_all_post');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getLatestPosts = async () => {
    try {
        const response = await API.post('/get_all_post', {limit: 5});
        return response.data;
    } catch (error) {
        throw error;
    }
};

interface postModel {
    user_id: string|null;
    post: string;
    file?: string;
    
}
export const addPost = async ({user_id, post, file}:postModel) => {
    try {
        
        const response = await API.post('/add_post', {user_id:user_id, post:post});
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};