"use client"
import TypographyH1 from "@/components/typography/TypographyH1"
import TypographyP from "@/components/typography/TypographyP"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { VideoListOfHomePage } from "@/lib/hooks/HomePageApi"
import Image from "next/image"
import Link from "next/link"
import keyprocedures from "@/public/assests/keyprocedures.webp"

const TransformYourLookSection = () => {

    const { listofVideos } = VideoListOfHomePage()

    return (
        <>
            {listofVideos?.length > 0 ? listofVideos?.map((serviceSection, serviceindex) => (
                <>
                    {serviceSection?.type === "footer" && <>
                        <section className="w-full relative py-16 lg:py-32">
                            <Image
                                src={serviceSection?.video ? serviceSection?.video : keyprocedures}
                                quality={100}
                                width={500}
                                height={500}
                                alt="keyprocedures"
                                className="h-full w-full absolute top-0 object-cover"
                            />
                            {/* mask layer */}
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-20" />

                            <div className="text-white flex flex-col items-center justify-center text-center gap-5 lg:gap-7 w-full h-full relative z-30 2xl:w-[35%] lg:mx-auto">
                                <TypographyP className="flex items-center gap-4">
                                    {serviceSection?.small_title}
                                </TypographyP>
                                <TypographyH1 className="lg:leading-[60px] font-medium font-plusjakartasans">
                                    {serviceSection?.big_title}
                                </TypographyH1>
                                <TypographyP className="mx-8 lg:mx-20">
                                    {serviceSection?.description}
                                </TypographyP>
                                <div className="flex items-center gap-5">
                                    <Link href={"/contact-us"} className="group">
                                        <Button className="rounded-3xl bg-white text-black group-hover:opacity-80 px-9 font-bold text-[15px] flex items-center">
                                            Get Started
                                        </Button>
                                    </Link>
                                    <Link href="/signature-tratments">
                                        <Button className="rounded-3xl px-9 bg-transparent text-white border font-bold text-[15px]">
                                            Our Services
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                        </section>
                    </>
                    }
                </>
            ))
                :
                <Skeleton className="m-auto w-full h-[45vh] bg-slate-200" />
            }
        </>
    )
}

export default TransformYourLookSection