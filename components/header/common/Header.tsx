"use client"
import Image from "next/image";
import Link from "next/link";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import Navbar from "./Navbar";
import meowlogo from "@/public/assests/meowlogo.png"
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import TypographyP from "@/components/typography/TypographyP";
import { VideoListOfHomePage } from "@/lib/hooks/HomePageApi";

const Header = () => {

    const { listofVideos } = VideoListOfHomePage() //api
    return (
        <header className="w-full">

            <div className="border-b border-secondarylite">
                <div className="md:container flex items-center justify-between py-3 px-3 lg:px-32">

                    {/* --call-- */}
                    <div className="block lg:hidden border rounded-full border-secondarylite">
                        <TbPhoneCall className="text-secondarylite w-8 h-8 p-2" />
                    </div>

                    {/* --logo-- */}
                    <Link href="/">
                        <Image
                            src={meowlogo}
                            alt="meow"
                            width={130}
                            quality={100}
                            priority={true}
                        />
                    </Link>

                    {/* --call for large-screen-- */}
                    <div className="hidden lg:flex items-center gap-2">
                        {listofVideos?.map((serviceSection, serviceindex) => (
                            <>
                                {serviceSection?.type === "contact_us" && <>
                                    <div className="flex flex-col items-end" key={serviceindex}>
                                        <Link href='/'>
                                            <span className="text-currentlink text-xs font-semibold">CALL US AT</span>
                                        </Link>
                                        <TypographyP className="text-2xl font-semibold">
                                            {serviceSection?.mobile}
                                        </TypographyP>
                                    </div>
                                </>
                                }
                            </>
                        ))}
                        <TbPhoneCall className="text-currentlink w-8 h-8 p-1" />
                    </div>

                    {/* --menu button-- */}
                    <div className="flex lg:hidden">
                        <Sheet>
                            <SheetTrigger className="border w-10 h-10 rounded-full grid place-content-center ">
                                <HiOutlineMenuAlt3 className="w-8 h-8" />
                            </SheetTrigger>
                            <SheetContent className="w-full">
                                <Link href="/" className="relative block min-w-20 pb-10">
                                    <Image
                                        src={meowlogo}
                                        alt="meow"
                                        width={100}
                                        quality={100}
                                        priority={true}
                                    />
                                </Link>
                                <Navbar sheetClose={SheetClose} />
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </div>

            {/* --navbar-- */}
            <div className="w-full hidden lg:flex">
                <Navbar />
            </div>
        </header>
    )
}

export default Header;
