"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { IoIosArrowRoundForward } from "react-icons/io"
import kp from "@/public/assests/procedures.jpg"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ServiceList } from "@/lib/hooks/ServiceList"
import { Skeleton } from "../ui/skeleton"

export function CardWithForm() {

    const pathname = usePathname()
    const keyprocedure = pathname?.includes("/key-procedures")
    const { listofTreatments, isLoading } = ServiceList()

    return (
        <>
            {listofTreatments?.length > 0 ? listofTreatments?.map((card, cardindex) => (
                <>
                    {card?.type === "key-procedures" &&
                        <Card
                            key={cardindex}
                            className={`min-w-[266px] w-full lg:max-w-[450px] px-4 bg-[#FFFEFA30] border ${keyprocedure ? "lg:max-w-[400px] px-0 bg-white rounded-xl" : ""}`}>
                            <CardHeader className={`${keyprocedure ? "px-0 space-y-0 py-0" : ""}`}>
                                <Image
                                    src={kp}
                                    alt="Anti-ageing Treatments"
                                    width={400}
                                    height={150}
                                    quality={100}
                                    className="rounded-xl w-full h-full object-contain"
                                />
                            </CardHeader>
                            <CardContent className="gap-5 flex flex-col pb-0">
                                <CardTitle className={`md:text-xl lg:text-[28px] text-white ${keyprocedure ? "text-secondarylite pt-5 pb-8 text-center lg:text-xl" : ""}`}>
                                    <Link href={`key-procedures/${card?.slug}?type=${card?.type}&&slug=${card?.slug}`}>
                                        {card?.title}
                                    </Link>
                                </CardTitle>
                                {!keyprocedure && <CardDescription className="text-lg text-[#FFFEFAB3]">
                                    {card?.slug}
                                </CardDescription>
                                }
                            </CardContent>
                            {!keyprocedure && <CardFooter className="flex justify-start">
                                <Link
                                    href={`key-procedures/${card?.slug}?type=${card?.type}&&slug=${card?.slug}`}
                                    aria-label="keyprocedures">
                                    <Button className="flex gap-3 px-0 items-center bg-transparent hover:bg-transparent text-white font-semibold text-2xl lg:text-[17px]">
                                        Learn More
                                        <IoIosArrowRoundForward />
                                    </Button>
                                </Link>
                            </CardFooter>
                            }
                        </Card >
                    }
                </>
            ))
                :
                <>
                    {[1, 2, 3]?.map((index) => (
                        <Skeleton className="w-[450px] h-[400px] bg-[#FFFEFA30] flex justify-center items-center rounded-xl" key={index}>
                            <div className="flex flex-col gap-8">
                                <Skeleton className="h-[200px] w-[350px] bg-slate-200 rounded-xl" />
                                <div className="flex flex-col gap-5">
                                    <Skeleton className="h-4 w-[250px] bg-slate-200 rounded-xl" />
                                    {!keyprocedure &&
                                        <Skeleton className="h-4 w-[180px] bg-slate-200 rounded-xl" />}
                                    {!keyprocedure &&
                                        <Skeleton className="h-4 w-[120px] bg-slate-200 rounded-xl" />}
                                </div>
                            </div>
                        </Skeleton>
                    ))}
                </>
            }
        </>
    )
}
