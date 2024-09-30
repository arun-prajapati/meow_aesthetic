"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type faq_listData = {
    id: number;
    question: string;
    answer: string;
    created_at: string;
    updated_at: string;
}
type ApiResponse = {
    data: faq_listData[];
    message?: string;
}


export function FaqList() {

    const [listOffaq_list, setlistOffaq_list] = useState<faq_listData[]>([])

    const faq_list = async () => {
        try {
            const response = await axios.get<ApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/faq_list`)
            setlistOffaq_list(response?.data?.data)
        } catch (error) {
            toast.error("Error while fetching data")
        }
    }

    useEffect(() => {
        faq_list()
    }, [])

    return { listOffaq_list }

}