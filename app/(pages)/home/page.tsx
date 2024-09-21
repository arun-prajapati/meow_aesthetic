import AboutZionSection from "@/app/pagesContain/Home/sections/AboutZionSection"
import AppointmentSection from "@/app/pagesContain/Home/sections/AppointmentSection"
import FAQsSection from "@/app/pagesContain/Home/sections/FAQsSection"
import HeroSection from "@/app/pagesContain/Home/sections/HeroSection"
import KeyProceduresSection from "@/app/pagesContain/Home/sections/KeyProceduresSection"
import OurAestheticDoctorSextion from "@/app/pagesContain/Home/sections/OurAestheticDoctorSextion"
import SignatureTreatmentsSection from "@/app/pagesContain/Home/sections/SignatureTreatmentsSection"
import TransformYourLookSection from "@/app/pagesContain/Home/sections/TransformYourLookSection"
import Footer from "@/components/footer/Footer"

const MainHome = () => {
    return (
        <>
            <HeroSection />
            <AboutZionSection />
            <SignatureTreatmentsSection />
            <KeyProceduresSection />
            <OurAestheticDoctorSextion />
            <AppointmentSection />
            <FAQsSection />
            <TransformYourLookSection />
            <Footer />
        </>
    )
}

export default MainHome