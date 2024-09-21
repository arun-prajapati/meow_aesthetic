"use client"
import faqs from "@/public/assests/aboutzion.jpg"
import TypographyP from "@/components/typography/TypographyP"
import { FiPlus } from "react-icons/fi"
import TypographyH1 from "@/components/typography/TypographyH1"
import Image from "next/image"
import { AccordionDemo } from "@/components/common/FAQs"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const FAQsSection = () => {

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
            <div className="lg:container grid lg:grid-cols-2 items-center gap-10 lg:gap-24 2xl:px-0 sm:py-20">

                <div className="aspect-square order-2 lg:order-1 mx-6 lg:mx-0 mb-20 lg:mb-0">
                    <Image
                        src={faqs}
                        alt="meow asthetic clinic"
                        width={500}
                        height={500}
                        quality={100}
                        className="rounded-2xl w-full h-full object-cover"
                    />
                </div>

                <div className="mt-20 lg:mt-0 py-5 px-6 lg:px-0 flex flex-col gap-5 order-1 lg:order-2">
                    <TypographyP className="flex items-center gap-4 text-2xl lg:text-base">
                        <FiPlus />
                        FAQs
                    </TypographyP>
                    <TypographyH1 className="font-medium font-plusjakartasans">
                        Frequently <span className="font-playfairdisplay italic">Asked</span> Questions
                    </TypographyH1>


                    {/* faqs */}
                    <AccordionDemo />
                </div>
            </div>
        </motion.section>
    )
}

export default FAQsSection