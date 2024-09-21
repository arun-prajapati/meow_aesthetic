"use client"
import ouraestheticdoctor from "@/public/assests/OurAestheticDoctorSextion.jpg"
import TypographyP from "@/components/typography/TypographyP"
import { FiPlus } from "react-icons/fi"
import TypographyH1 from "@/components/typography/TypographyH1"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { DoctorList } from "@/lib/hooks/DoctorList"
import { Skeleton } from "@/components/ui/skeleton"

const OurAestheticDoctorSextion = () => {

    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1])
    const { listOfDoctors, isLoading } = DoctorList()

    return (
        <motion.section className="bg-white" ref={ref} style={{
            scale: scaleProgress,
            opacity: opacityProgress
        }}>
            <div className="lg:container grid lg:grid-cols-2 gap-10 lg:gap-24 lg:pt-24 lg:pb-6 2xl:px-0">
                {listOfDoctors?.length > 0 ? listOfDoctors?.map((doctorsData, doctorIndex) => (
                    <>
                        {doctorsData?.id === 1 &&
                            <>
                                <div className="aspect-square 2xl:min-w-[650px] 2xl:max-h-[500px] order-2 lg:order-1 mb-[75px] mx-6 lg:mx-0" key={doctorIndex}>
                                    <Image
                                        src={ouraestheticdoctor}
                                        // src={doctorsData?.image ? doctorsData?.image : ouraestheticdoctor}
                                        alt="meow asthetic clinic"
                                        width={500}
                                        height={500}
                                        quality={100}
                                        className="rounded-2xl w-full h-full object-cover"
                                    />
                                </div>

                                <div className="mt-20 lg:mt-0 py-5 px-6 lg:px-0 flex flex-col gap-5 order-1 lg:order-2">
                                    <TypographyP className="flex items-center gap-4">
                                        <FiPlus />
                                        OUR AESTHETIC DOCTOR
                                    </TypographyP>
                                    <TypographyH1 className="text-5xl font-medium font-plusjakartasans">
                                        {doctorsData?.name}
                                    </TypographyH1>

                                    <TypographyP className="text-[#54595FC2]">
                                        {doctorsData?.description}
                                    </TypographyP>
                                    <div className="pt-7">
                                        <Link href='/about-us'>
                                            <Button className="bg-secondarylite hover:bg-black text-white text-lg lg:text-base px-12 py-7 lg:px-7 lg:py-5 font-[600] rounded-full">Meet Our Doctor</Button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        }
                    </>
                ))
                    :
                    <>
                        <div className="flex justify-end">
                            <Skeleton className="rounded-lg h-[350px] w-[605px] bg-slate-200" />
                        </div>
                        <div className="flex flex-col gap-8">
                            <Skeleton className="w-[250px] h-10 bg-slate-200" />
                            <div className="flex flex-col gap-2">
                                <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                                <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                                <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                                <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                                <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                                <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                                <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                            </div>
                        </div>
                    </>
                }
            </div>
        </motion.section>
    )
}

export default OurAestheticDoctorSextion