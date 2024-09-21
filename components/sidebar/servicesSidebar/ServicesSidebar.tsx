"use client"
import { ServiceList } from "@/lib/hooks/ServiceList"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { TbLoader3 } from "react-icons/tb"

const ServicesSidebar = () => {

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
    const searchParams = useSearchParams()
    const Type = searchParams.get("type")

    return (
        <main className="w-full lg:w-[35%] bg-liteskyblue px-5 xl:px-12 flex xl:justify-end order-2 lg:order-1">
            {
                isLoading ? <TbLoader3 className="animate-spin text-4xl flex items-center justify-center w-full" />
                    : <div className="w-full py-10 lg:py-20 lg:max-w-96">
                        <ul className="gap-4 lg:gap-2 flex flex-col">
                            {listofTreatments?.map((treatment, treatmentindex) => (
                                <>
                                    {
                                        Type === "our-treatments" ? treatment?.type === "our-treatments" && <li key={treatmentindex} className="flex items-center gap-3 transition-all delay-300 ease-in-out pb-3 border-b border-secondarylite last:border-none">
                                            <div className="w-3 h-3 rounded-full bg-secondarylite" />
                                            <span className="text-secondarylite font-[600] text-[20px] cursor-pointer"
                                                onClick={() => naviagte(`${treatment?.slug}?type=${treatment?.type}&&slug=${treatment?.slug}`)}
                                            >{treatment?.title}</span>
                                        </li> :
                                            treatment?.type === "key-procedures" && <li key={treatmentindex} className="flex items-center gap-3 transition-all delay-300 ease-in-out pb-3 border-b border-secondarylite last:border-none">
                                                <div className="w-3 h-3 rounded-full bg-secondarylite" />
                                                <span
                                                    onClick={() => navigater(`${treatment?.slug}?type=${treatment?.type}&&slug=${treatment?.slug}`)}
                                                    className="text-secondarylite font-[600] text-[20px] cursor-pointer">{treatment?.title}</span>
                                            </li>
                                    }
                                </>
                            ))}
                        </ul>
                    </div>
            }
        </main>
    )
}

export default ServicesSidebar
