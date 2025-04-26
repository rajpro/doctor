import API from "./api";

export const getDoctors = async () => {
    try {
        const response = await API.post('/get_all_doctors');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getDoctorsByDepartment = async (department: string) => {
    try {
        const response = await API.post('/get_all_doctors', {department: department});
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getLatestDoctors = async () => {
    try {
        const response = await API.post('/get_all_doctors', {limit: 5});
        return response.data;
    } catch (error) {
        throw error;
    }
};