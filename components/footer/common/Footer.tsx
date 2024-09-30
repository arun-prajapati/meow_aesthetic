"use client"
import Image from "next/image"
import meowlogo from "@/public/assests/meowlogo.png"
import { SlLocationPin } from "react-icons/sl"
import { TbPhoneCall } from "react-icons/tb"
import { LuClock } from "react-icons/lu"
import TypographyP from "@/components/typography/TypographyP"
import { VideoListOfHomePage } from "@/lib/hooks/HomePageApi"

const Footer = () => {

    const { MobileNumber, Sat_Time, Mon_To_Fri_Time } = VideoListOfHomePage() //api

    return (
        <footer className="bg-skyblue w-full pt-24 lg:pt-36">
            <div className="container lg:px-32 grid lg:grid-cols-2 gap-5 lg:gap-0 py-5">
                <div className="flex flex-col items-center lg:items-start gap-5">
                    <Image
                        src={meowlogo}
                        alt="meow"
                        width={130}
                        quality={100}
                    />

                    <div className="flex flex-col lg:flex-row items-center text-center lg:text-left lg:items-start gap-3">
                        <SlLocationPin className="text-secondarylite w-8 h-8" />
                        <div className="flex flex-col">
                            <TypographyP className="font-[600] text-secondarylite">
                                We Are Located At:
                            </TypographyP>
                            <TypographyP className="text-[17px] text-secondarylite lg:w-[55%]">
                                Sure woods square tower 1, 05-62 S737715
                            </TypographyP>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center text-center lg:text-left lg:items-start gap-3">
                        <TbPhoneCall className="text-secondarylite w-8 h-8" />
                        <div className="flex flex-col">
                            <TypographyP className="font-[600] text-secondarylite">
                                Call Us At:
                            </TypographyP>
                            <TypographyP className="text-[17px] text-[secondarylite]">
                                {MobileNumber}
                            </TypographyP>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center text-center lg:text-left lg:items-start gap-3">
                        <LuClock className="text-secondarylite w-8 h-8" />
                        <div className="flex flex-col">
                            <TypographyP className="font-[600] text-secondarylite">
                                Our Opening Hours:
                            </TypographyP>
                            <div className="flex flex-col">
                                <TypographyP className="text-[17px] text-secondarylite">
                                    Monday to Friday: {Mon_To_Fri_Time}
                                </TypographyP>
                                <TypographyP className="text-[17px] text-secondarylite">
                                    Saturday: {Sat_Time}
                                </TypographyP>
                                <TypographyP className="text-[17px] text-secondarylite">
                                    Sunday and PH: Closed
                                </TypographyP>
                            </div>
                        </div>
                    </div>
                </div>

                {/* map div */}
                <div className="w-full flex items-center justify-center py-5">
                    <iframe
                        className="lg:w-[500px] lg:h-[500px]"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sure%20woods%20square%20tower%201,%2005-62%20S737715+(Sure%20woods%20square%20tower%201,%2005-62%20S737715)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                    </iframe>
                    {/* <div className="gmap_canvas">
                        <iframe
                            className="gmap_iframe"
                            width="100%"
                            frameBorder={0}
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sure%20woods%20square%20tower%201,%2005-62%20S737715+(Sure%20woods%20square%20tower%201,%2005-62%20S737715)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        />
                    </div>
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                ".mapouter{position:relative;text-align:right;width:100%;height:500px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:500px;}.gmap_iframe {height:500px!important;}"
                        }}
                    /> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer