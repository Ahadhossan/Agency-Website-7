import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* sectionHeading */}
      <SectionHeading
        headingMini="Deal for your business"
        headingPrimary="Meet our pricing plan that suit you"
      />
      {/* Price start */}
      <div className="w-[90%] mx-auto grid pt-[6rem] gap-[2rem] lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        {/* Price card 1 */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <PriceCard bg="bg-[#81124a]" price="19.99" num="1" plan="Starter" />
        </div>
        {/* Price card 2 */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <PriceCard
            bg="bg-[#22840c]"
            price="29.99"
            num="2"
            plan="Primium Pack"
          />
        </div>
        {/* Price card 3 */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <PriceCard bg="bg-[#112c60]" price="39.99" num="3" plan="Ultimate" />
        </div>
      </div>
    </div>
  );
};

export default Price;
