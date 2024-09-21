"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type DoctorsData = {
    id: number;
    image: string;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
}
type ApiResponse = {
    data: DoctorsData[];
    message?: string;
}


export function DoctorList() {

    const [listOfDoctors, setlistOfDoctors] = useState<DoctorsData[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const doctors = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get<ApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/doctor_list`)
            setlistOfDoctors(response?.data?.data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            toast.error("Error while fetching data")
        }
    }

    useEffect(() => {
        doctors()
    }, [])

    return { listOfDoctors, isLoading }

}