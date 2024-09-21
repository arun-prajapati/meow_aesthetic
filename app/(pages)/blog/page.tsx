import FooterSection from "@/app/pagesContain/About/sections/FooterSection"
import MainBlogSection from "@/app/pagesContain/Blog/section/MainBlogSection"
import FirstSection from "@/components/common/FirstSection"
import Header from "@/components/header/common/Header"

const page = () => {
    return (
        <>
            <Header />
            <FirstSection 
                heading="BLOGS"
            />
            <MainBlogSection />
            <FooterSection />
        </>
    )
}

export default page