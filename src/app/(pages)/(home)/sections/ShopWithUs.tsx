import axiosServer from "@/lib/axios";
import ProductsSection from "./ProductsSection";
import ApiError from "@/components/error/ApiError";

const getProductData = async () => {
  try {
    const res = await axiosServer.get("/api_product_list");
    return res.data;
  } catch (error) {
    console.error("Failed to fetch product data:", error);
    return null;
  }
};

const ShopWithUs = async () => {
  //
  const productData = await getProductData();

  if (!productData) {
    return <ApiError />;
  }

  return (
    <section className="w-full bg-white">
      <div className="w-[75%] mx-auto py-14 flex flex-col gap-10 relative">
        <h2 className="font-semibold text-4xl lg:text-5xl text-center font-[--font-playfair]">
          Shop With Us
        </h2>
        <ProductsSection data={productData?.data} />
      </div>
    </section>
  );
};

export default ShopWithUs;
