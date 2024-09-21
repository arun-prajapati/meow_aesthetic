import FooterSection from "@/app/pagesContain/About/sections/FooterSection"
import SignatureSection from "@/app/pagesContain/SignatureTratments/sectiions/SignatureSection"
import FirstSection from "@/components/common/FirstSection"
import Header from "@/components/header/common/Header"

const page = () => {
    return (
        <>
            <Header />
            <FirstSection
                heading="SIGNATURE TREATMENTS"
                description="Safe & Natural-Looking Results"
            />
            <SignatureSection />
            <FooterSection />
        </>
    )
}

export default page