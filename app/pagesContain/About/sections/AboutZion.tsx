import TypographyH4 from "@/components/typography/TypographyH4"

const AboutZion = () => {
    return (
        <section className="container w-full lg:w-[50%] mx-auto text-center flex flex-col items-center justify-center gap-9 text-secondarylite py-12 lg:py-24 lg:px-0">
            <TypographyH4 className="font-[600]">
                {`Meow Aesthetic Clinic is conveniently located in Sure woods square tower. It was established by its founder,Dr Meow, to provide individualized and customized medical solutions to its client's aesthetic concerns.`}
            </TypographyH4>
            <TypographyH4 className="font-[600]">
                {`At Meow Aesthetic clinic, we strive to provide only the best and most scientifically proven treatments, using evidence-based protocols in order to achieve our goal of delivering results to our clients.`}
            </TypographyH4>
            <TypographyH4 className="font-[600]">
                {`We offer a full suite of treatment capabilities ranging from medical facials to machine based treatments such as lasers as well as injectables such as Botox and fillers.`}
            </TypographyH4>
        </section>
    )
}

export default AboutZion