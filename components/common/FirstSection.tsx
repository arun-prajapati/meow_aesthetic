"use client"
import { usePathname } from "next/navigation"
import TypographyH1 from "../typography/TypographyH1"
import TypographyP from "../typography/TypographyP"
import { useEffect, useState } from "react"

const FirstSection = ({ heading, description }: { heading?: string, description?: string }) => {

    const [urlPath, setUrlPath] = useState<string>()
    const path = usePathname()

    useEffect(() => {
        var splitUrl = path?.split('/')[2];
        const removeDash = splitUrl?.replace(/-/g, " ")?.toUpperCase()
        setUrlPath(removeDash)
    }, [path])

    return (
        <section className="bg-secondarylite text-white w-full min-h-64 flex flex-col items-center justify-center gap-5">
            <TypographyH1 className="lg:text-6xl font-poppins font-light text-center">
                {urlPath ? urlPath : heading}
            </TypographyH1>
            <TypographyP className="text-lg lg:text-2xl">
                {description}
            </TypographyP>
        </section>
    )
}

export default FirstSection