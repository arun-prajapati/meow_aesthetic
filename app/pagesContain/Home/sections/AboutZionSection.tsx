"use client"
import Image from "next/image"
import aboutzion from "@/public/assests/aboutzion.jpg"
import TypographyP from "@/components/typography/TypographyP"
import TypographyH1 from "@/components/typography/TypographyH1"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"
import { VideoListOfHomePage } from "@/lib/hooks/HomePageApi"

const AboutZionSection = () => {

    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1])
    const { listofVideos } = VideoListOfHomePage()

    return (
        <motion.section className="bg-white" ref={ref} style={{
            scale: scaleProgress,
            opacity: opacityProgress
        }}>
            <div className="lg:container grid lg:grid-cols-2 gap-10 lg:gap-24 lg:py-24">
                {listofVideos?.length > 0 ? listofVideos?.map((serviceSection, serviceindex) => (
                    <>
                        {serviceSection?.type === "about_us" && <>
                            <div className="order-2 lg:order-1 mb-[75px] mx-6 lg:mx-0" key={serviceindex}>
                                <Image
                                    src={serviceSection?.video ? serviceSection?.video : aboutzion}
                                    alt="meow asthetic clinic"
                                    width={500}
                                    height={400}
                                    className="rounded-2xl w-full h-full lg:max-h-[700px] object-cover"
                                />
                            </div>

                            <div className="py-5 px-6 lg:px-0 flex flex-col gap-4 lg:gap-6 order-1 lg:order-2">
                                <TypographyP className="flex items-center gap-4 text-base">
                                    {serviceSection?.small_title}
                                </TypographyP>
                                <TypographyH1 className="font-medium font-plusjakartasans">
                                    {serviceSection?.big_title}
                                </TypographyH1>
                                <TypographyP className="text-[#54595FC2] lg:leading-8">
                                    {serviceSection?.description}
                                </TypographyP>

                                <div className="sm:pt-7">
                                    <Link href='/about-us'>
                                        <Button name="aboutus" className="bg-secondarylite text-white text-base px-7 py-5 font-[600] rounded-full">Learn More</Button>
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

export default AboutZionSection