import FooterSection from "@/app/pagesContain/About/sections/FooterSection"
import ServicePage from "@/app/pagesContain/SignatureTratments/services/ServicePage"
import FirstSection from "@/components/common/FirstSection"
import Header from "@/components/header/common/Header"

const page = () => {

  return (
    <>
      <Header />
      <FirstSection />
      <ServicePage />
      <FooterSection />
    </>
  )
}

export default page