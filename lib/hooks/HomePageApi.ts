"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type VideosData = {
    id: number;
    video: string;
    big_title: string;
    small_title: string;
    cot_description: string;
    email: string;
    mobile: string;
    mon_fri_time: string;
    sat_time: string;
    facebook: string;
    instagram: string;
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

    const MobileNumber = listofVideos[2]?.mobile
    const EmailID = listofVideos[2]?.email
    const Mon_To_Fri_Time = listofVideos[3]?.mon_fri_time
    const Sat_Time = listofVideos[3]?.sat_time
    const Facebook = listofVideos[3]?.facebook
    const Instagram = listofVideos[3]?.instagram
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

    return { listofVideos, isLoading, MobileNumber, EmailID, Mon_To_Fri_Time, Sat_Time, Instagram, Facebook }

}