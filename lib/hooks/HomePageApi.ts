"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type VideosData = {
    id: number;
    video: string;
    big_title: string;
    small_title: string;
    type: string;
    description: string;
    created_at: string;
    updated_at: string;
}
type ApiResponse = {
    data: VideosData[];
    message?: string;
}


export function VideoListOfHomePage() {

    const [listofVideos, setListOfVideos] = useState<VideosData[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const homePageVideos = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get<ApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/home_section`)
            setListOfVideos(response?.data?.data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            toast.error("Error while fetching data")
        }
    }

    useEffect(() => {
        homePageVideos()
    }, [])

    return { listofVideos, isLoading }

}