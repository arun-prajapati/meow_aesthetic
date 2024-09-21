import TypographyH1 from "@/components/typography/TypographyH1"
import TypographyP from "@/components/typography/TypographyP"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FiPlus } from "react-icons/fi"

const TransformYourLookSection = () => {
    return (
        <section className="w-full bg-[url('/assests/Appointment.jpg')] bg-cover bg-center relative py-16 lg:py-32">
            {/* mask layer */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-20" />

            <div className="text-white flex flex-col items-center justify-center text-center gap-5 lg:gap-7 w-full h-full relative z-30 2xl:w-[35%] lg:mx-auto">
                <TypographyP className="flex items-center gap-4">
                    <FiPlus />
                    GET STARTED
                </TypographyP>
                <TypographyH1 className="lg:leading-[60px] font-medium font-plusjakartasans">
                    Transform Your Look with <span className="font-playfairdisplay italic">Confidence</span>
                </TypographyH1>
                <TypographyP className="mx-8 lg:mx-20">
                    Ready to achieve your aesthetic goals? Schedule an appointment with Meow Aesthetic Clinic and let our expert team provide you with safe and effective treatments.
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
    )
}

export default TransformYourLookSection