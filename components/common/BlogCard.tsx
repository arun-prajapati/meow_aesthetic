"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import kp from "@/public/assests/procedures.jpg"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TbLoader3 } from "react-icons/tb"
import { BlogsList } from "@/lib/hooks/BlogList"
import { Skeleton } from "../ui/skeleton"

export function BlogCard() {

    const { listOfBlogs } = BlogsList()

    return (
        <>
            <div className="grid lg:grid-cols-3 justify-center items-center gap-8 p-20">
                {listOfBlogs.length > 0 ? listOfBlogs.map((card, cardindex) => (
                    <Link href={card?.title} key={cardindex} >
                        <Card
                            className="relative rounded-sm bg-white min-h-[400px] lg:min-h-[400px] lg:max-h-[450px] min-w-[280px] lg:max-w-[360px] shadow-2xl">
                            <CardHeader className="p-0">
                                <Image
                                    src={kp}
                                    alt={card?.title}
                                    width={400}
                                    height={150}
                                    className="rounded-sm w-full"
                                />
                            </CardHeader>

                            <CardContent className="p-4 sm:p-8 flex flex-col gap-6">
                                <CardTitle className="text-lg md:text-xl lg:text-[24px] text-secondarylite">{card?.title}</CardTitle>
                            </CardContent>

                            <CardFooter className="w-full absolute bottom-0 px-8 py-3 border-t border-t-[#eaeaea]">
                                <Link href={`blog/${card?.slug}?slug=${card.slug}`}>
                                    <Button className="flex gap-1 px-0 items-center bg-transparent hover:bg-transparent text-[#619FCE] text-sm">
                                        READ MORE
                                        <MdKeyboardDoubleArrowRight />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </Link>
                ))
                    :
                    <>
                        {[1, 2, 3]?.map((index) => (
                            <Skeleton className="w-[450px] h-[400px] bg-[#FFFEFA30] grid lg:grid-cols-3 justify-center items-center gap-8 rounded-xl" key={index}>
                                <div className="flex flex-col gap-8">
                                    <Skeleton className="h-[200px] w-[350px] bg-slate-200 rounded-xl" />
                                    <div className="flex flex-col gap-5">
                                        <Skeleton className="h-4 w-[250px] bg-slate-200 rounded-xl" />
                                        <Skeleton className="h-4 w-[120px] bg-slate-200 rounded-xl" />
                                    </div>
                                </div>
                            </Skeleton>
                        ))}
                    </>
                }
            </div>
        </>
    )
}
