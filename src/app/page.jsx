import Image from "next/image";
import Banner from "./components/home/Banner";
import Products from "./components/home/Products";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";
import Testimonials from "./components/Testimonial/Testimonials";
import Categories from "./components/categories/page";
import FeaturedProducts from "./components/featuredProducts/page";
import PricingOffers from "./components/pricingOffers/page";
import CTASection from "./components/CTASection/page";

export default function Home() {
  return (
    <div className="">
      <section>
        <Banner></Banner>
      </section>

      <section>
        <FeaturedProducts></FeaturedProducts>
      </section>
      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section>
        <Categories></Categories>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
      <section>
        <PricingOffers></PricingOffers>
      </section>
      <section>
        <CTASection></CTASection>
      </section>
    </div>
  );
}
