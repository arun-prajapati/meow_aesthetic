"use client"
import { CardWithForm } from "@/components/common/KeyProceduresCard"
import TypographyH1 from "@/components/typography/TypographyH1"
import TypographyP from "@/components/typography/TypographyP"
import Image from "next/image"
import keyprocedures from "@/public/assests/keyprocedures.webp"
import { VideoListOfHomePage } from "@/lib/hooks/HomePageApi"
import { Skeleton } from "@/components/ui/skeleton"

const KeyProceduresSection = () => {

    const { listofVideos } = VideoListOfHomePage()

    return (
        <section className="bg-white px-3">
            <div className="container py-10 lg:py-24 flex flex-col gap-10 lg:gap-5">
                <TypographyH1 className="font-medium font-plusjakartasans text-[#1E1E1E] text-center pt-10 lg:pt-0">
                    Meow Aesthetic Treatments Are <span className="font-playfairdisplay italic">Safe, Effective,</span> And Specifically Curated For <span className="font-playfairdisplay italic">Natural Looking Results.</span>
                </TypographyH1>
                <TypographyP className="text-3xl text-center">
                    Call us at <strong>6235 7358</strong> or send us an enquiry to find out more.
                </TypographyP>
            </div>
            <div className="w-full relative">
                {listofVideos?.length > 0 ? listofVideos?.map((serviceSection, serviceindex) => (
                    <>
                        {serviceSection?.type === "service" && <>
                            <video
                                key={serviceindex}
                                muted
                                playsInline
                                loop
                                autoPlay
                                className="h-full w-full absolute top-0 object-cover hidden md:block rounded-2xl z-10"
                            >
                                <source
                                    src={serviceSection?.video}
                                    type="video/mp4"
                                />
                            </video>

                            {/* mask layer */}
                            <div className="absolute z-20 top-0 left-0 w-full h-full bg-black opacity-30 rounded-2xl" />

                            <Image
                                src={keyprocedures}
                                alt="keyprocedures"
                                className="h-full w-full absolute top-0 object-cover md:hidden block rounded-2xl"
                            />
                            <div className="container w-full flex flex-col py-24 z-50 relative 2xl:px-0">
                                <div className="flex flex-col gap-5 text-white pb-14">
                                    <TypographyP className="flex items-center gap-4 text-2xl">
                                        {serviceSection?.small_title}
                                    </TypographyP>
                                    <TypographyH1 className="text-5xl font-medium font-plusjakartasans">
                                        {serviceSection?.big_title}
                                    </TypographyH1>
                                    <TypographyP className="text-[#FFFEFAC4]">
                                        {serviceSection?.description}
                                    </TypographyP>
                                </div>
                                <div className="w-full grid lg:grid-cols-3 gap-6 justify-center lg:justify-between">
                                    <CardWithForm />
                                </div>
                            </div>
                        </>
                        }
                    </>
                ))
                    :
                    <Skeleton className="m-auto w-[95%] h-[80vh] bg-slate-200 rounded-2xl" />
                }
            </div>
        </section>
    )
}

export default KeyProceduresSection