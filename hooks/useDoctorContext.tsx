import { getDoctors, getDoctorsByDepartment } from "@/api/doctor";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type DoctorContextType = {
    loading: boolean;
    doctors: [];
    getDoctor: () => void;
    getDoctorByDepartment: (department: string) => void;
};
type DoctorProviderProps = {
    children: ReactNode;
};

const DoctorContext = createContext<DoctorContextType | null>(null);

export const DoctorProvider = ({ children }: DoctorProviderProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [doctors, setDoctors] = useState<[]>([]);

    useEffect(() => {
        
    }, []);

    const getDoctor = async () => {
        try {
            const result = await getDoctors();
            setLoading(true);
            setDoctors(result.data);
            console.log(result);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        } finally {
            console.log("List Doctors Successfull");
        }
    };

    const getDoctorByDepartment = async (department: string) => {
        try {
            const result = await getDoctorsByDepartment(department);
            setLoading(true);
            setDoctors(result.data);
            console.log(result);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        } finally {
            console.log("List Doctors Successfull");
        }
    };

    return (
        <DoctorContext.Provider value={{
            loading, doctors , getDoctor, getDoctorByDepartment
        }}>
            {children}
        </DoctorContext.Provider>
    );
}

export const useDoctorHook = () => {
    const context = useContext(DoctorContext);
    if (!context) {
        throw new Error("useProfileHook must be used inside a ProfileProvider");
    }
    return context;
};