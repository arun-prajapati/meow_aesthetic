import ServicesSidebar from "@/components/sidebar/servicesSidebar/ServicesSidebar"
import MainKeyProcedureSection from "./section/MainKeyProcedureSection"

const KeyProcedureServicePage = () => {
    return (
        <section className="w-full flex flex-col lg:flex-row">
            {/* sidebar */}
            <ServicesSidebar />

            {/* main component */}
            <MainKeyProcedureSection />
        </section>
    )
}

export default KeyProcedureServicePage