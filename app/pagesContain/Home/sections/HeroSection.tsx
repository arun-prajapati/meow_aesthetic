"use client"
import Header from "@/components/header/Header"
import TypographyH1 from "@/components/typography/TypographyH1"
import TypographyP from "@/components/typography/TypographyP"
import { Button } from "@/components/ui/button"
import { VideoListOfHomePage } from "@/lib/hooks/HomePageApi"
import Link from "next/link"
import { TbLoaderQuarter } from "react-icons/tb"

const HeroSection = () => {

    const { listofVideos, isLoading } = VideoListOfHomePage()

    return (
        <section className="w-full h-svh">
            <div className="w-full h-svh relative z-10">
                {
                    isLoading ?
                        <div className="w-full h-full flex justify-center items-center">
                            <TbLoaderQuarter className="animate-spin text-9xl text-black" />
                        </div>
                        : <>
                            {listofVideos?.map((heroSectionData, herosectionindex) => (
                                <>
                                    {heroSectionData?.type === "hero" && <>
                                        <video
                                            key={herosectionindex}
                                            muted
                                            playsInline
                                            loop
                                            autoPlay
                                            className="absolute top-0 left-0 h-svh w-full object-cover"
                                        >
                                            <source
                                                src={heroSectionData?.video}
                                                type="video/mp4"
                                            />
                                        </video>

                                        < div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

                                        < div className="container h-screen flex flex-col justify-center gap-6 text-white relative z-30 2xl:px-0" >

                                            <TypographyP className="flex items-center gap-4 mt-10">
                                                {heroSectionData?.small_title}
                                            </TypographyP>
                                            <TypographyH1 className="xl:w-[75%] font-playfairdisplay text-3xl leading-[45px] lg:leading-[60px] 2xl:text-[75px] 2xl:leading-[100px] font-normal italic">
                                                {heroSectionData?.big_title}
                                                {/* One-Stop <span className="font-bold">Aesthetic Clinic</span> for <span className="font-bold">Effective</span> & <span className="font-bold">Natural</span> Results */}
                                            </TypographyH1>

                                            {/* buttons */}
                                            < div className="flex items-center gap-5" >
                                                <Link href={"/contact-us"} className="group">
                                                    <Button className="rounded-3xl bg-white text-black group-hover:opacity-80 px-9 font-bold text-base">
                                                        Enquire Now
                                                    </Button>
                                                </Link>
                                                <Link href={"/about-us"}>
                                                    <Button className="rounded-3xl px-9 bg-transparent text-white border font-bold text-base">
                                                        About Us
                                                    </Button>
                                                </Link>
                                            </div>

                                        </div>
                                    </>
                                    }
                                </>
                            ))}
                            < div className="absolute top-0 w-full z-50" >
                                <Header />
                            </div>
                        </>
                }
            </div >
        </section >
    )
}

export default HeroSection







