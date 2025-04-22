import API from "./api";

export const login = async (username: string, password: string) => {
    try {
        const response = await API.post('/login', {email: username, password: password});
        return response.data;
    } catch (error) {
        throw error;
    }
};