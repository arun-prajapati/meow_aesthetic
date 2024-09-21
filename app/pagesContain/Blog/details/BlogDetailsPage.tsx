import DetailedBlogSidebar from "@/components/sidebar/detailedBlogSidebar/DetailedBlogSidebar"
import MainBlogDetailSection from "./section/MainBlogDetailSection"

const BlogDetailsPage = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      {/* sidebar */}
      <DetailedBlogSidebar />
      {/* main content */}
      <MainBlogDetailSection />
    </section>
  )
}

export default BlogDetailsPage