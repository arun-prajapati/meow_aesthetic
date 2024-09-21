"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavMenu from "../common/NavMenu";

const Navbar = ({ className, sheetClose }: { className?: string; sheetClose?: any }) => {

    const pathname = usePathname();
    const SheetClose = sheetClose || "span";

    return (
        <nav className={cn("flex flex-col lg:flex-row items-start lg:items-center justify-center gap-3 lg:gap-6 2xl:gap-8 font-bold w-full", className)}>

            <Link href="/" className="relative" aria-label="Homepage">
                <SheetClose>
                    <span
                        className={cn(
                            "text-secondarylite lg:text-[#FFFFFF87] hover:text-black lg:hover:text-white",
                            pathname === "/" && "text-black lg:text-white"
                        )}
                    >
                        Home
                    </span>
                </SheetClose>
            </Link>

            <Link href="/about-us" className="relative" aria-label="AboutUs">
                <SheetClose>
                    <span
                        className={cn(
                            "text-secondarylite lg:text-[#FFFFFF87] hover:text-black lg:hover:text-white",
                            pathname?.includes("/about-us") && "text-white"
                        )}
                    >
                        About Us
                    </span>
                </SheetClose>
            </Link>

            {/* navmenu dropdown option */}
            <NavMenu />

            {/* <Link className="relative" href="/signature-tratments">
                <SheetClose>
                    <span
                        className={cn(
                            "text-secondarylite lg:text-[#FFFFFF87] hover:text-black lg:hover:text-white",
                            pathname?.includes("/signature-tratments") && "text-white"
                        )}
                    >
                        Our Treatments
                    </span>
                </SheetClose>

            </Link>
            <Link className="relative" href="/key-procedures">
                <SheetClose>
                    <span
                        className={cn(
                            "text-secondarylite lg:text-[#FFFFFF87] hover:text-black lg:hover:text-white",
                            pathname?.includes("/key-procedures") && "text-white"
                        )}
                    >
                        Key Procedures
                    </span>
                </SheetClose>

            </Link> */}

            <Link className="relative" href="/blog" aria-label="Blog">
                <SheetClose>
                    <span
                        className={cn(
                            "text-secondarylite lg:text-[#FFFFFF87] hover:text-black lg:hover:text-white",
                            pathname?.includes("/blog") && "text-white"
                        )}
                    >
                        Blog
                    </span>
                </SheetClose>
            </Link>

            <Link className="relative" href="/contact-us" aria-label="ContactUs">
                <SheetClose>
                    <span
                        className={cn(
                            "text-secondarylite lg:text-[#FFFFFF87] hover:text-black lg:hover:text-white",
                            pathname?.includes("/contact-us") && "text-white"
                        )}
                    >
                        Contact Us
                    </span>
                </SheetClose>
            </Link>

        </nav>
    )
}

export default Navbar