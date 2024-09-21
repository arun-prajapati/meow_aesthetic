import FooterSection from "@/app/pagesContain/About/sections/FooterSection"
import ContactUsSection from "@/app/pagesContain/ContactUs/ContactUsSection"
import FirstSection from "@/components/common/FirstSection"
import Header from "@/components/header/common/Header"

const page = () => {
    return (
        <>
            <Header />
            <FirstSection
                heading="CONTACT US"
                description="Get In Touch"
            />
            <ContactUsSection />
            <FooterSection />
        </>
    )
}

export default page