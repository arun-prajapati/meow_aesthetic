import AboutDoctor from "@/app/pagesContain/About/sections/AboutDoctor"
import AboutZion from "@/app/pagesContain/About/sections/AboutZion"
import FooterSection from "@/app/pagesContain/About/sections/FooterSection"
import ZionClinic from "@/app/pagesContain/About/sections/ZionClinic"
import FirstSection from "@/components/common/FirstSection"
import Header from "@/components/header/common/Header"

const page = () => {
  return (
    <>
      <Header />
      <FirstSection
        heading="ABOUT US"
        description="Clinic & Doctor Information"
      />
      <AboutZion />
      <AboutDoctor />
      <ZionClinic />
      <FooterSection />
    </>
  )
}

export default page