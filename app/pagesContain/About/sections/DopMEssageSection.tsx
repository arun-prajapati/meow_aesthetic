"use client"
import SendMessageForm from "@/components/common/SendMessageForm"
import TypographyH1 from "@/components/typography/TypographyH1"
import TypographyP from "@/components/typography/TypographyP"
import { VideoListOfHomePage } from "@/lib/hooks/HomePageApi"

const DopMEssageSection = () => {
    
    const { MobileNumber } = VideoListOfHomePage() //api

    return (
        <section className="bg-secondarylite w-full h-[660px] flex flex-col gap-7 items-center text-center pt-12 lg:pt-20 relative z-10 px-5">
            <TypographyH1 className="text-[#A4BDCF] font-playfairdisplay italic">
                “Every patient deserves our utmost care.”
            </TypographyH1>
            <TypographyP className="text-[#BCD1DF] pb-5 lg:w-[45%]">
                Drop us a message below or make an appointment with our aesthetic doctor at {MobileNumber} today.
            </TypographyP>
            <div className="container absolute top-1/3 z-20 py-10">
                <SendMessageForm />
            </div>
        </section>
    )
}

export default DopMEssageSection