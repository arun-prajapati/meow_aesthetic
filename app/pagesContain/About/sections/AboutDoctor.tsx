"use client"
import TypographyH1 from "@/components/typography/TypographyH1"
import TypographyP from "@/components/typography/TypographyP"
import Image from "next/image"
import doctor from "@/public/assests/OurAestheticDoctorSextion.jpg"
import { DoctorList } from "@/lib/hooks/DoctorList"
import { Skeleton } from "@/components/ui/skeleton"

const AboutDoctor = () => {

    const { listOfDoctors, isLoading } = DoctorList()

    return (
        <section className="bg-liteskyblue">
            <div className="container grid lg:grid-cols-2 gap-5 lg:gap-12 items-start py-10 lg:py-20">
                {listOfDoctors?.length > 0 ? listOfDoctors?.map((doctorsData, doctorIndex) => (
                    <>
                        {doctorsData?.id === 1 &&
                            <>
                                <div className="flex flex-col gap-4" key={doctorIndex}>
                                    <TypographyH1 className="text-secondarylite">
                                        {doctorsData?.name}
                                    </TypographyH1>
                                    <TypographyP className="text-[#6F7E88] lg:pt-6">
                                        {doctorsData?.description}
                                    </TypographyP>
                                </div>
                                <div className="flex justify-end">
                                    <Image
                                        src={doctor}
                                        quality={100}
                                        alt="Dr Meow"
                                        className="rounded-lg w-full h-full lg:max-w-[555px]"
                                    />
                                </div>
                            </>
                        }
                    </>
                ))
                    :
                    <>
                        <div className="flex flex-col gap-8">
                            <Skeleton className="w-[250px] h-10 bg-slate-200" />
                            <div className="flex flex-col gap-2">
                                <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                                <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                                <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                                <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                                <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                                <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                                <Skeleton className="rounded-lg h-[20px] w-[605px] bg-slate-200" />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Skeleton className="rounded-lg h-[350px] w-[605px] bg-slate-200" />
                        </div>
                    </>
                }
            </div>
        </section>
    )
}

export default AboutDoctor