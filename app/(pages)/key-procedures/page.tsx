import FooterSection from "@/app/pagesContain/About/sections/FooterSection"
import MainProcedureSection from "@/app/pagesContain/KeyProcedures/section/MainProcedureSection"
import FirstSection from "@/components/common/FirstSection"
import Header from "@/components/header/common/Header"

const page = () => {
    return (
        <>
            <Header />
            <FirstSection
                heading="KEY PROCEDURES"
                description="Seamless Skin Improvements"
            />
            <MainProcedureSection />
            <FooterSection />
        </>
    )
}

export default page