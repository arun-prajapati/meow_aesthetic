"use client"
import Image from "next/image"
import TypographyP from "../typography/TypographyP"
import TypographyH3 from "../typography/TypographyH3"
import logo from "@/public/assests/logo.png"
import { VideoListOfHomePage } from "@/lib/hooks/HomePageApi"

const MainFooter = () => {

    const { Sat_Time, Mon_To_Fri_Time, Location, Address } = VideoListOfHomePage() //api

    return (
        <footer className="w-full bg-secondarydark text-white">
            <div className="container flex flex-col lg:flex-row gap-14 lg:gap-0 pt-14 lg:pt-24 pb-0 lg:pb-24">

                <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start gap-7 text-center lg:text-left">
                    <Image
                        src={logo}
                        alt="meow"
                        width={150}
                        quality={100}
                    />
                    <TypographyP className="text-[#FFFEFAB3] w-full lg:w-[60%] text-[17px]">
                        Discover the difference at Meow Aesthetic Clinic. Contact us today for a personalized consultation with Dr Meowi and begin your journey towards natural, beautiful results.
                    </TypographyP>
                </div>

                <div className="w-full lg:w-[60%] flex flex-col lg:flex-row text-center lg:text-left gap-8 xl:gap-10 2xl:gap-28">
                    <div className="flex flex-col gap-2">
                        <TypographyH3>Explore</TypographyH3>
                        <ul className="flex flex-col gap-3 lg:gap-1 text-[#FFFEFAB3] lg:whitespace-nowrap text-xl lg:text-base">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about-us">About</a></li>
                            <li><a href="/signature-tratments">Services</a></li>
                            <li><a href="/key-procedures">Key Procedures</a></li>
                            <li><a href="/blog">Blogs</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <TypographyH3 className="lg:whitespace-nowrap">Working Hours</TypographyH3>
                        <ul className="flex flex-col gap-5 text-[#FFFEFAB3] text-xl lg:text-base">
                            <li className="flex flex-col">
                                Monday - Friday
                                <span>{Mon_To_Fri_Time}</span>
                            </li >
                            <li className="flex flex-col">
                                Saturday
                                <span>{Sat_Time}</span>
                            </li>
                            <li className="flex flex-col">
                                Sunday and PH
                                <span>Closed</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5 lg:gap-4">
                        <TypographyH3>Location</TypographyH3>
                        <ul className="flex flex-col gap-1 lg:gap-5 text-[#FFFEFAB3] text-xl lg:text-base">
                            <li>
                                {Address}
                            </li>
                        </ul>
                        <div className="w-full flex items-center justify-center py-5">
                            <iframe
                                className="lg:w-[250px] lg:h-[250px]"
                                src={Location}
                            >
                            </iframe>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default MainFooter