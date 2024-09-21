"use client"
import TypographyH1 from "@/components/typography/TypographyH1"
import TypographyP from "@/components/typography/TypographyP"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import SignatureTreatments from "@/public/assests/SignatureTreatments.png"
import Link from "next/link"
import { ServiceList } from "@/lib/hooks/ServiceList"
import { TbLoaderQuarter } from "react-icons/tb"

const SignatureTreatmentsSection = () => {

    const { listofTreatments, isLoading } = ServiceList()

    return (
        <section className="bg-secondarylite">
            <div className="lg:container grid lg:grid-cols-2 gap-5 lg:gap-12 lg:py-20">

                <div className="lg:border-r border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l mx-7 lg:mx-0 lg:px-12 py-14 flex flex-col gap-5 mt-24 lg:mt-0">
                    <TypographyH1 className="font-medium font-plusjakartasans text-white">
                        Signature Treatments
                    </TypographyH1>
                    <TypographyP className="text-[#FFFEFAC4] lg:pt-5">
                        {`As part of Dr Meow's mission to deliver safe and natural-looking results with his patients' best interests in mind, our aesthetic clinic in Singapore provides a wide range of services (including medical-grade products and clinically proven devices) that are designed for effective skin enhancement.`}
                    </TypographyP>

                    <div className="pt-10">
                        {
                            isLoading ? <TbLoaderQuarter className="animate-spin text-4xl flex items-center justify-center w-full text-white" />
                                : <>
                                    <ul className="grid lg:grid-cols-2">
                                        {listofTreatments?.map((treatment, treatmentindex) => (
                                            <>
                                                {
                                                    treatment?.type === "our-treatments" && <li key={treatmentindex} className="flex items-center gap-3 pb-3">
                                                        <div className="w-3 h-3 rounded-full bg-listfill" />
                                                        <Link href={`signature-tratments/${treatment?.slug}?type=${treatment?.type}&&slug=${treatment?.slug}`}>
                                                            <span className="text-white hover:text-listfill font-[600] text-[20px] cursor-pointer">{treatment?.title}</span>
                                                        </Link>
                                                    </li >
                                                }
                                            </>
                                        ))}
                                    </ul>
                                </>
                        }
                    </div>

                    <div className="pt-10">
                        <Link href="/signature-tratments">
                            <Button className="rounded-full font-[600] text-base px-8 py-4">
                                All Signature Aesthetic Treatments
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="border-b lg:border-r lg:border-b-0 p-12 lg:pr-12 lg:p-0 mb-24 lg:mb-0 overflow-hidden">
                    <Image
                        src={SignatureTreatments}
                        alt="Signature Treatments"
                        width={400}
                        height={400}
                        quality={100}
                        className="w-full"
                    />
                </div>

            </div>
        </section >
    )
}

export default SignatureTreatmentsSection