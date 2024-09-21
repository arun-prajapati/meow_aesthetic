"use client";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ServiceList } from "@/lib/hooks/ServiceList";
import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";
import { TbLoaderQuarter } from "react-icons/tb";

const NavMenu = () => {

    const pathname = usePathname()
    const route = useRouter()
    const { listofTreatments, isLoading } = ServiceList()

    //for signature treatments when swtich between to services
    const naviagte = (value: string) => {
        const remmoveDubPath = pathname.split("/")[1]
        if (remmoveDubPath === "signature-tratments") {
            route.push(`/signature-tratments/${value}`)
        } else {
            route.push(`/signature-tratments/${value}`)
        }
    }

    //for key procedures when navigate from one service to another
    const navigater = (value: string) => {
        const remmoveDubPath = pathname.split("/")[1]
        if (remmoveDubPath !== "key-procedures") {
            route.push(`/key-procedures/${value}`)
        } else {
            route.push(`/key-procedures/${value}`)
        }
    }


    return (
        <NavigationMenu>
            <NavigationMenuList className={cn("gap-3 lg:gap-6 2xl:gap-28 flex flex-col lg:flex-row",
                pathname === "/" && "gap-3 lg:gap-6 2xl:gap-8 flex flex-col lg:flex-row")}>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn("hover:text-currentlink text-secondarylite",
                        pathname === "/" && "text-secondarylite lg:text-[#FFFFFF87] hover:text-black lg:hover:text-white",
                        pathname?.includes("/signature-tratments") && "text-currentlink")}>
                        <Link href={"/signature-tratments"}>
                            Our Treatments
                        </Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent >
                        <div className="px-12 py-20 rounded-xl grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] 2xl:w-[1000px] z-30 relative top-0 overflow-auto">
                            {
                                isLoading ? <TbLoaderQuarter className="animate-spin text-4xl flex items-center justify-center w-full" />
                                    : <>
                                        <ul className="w-full grid grid-cols-3 gap-3">
                                            {listofTreatments?.map((treatment, treatmentindex) => (
                                                <>
                                                    {
                                                        treatment?.type === "our-treatments" && <li key={treatmentindex} className="flex items-center gap-3 transition-all delay-300 ease-in-out pb-3 border-b border-secondarylite">
                                                            <div className="w-3 h-3 rounded-full bg-secondarylite" />
                                                            <li onClick={() => naviagte(`${treatment?.slug}?type=${treatment?.type}&&slug=${treatment?.slug}`)}>
                                                                <span className="text-secondarylite font-[600] text-[20px] cursor-pointer">{treatment?.title}</span>
                                                            </li>
                                                        </li>
                                                    }
                                                </>
                                            ))}
                                        </ul>
                                    </>
                            }
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn("hover:text-currentlink text-secondarylite",
                        pathname === "/" && "text-secondarylite lg:text-[#FFFFFF87] hover:text-black lg:hover:text-white",
                        pathname?.includes("/key-procedures") && "text-currentlink")}>
                        <Link href={"/key-procedures"}>
                            Key Procedures
                        </Link>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                        {
                            isLoading ? <TbLoaderQuarter className="animate-spin text-4xl flex items-center justify-center w-full" />
                                : <>
                                    <ul className="grid w-[300px] gap-3 p-4">
                                        {listofTreatments?.map((treatment) => (
                                            <>
                                                {
                                                    treatment?.type === "key-procedures" &&
                                                    <a
                                                        key={treatment?.title}
                                                        title={treatment?.title}
                                                        onClick={() => navigater(`${treatment?.slug}?type=${treatment?.type}&&slug=${treatment?.slug}`)}
                                                        className="text-secondarylite hover:text-currentlink font-semibold border-b border-secondarylite last:border-none cursor-pointer"
                                                    >
                                                        {treatment?.title}
                                                    </a>
                                                }
                                            </>
                                        ))}
                                    </ul >
                                </>
                        }
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu >
    )
}

export default NavMenu