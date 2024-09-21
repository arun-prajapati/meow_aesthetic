import FooterSection from "@/app/pagesContain/About/sections/FooterSection"
import BlogDetailsPage from "@/app/pagesContain/Blog/details/BlogDetailsPage"
import FirstSection from "@/components/common/FirstSection"
import Header from "@/components/header/common/Header"

const page = () => {
    return (
        <>
            <Header />
            <FirstSection />
            <BlogDetailsPage />
            <FooterSection />
        </>
    )
}

export default page