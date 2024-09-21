import Image from "next/image"
import contactus from "@/public/assests/contactus.webp"

const ContactUsSection = () => {
    return (
        <section className="w-full py-10">
            <Image
                src={contactus}
                alt="contactus"
                width={500}
                height={500}
                className="min-w-[65%] mx-auto rounded-xl"
            />
        </section>
    )
}

export default ContactUsSection