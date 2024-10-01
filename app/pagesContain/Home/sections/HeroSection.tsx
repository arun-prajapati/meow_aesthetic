"use client"
import Header from "@/components/header/Header"
import TypographyH1 from "@/components/typography/TypographyH1"
import TypographyH4 from "@/components/typography/TypographyH4"
import TypographyP from "@/components/typography/TypographyP"
import { Button } from "@/components/ui/button"
import { VideoListOfHomePage } from "@/lib/hooks/HomePageApi"
import Image from "next/image"
import Link from "next/link"
import { TbLoaderQuarter } from "react-icons/tb"
import keyprocedures from "@/public/assests/keyprocedures.webp"

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
                                        {heroSectionData?.img_type === "video" ?
                                            <video
                                                key={herosectionindex}
                                                autoPlay
                                                muted
                                                playsInline
                                                loop
                                                className="h-full w-full absolute top-0 object-cover z-10"
                                            >
                                                <source
                                                    src={heroSectionData?.video}
                                                    type="video/mp4"
                                                    media="(min-width: 601px)"
                                                />
                                                <source
                                                    src={heroSectionData?.mobile_video}
                                                    type="video/mp4"
                                                    media="(max-width: 600px)"
                                                />
                                            </video>
                                            :
                                            <Image
                                                src={heroSectionData?.video ? heroSectionData?.video : keyprocedures}
                                                alt="keyprocedures"
                                                className="h-full w-full absolute top-0 object-cover"
                                            />
                                        }

                                        {/* mask layer */}
                                        < div className="absolute z-20 top-0 left-0 w-full h-full bg-black opacity-50" />

                                        < div className="container h-screen flex flex-col justify-center gap-3 lg:gap-5 text-white relative z-30 2xl:px-0" >
                                            <TypographyH4 className="flex items-center mt-10">
                                                {heroSectionData?.small_title}
                                            </TypographyH4>
                                            <TypographyH1 className="xl:w-[75%] font-playfairdisplay text-3xl leading-[45px] lg:leading-[60px] 2xl:text-[75px] 2xl:leading-[100px] font-normal italic">
                                                {heroSectionData?.big_title}
                                            </TypographyH1>
                                            <TypographyP className="flex items-center text-sm sm:text-lg">
                                                {heroSectionData?.description}
                                            </TypographyP>

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







