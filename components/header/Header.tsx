import Link from "next/link"
import { Button } from "../ui/button"
import Navbar from "./Navbar"
import SocialHeader from "./SocialHeader"
import Image from "next/image"
import meowlogo from "@/public/assests/meowlogo.png"
import logo from "@/public/assests/logo.png"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { HiOutlineMenuAlt3 } from "react-icons/hi"

const Header = () => {
    return (
        <header className="relative z-30">
            {/* upper header of social connection */}
            <SocialHeader />

            <div className="container flex items-center justify-between py-5 2xl:px-0">
                {/* logo section */}
                <Link href="/" className="min-w-20">
                    <Image
                        src={logo}
                        alt="meow"
                        width={130}
                        quality={100}
                    />
                </Link>

                {/* navbar */}
                <div className="hidden lg:grid justify-center">
                    <Navbar />
                </div>

                {/* --menu button-- */}
                <div className="flex lg:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <HiOutlineMenuAlt3 className="w-8 h-8 text-white" />
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

                {/* button for make appoinment */}
                <Link href={"/contact-us"} className="hidden lg:block ">
                    <Button className="rounded-3xl font-[600] text-base hover:opacity-80">Make an Appoinment</Button>
                </Link>
            </div>
        </header>
    )
}

export default Header