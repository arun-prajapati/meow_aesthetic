import Image from "next/image"
import TypographyP from "../typography/TypographyP"
import TypographyH3 from "../typography/TypographyH3"
import logo from "@/public/assests/logo.png"

const MainFooter = () => {
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
                            <li><a href="/blogs">Blogs</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <TypographyH3 className="lg:whitespace-nowrap">Working Hours</TypographyH3>
                        <ul className="flex flex-col gap-5 text-[#FFFEFAB3] text-xl lg:text-base">
                            <li className="flex flex-col">
                                Monday - Friday
                                <span>11am - 8pm</span>
                            </li >
                            <li className="flex flex-col">
                                Saturday
                                <span>11am - 4pm</span>
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
                                Sure woods square tower 1, 05-62 S737715
                            </li>
                        </ul>
                        <div className="w-full flex items-center justify-center py-5">
                            <iframe
                                className="lg:w-[250px] lg:h-[250px]"
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
                                        ".mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:300px!important;}"
                                }}
                            /> */}
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default MainFooter