"use client"
import { ServiceList } from "@/lib/hooks/ServiceList";
import Link from "next/link"
import { TbLoader3 } from "react-icons/tb";

const ServicesComponent = () => {

    const { listofTreatments, isLoading } = ServiceList()

    return (
        <main className="bg-[#e8f0f3] px-12 py-20 rounded-xl ">
            {
                isLoading ? <TbLoader3 className="animate-spin text-4xl flex items-center justify-center w-full" />
                    : <>
                        <ul className="w-full grid grid-cols-3 gap-3">
                            {listofTreatments?.map((treatment, treatmentindex) => (
                                <>
                                    {
                                        treatment.type === "our-treatments" && <li key={treatmentindex} className="flex items-center gap-3 transition-all delay-300 ease-in-out pb-3 border-b border-secondarylite">
                                            <div className="w-3 h-3 rounded-full bg-secondarylite" />
                                            <Link href={`signature-tratments/${treatment?.slug}?type=${treatment?.type}&&slug=${treatment?.slug}`}>
                                                <span className="text-secondarylite font-[600] text-[20px]">{treatment?.title}</span>
                                            </Link>
                                        </li>
                                    }
                                </>
                            ))}
                        </ul>
                    </>
            }
        </main >
    )
}

export default ServicesComponent