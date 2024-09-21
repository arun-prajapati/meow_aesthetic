"use client"
import { ServiceList } from "@/lib/hooks/ServiceList"
import { useSearchParams } from "next/navigation"
import { TbLoader3 } from "react-icons/tb"

const MainKeyProcedureSection = () => {

    const searchParams = useSearchParams()
    const Slug: string | undefined | null = searchParams.get("slug");
    const { listofTreatments, isLoading } = ServiceList(Slug)

    return (
        <section className=" bg-white w-full lg:w-[65%] order-1 lg:order-2">
            {
                isLoading ? <TbLoader3 className="animate-spin text-4xl flex items-center justify-center w-full" />
                    :
                    <>
                        {listofTreatments?.map((treatmentdetails, tratmentindex) => (
                            <div
                                key={tratmentindex}
                                className="p-5 lg:p-10 flex flex-col justify-start w-full lg:max-w-[870px]"
                                dangerouslySetInnerHTML={{ __html: treatmentdetails?.description }}
                            />
                        ))}
                    </>
            }
        </section >
    )
}

export default MainKeyProcedureSection