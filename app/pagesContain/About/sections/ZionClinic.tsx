"use client"
import TypographyP from "@/components/typography/TypographyP"
import Image from "next/image"
import meowDoctor from "@/public/assests/aboutzion.jpg"
import { DoctorList } from "@/lib/hooks/DoctorList"
import { Skeleton } from "@/components/ui/skeleton"

const ZionClinic = () => {

    const { listOfDoctors } = DoctorList()

    return (
        <section>
            <div className="container grid lg:grid-cols-2 gap-5 lg:gap-12 items-center py-10 lg:py-20">

                {listOfDoctors?.length > 0 ? listOfDoctors?.map((doctorsData, doctorIndex) => (
                    <>
                        {doctorsData?.id === 2 &&
                            <>
                                <div className="order-2 lg:order-1" key={doctorIndex}>
                                    <Image
                                        src={doctorsData?.image ? `https://admin-panel.meowaesthetics.com/${doctorsData?.image}` : meowDoctor}
                                        quality={100}
                                        width={500}
                                        height={500}
                                        alt="Dr Meow"
                                        className="rounded-lg w-full h-full lg:max-w-[605px]"
                                    />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <TypographyP className="text-[#6F7E88]">
                                        {doctorsData?.description}
                                    </TypographyP>
                                </div>
                            </>
                        }
                    </>
                ))
                    :
                    <>
                        <div className="order-2 lg:order-1">
                            <Skeleton className="rounded-lg h-[350px] w-[605px] bg-slate-200" />
                        </div>
                        <div className="order-1 lg:order-2 flex flex-col gap-2">
                            <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                            <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                            <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                            <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                            <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                            <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                            <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                        </div>
                    </>
                }

            </div>
        </section >
    )
}

export default ZionClinic