"use client"
import { BlogsList } from "@/lib/hooks/BlogList"
import { useSearchParams } from "next/navigation"
import { TbLoader3 } from "react-icons/tb"

const MainBlogDetailSection = () => {

    const searchParams = useSearchParams()
    const Slug: string | undefined | null = searchParams.get("slug");
    const { listOfBlogs, isLoading } = BlogsList(Slug)

    return (
        <section className=" bg-white w-full lg:w-[65%] order-1 lg:order-2">
            {
                isLoading ? <TbLoader3 className="animate-spin text-4xl flex items-center justify-center w-full" />
                    :
                    <>
                        {listOfBlogs?.map((blogsdetails, blogindex) => (
                            <div
                                key={blogindex}
                                className="p-5 lg:p-10 flex flex-col justify-start w-full lg:max-w-[70%]"
                                dangerouslySetInnerHTML={{ __html: blogsdetails?.description}}
                            />
                        ))}
                    </>
            }
        </section >
    )
}

export default MainBlogDetailSection
