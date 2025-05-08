import ServiceCard from "../components/ServiceCard";

type ServiceCardsSectionProps = {
  serviceDetails: {
    title: string;
    description: string;
    image_url: string;
    duration: string;
    price: string;
  }[];
};

const ServiceCardsSection = ({ serviceDetails }: ServiceCardsSectionProps) => {
  return (
    <section className="w-full bg-white p-16 lg:p-32">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 justify-center gap-10 py-5">
        {/* <div className="flex flex-wrap gap-10 justify-start"> */}
        {serviceDetails?.map((item, index) => (
          <ServiceCard
            key={index}
            imgUrl={item?.image_url}
            name={item?.title}
            time={item?.duration}
            price={item?.price}
            description={item?.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceCardsSection;
