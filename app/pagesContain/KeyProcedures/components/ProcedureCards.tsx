import { CardWithForm } from "@/components/common/KeyProceduresCard"

const ProcedureCards = () => {
    return (
        <main className="w-full">
            <div className="bg-secondarylite relative w-full lg:h-96">
                <div className="py-20 lg:py-28 container w-full flex flex-col justify-center items-center lg:flex-row gap-5">
                    <CardWithForm />
                </div>
            </div>
            <div className="bg-[#E0EBEE] h-28" />
        </main>
    )
}

export default ProcedureCards
