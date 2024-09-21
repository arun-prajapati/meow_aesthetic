"use client"
import Image from "next/image"
import aboutzion from "@/public/assests/aboutzion.jpg"
import TypographyP from "@/components/typography/TypographyP"
import { FiPlus } from "react-icons/fi"
import TypographyH1 from "@/components/typography/TypographyH1"
import TypographyH4 from "@/components/typography/TypographyH4"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const AboutZionSection = () => {

    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1])

    return (
        <motion.section className="bg-white" ref={ref} style={{
            scale: scaleProgress,
            opacity: opacityProgress
        }}>
            <div className="lg:container grid lg:grid-cols-2 gap-10 lg:gap-24 lg:py-24">

                <div className="order-2 lg:order-1 mb-[75px] mx-6 lg:mx-0">
                    <Image
                        src={aboutzion}
                        alt="meow asthetic clinic"
                        width={500}
                        height={400}
                        className="rounded-2xl w-full h-full lg:max-h-[700px] object-cover"
                    />
                </div>

                <div className="py-5 px-6 lg:px-0 flex flex-col gap-4 lg:gap-6 order-1 lg:order-2">
                    <TypographyP className="flex items-center gap-4 text-base">
                        <FiPlus />
                        ABOUT MEOW
                    </TypographyP>
                    <TypographyH1 className="font-medium font-plusjakartasans">
                        Meow Aesthetic Clinic
                    </TypographyH1>
                    <TypographyH4 className="text-secondarylite flex items-center gap-7 font-[600] text-lg">
                        <div className="w-2 h-28 lg:h-14 bg-secondarylite" />
                        <span>
                            Moew Aesthetic Clinic was established to provide patients with evidence-based treatments using a results-oriented approach.
                        </span>
                    </TypographyH4>
                    <TypographyP className="text-[#54595FC2] lg:leading-8">
                        Led by experienced aesthetic doctor, Dr meow, Moew Aesthetic Clinic is conveniently located in Wisma Atria Office Tower and offers a full suite of aesthetic treatments ranging from medical facials to machine-based treatments such as lasers and injectables.
                    </TypographyP>
                    <TypographyP className="text-[#54595FC2] lg:leading-8">
                        Striving to be one of the best aesthetic clinic in Singapore, we are committed to delivering natural-looking and beautiful results through scientifically proven treatments and technologies. We are experienced in anti-ageing medicine and non-invasive skin rejuvenation, helping patients achieve their goals in a safe and lasting manner.
                    </TypographyP>
                    <div className="sm:pt-7">
                        <Link href='/about-us'>
                            <Button name="aboutus" className="bg-secondarylite text-white text-base px-7 py-5 font-[600] rounded-full">Learn More</Button>
                        </Link>
                    </div>
                </div>

            </div>
        </motion.section>
    )
}

export default AboutZionSection