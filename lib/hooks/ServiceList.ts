"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Service = {
    id: number;
    title: string;
    slug: string | undefined;
    type: string;
    description: string;
    created_at: string;
    updated_at: string;
}
type ApiResponse = {
    data: Service[];
    message?: string;
}


export function ServiceList(slug?: string | undefined | null) {

    const [listofTreatments, setListOfTreatments] = useState<Service[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const services = async (slug?: string | null) => {
        setIsLoading(true)
        try {
            const response = await axios.get<ApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/services_list?slug=${slug ? `${slug}` : ""}`)
            setListOfTreatments(response?.data?.data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            toast.error("Error while fetching data")
        }
    }

    useEffect(() => {
        services(slug)
    }, [])

    return { listofTreatments, isLoading }

}