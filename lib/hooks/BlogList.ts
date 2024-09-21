"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type BlogType = {
    id: number;
    title: string;
    slug: string | undefined;
    type: string;
    image:string;
    description: string;
    created_at: string;
    updated_at: string;
}
type ApiResponse = {
    data: BlogType[];
    message?: string;
}


export function BlogsList(slug?: string | undefined | null) {

    const [listOfBlogs, setlistOfBlogs] = useState<BlogType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const blogs = async (slug?: string | null) => {
        setIsLoading(true)
        try {
            const response = await axios.get<ApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/blogs_list?slug=${slug ? `${slug}` : ""}`)
            console.log(response, "response");
            setlistOfBlogs(response?.data?.data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            toast.error("Error while fetching data")
        }
    }

    useEffect(() => {
        blogs(slug)
    }, [])

    return { listOfBlogs, isLoading }

}