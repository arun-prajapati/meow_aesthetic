"use client"
import Image from 'next/image'
import appointment from '@/public/assests/Appointment.jpg'
import TypographyP from '@/components/typography/TypographyP'
import TypographyH1 from '@/components/typography/TypographyH1'
import TypographyH2 from '@/components/typography/TypographyH2'
import TypographyH3 from '@/components/typography/TypographyH3'
import { IoCallOutline } from 'react-icons/io5'
import { TfiEmail } from 'react-icons/tfi'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { TbLoader3 } from 'react-icons/tb'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { VideoListOfHomePage } from '@/lib/hooks/HomePageApi'
import { Skeleton } from '@/components/ui/skeleton'

type FormValue = {
    first_name: string,
    last_name: string,
    email: string,
    mobile_number: number,
    description: string
}

const AppointmentSection = () => {

    const { listofVideos } = VideoListOfHomePage() //api
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValue>()

    // contact - us api integration
    const formSubmit = async (value: any) => {
        setLoading(true)
        const formData = new FormData()
        formData.append("first_name", value.first_name)
        formData.append("last_name", value.last_name)
        formData.append("email", value.email)
        formData.append("mobile_number", value.mobile_number)
        formData.append("description", value.description)
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contectus`, formData);
            setLoading(false)
            toast.success("Thank you for contacting us")
        } catch (error) {
            setLoading(false)
            toast.error('Error while fetching api');
        }
        reset()
    }

    return (
        <section className='w-full px-[10px]'>
            {listofVideos?.length > 0 ? listofVideos?.map((serviceSection, serviceindex) => (
                <>
                    {serviceSection?.type === "contact_us" && <>
                        <div className='w-full relative' key={serviceindex}>
                            <Image
                                src={serviceSection?.video ? serviceSection?.video : appointment}
                                alt='Appointment'
                                width={700}
                                height={700}
                                className='w-full h-full z-10 absolute top-0 rounded-2xl object-cover'
                            />
                            {/* mask layer */}
                            <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-black opacity-40 z-20" />

                            <div className='relative container flex flex-col justify-center gap-5 z-20 py-24 2xl:px-0 text-white'>
                                <TypographyP className="flex items-center gap-4 text-base">
                                    {serviceSection?.small_title}
                                </TypographyP>
                                <TypographyH1 className="font-medium font-plusjakartasans">
                                    {serviceSection?.big_title}
                                </TypographyH1>

                                <div className='grid lg:grid-cols-2 gap-16'>
                                    {/* form */}
                                    <form className='bg-[#FFFEFA30] border rounded-xl p-4 sm:p-7 lg:p-10 flex flex-col gap-5' onSubmit={handleSubmit(formSubmit)}>
                                        <div className="grid grid-cols-2 w-full items-center gap-5">
                                            <div className='flex flex-col'>
                                                <label htmlFor="firstname" className='text-[14px] font-[600]'>First Name*</label>
                                                <div className="flex flex-col w-full">
                                                    <input type="text" id="firstname" placeholder="First Name" className='bg-transparent border-b outline-none py-3'
                                                        {...register("first_name", {
                                                            required: "First Name is required",
                                                            pattern: {
                                                                value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                                                                message: "Entered value does not match name format",
                                                            },
                                                            minLength: {
                                                                value: 3,
                                                                message: "Please add at least 3 characters",
                                                            },
                                                        })}
                                                    />
                                                    {errors.first_name && (
                                                        <p className="text-red-500 text-left px-1"> {errors.first_name.message} </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="lastname" className='text-[14px] font-[600]'>Last Name*</label>
                                                <div className='flex flex-col'>
                                                    <input type="text" id="lastname" placeholder="Last Name" className='bg-transparent border-b outline-none py-3'
                                                        {...register("last_name", {
                                                            required: "Last Name is required",
                                                            pattern: {
                                                                value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                                                                message: "Entered value does not match name format",
                                                            },
                                                            minLength: {
                                                                value: 3,
                                                                message: "Please add at least 3 characters",
                                                            },
                                                        })}
                                                    />
                                                    {errors.last_name && (
                                                        <p className="text-red-500 text-left px-1"> {errors.last_name.message} </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 w-full items-center gap-5">
                                            <div className='flex flex-col'>
                                                <label htmlFor="email" className='text-[14px] font-[600]'>Email*</label>
                                                <div className="flex flex-col w-full">
                                                    <input type="email" id="email" placeholder="hello@gmail.com" className='bg-transparent border-b outline-none py-3'
                                                        {...register("email", {
                                                            required: "Email is required",
                                                            pattern: {
                                                                value: /^\S+@\S+\.\S+$/,
                                                                message: "Entered value does not match email format",
                                                            },
                                                        })}
                                                    />
                                                    {errors.email && (
                                                        <p className="text-red-500 text-left px-1"> {errors.email.message} </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="phone" className='text-[14px] font-[600]'>Phone</label>
                                                <div className="flex flex-col w-full">
                                                    <input type="number" id="phone" placeholder="+123456789" className='bg-transparent border-b outline-none py-3'
                                                        {...register("mobile_number", {
                                                            required: "Phone number is required",
                                                            minLength: {
                                                                value: 4,
                                                                message: "Please add a valid phone number"
                                                            },
                                                            maxLength: {
                                                                value: 12,
                                                                message: "Phone number is not greater than 12 digits"
                                                            }
                                                        }
                                                        )}
                                                    />
                                                    {errors.mobile_number && (
                                                        <p className="text-red-500 text-left px-1"> {errors.mobile_number.message} </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='grid  w-full'>
                                            <label htmlFor="message" className='text-[14px] font-[600]'>Message</label>
                                            <div className="flex flex-col w-full">
                                                <textarea cols={30} rows={6} id='message' placeholder='Hello There!' className='bg-transparent border-b outline-none py-3'
                                                    {...register("description", {
                                                        required: "Please enter your message",
                                                        pattern: {
                                                            value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                                                            message: "Entered value does not match name format",
                                                        },
                                                        minLength: {
                                                            value: 3,
                                                            message: "Please add at least 3 characters",
                                                        },
                                                    })}
                                                />
                                                {errors.description && (
                                                    <p className="text-red-500 text-left px-1"> {errors.description.message} </p>
                                                )}
                                            </div>
                                        </div>
                                        <Button className='bg-secondarylite hover:bg-secondarydark text-white hover:text-sky-400 rounded-full sm:text-[16px] font-bold transition-colors ease-in-out px-2 sm:px-8 py-[14px]'>
                                            {loading ? <TbLoader3 className='animate-spin w-7 h-7' /> : "Send Message"}
                                        </Button>
                                    </form>

                                    <div className='flex flex-col gap-5 lg:px-10 lg:py-20'>
                                        <TypographyH2 className='font-plusjakartasans'>
                                            {serviceSection?.cot_description}
                                        </TypographyH2>
                                        <TypographyP className='text-[#FFFEFAC4]'>
                                            {serviceSection?.description}
                                        </TypographyP>
                                        <div className="flex flex-col items-start gap-4 pt-10">
                                            <TypographyH3 className='text-2xl'>
                                                <a href="" className="flex items-center gap-4 font-semibold lg:font-medium">
                                                    <IoCallOutline className='rounded-full bg-white text-black text-xl w-10 h-10 p-2' />
                                                    {serviceSection?.mobile}
                                                </a>
                                            </TypographyH3>
                                            <TypographyH3 className='text-2xl'>
                                                <a href="mailto:test@gmail.com" className="flex items-center gap-4 font-semibold lg:font-medium">
                                                    <TfiEmail className='rounded-full bg-white text-black text-xl w-10 h-10 p-2' />
                                                    {serviceSection?.email}
                                                </a>
                                            </TypographyH3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </>
                    }
                </>
            ))
                :
                <Skeleton className="m-auto w-[95%] h-[60vh] bg-slate-200 rounded-2xl" />
            }
        </section >
    )
}

export default AppointmentSection