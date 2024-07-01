import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import FeatureCard from './FeatureCard';
import Icon1 from '@/public/icon1.png'
import Icon2 from '@/public/icon2.png'
import Icon3 from '@/public/icon3.png'
import Icon4 from '@/public/icon4.png'
import Icon5 from '@/public/icon5.png'
import Icon6 from "@/public/icon2.png";

const Features = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* sectionHeading */}
      <SectionHeading
        headingMini="Ideal solution for you"
        headingPrimary="Explor Ultimate features"
      />
      {/* Features start */}
      <div className="pt-[5rem] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]">
        {/* Features cart 1 */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <FeatureCard title="Email Subscription" image={Icon1.src} />
        </div>
        {/* Features cart 2 */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <FeatureCard title="Zooming" image={Icon2.src} />
        </div>
        {/* Features cart 3 */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <FeatureCard title="Security Subscription" image={Icon3.src} />
        </div>
        {/* Features cart 4 */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <FeatureCard title="Settings " image={Icon4.src} />
        </div>
        {/* Features cart 5 */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <FeatureCard title="Shop Subscription" image={Icon5.src} />
        </div>
        {/* Features cart 6 */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <FeatureCard title="Focus Now" image={Icon6.src} />
        </div>
      </div>
    </div>
  );
}

export default Features
