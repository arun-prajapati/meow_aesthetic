import TypographyH4 from "@/components/typography/TypographyH4"
import ServicesComponent from "./ServicesComponent"
import Image from "next/image"
import keyprocedures from "@/public/assests/signature_treatments.webp"

const SignatureSection = () => {
    return (
        <section className="container w-full bg-white flex flex-col items-center justify-center gap-12 py-12 lg:py-24 lg:px-0">
            <TypographyH4 className="font-[600] lg:w-[75%] lg:mx-auto text-secondarylite text-center">
                At our aesthetic clinic, we provide a comfortable environment for the diagnosis and treatment of all skin issues. With transparently priced services and evidence-based treatments, rest assured that your satisfaction is our priority. Enquire today to find out more.
            </TypographyH4>
            <Image
                src={keyprocedures}
                alt="key procedures"
                width={800}
                height={500}
                className="w-full lg:max-w-[90%] lg:mx-auto h-full rounded-xl"
            />
            
            <div className="lg:pt-14 w-full">
                <ServicesComponent />
            </div>
        </section>
    )
}

export default SignatureSection