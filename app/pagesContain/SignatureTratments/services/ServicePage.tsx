import ServicesSidebar from "@/components/sidebar/servicesSidebar/ServicesSidebar"
import MainServiceSection from "./sections/MainServiceSection"

const ServicePage = () => {
    return (
        <section className="w-full flex flex-col lg:flex-row">
            {/* sidebar */}
            <ServicesSidebar />

            {/* main component */}
            <MainServiceSection />
        </section>
    )
}

export default ServicePage