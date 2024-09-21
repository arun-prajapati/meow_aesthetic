import FooterSection from "@/app/pagesContain/About/sections/FooterSection"
import KeyProcedureServicePage from "@/app/pagesContain/KeyProcedures/services/KeyProcedureServicePage"
import FirstSection from "@/components/common/FirstSection"
import Header from "@/components/header/common/Header"

const page = () => {
    return (
        <>
            <Header />
            <FirstSection />
            <KeyProcedureServicePage />
            <FooterSection />
        </>
    )
}

export default page