"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import kp from "@/public/assests/procedures.jpg"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BlogsList } from "@/lib/hooks/BlogList"
import { TbLoader3 } from "react-icons/tb"

const DetailedBlogSidebar = () => {


    const { listOfBlogs, isLoading } = BlogsList()

    return (
        <main className="w-full lg:w-[35%] bg-[#E8F0F3] md:px-5 xl:px-8 flex xl:justify-end order-2 lg:order-1">
            <div className="py-10 lg:py-20">
                {
                    isLoading ? <TbLoader3 className="animate-spin text-4xl flex items-center justify-center w-full" />
                        :
                        <>
                            <ul className="gap-4 lg:gap-2 flex flex-col min-w-full lg:min-w-96">
                                {listOfBlogs.map((blog, blogindex) => (
                                    <li key={blogindex} className="flex items-center gap-3 pb-3">
                                        <Card
                                            className="relative bg-transparent rounded-sm min-w-[280px] lg:max-w-[360px] shadow-none">
                                            <Link href={`${blog?.slug}?slug=${blog.slug}`}>
                                                <CardHeader className="p-0">
                                                    <Image
                                                        src={blog?.image ? `https://admin-panel.meowaesthetics.com/${blog?.image}` : kp}
                                                        alt={blog?.title}
                                                        width={400}
                                                        height={400}
                                                        quality={100}
                                                        className="rounded-sm min-h-[200px] object-cover max-h-[200px]"
                                                    />
                                                </CardHeader>
                                            </Link>

                                            <CardContent className="flex flex-col gap-3 pb-0 pt-5 lg:px-0">
                                                <CardTitle className="text-lg md:text-xl lg:text-[24px] text-secondarylite flex flex-col">
                                                    {blog?.title}
                                                </CardTitle>
                                            </CardContent>
                                            <CardFooter className="lg:p-0">
                                                <Link href={`${blog?.slug}?slug=${blog.slug}`}>
                                                    <Button className="flex gap-1 px-0 items-center bg-transparent hover:bg-transparent text-[#619FCE] text-base">
                                                        Read More
                                                        <MdKeyboardDoubleArrowRight />
                                                    </Button>
                                                </Link>
                                            </CardFooter>
                                        </Card>
                                    </li>
                                ))}
                            </ul>
                        </>
                }
            </div >
        </main >
    )
}

export default DetailedBlogSidebar