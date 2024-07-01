"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import CustomerSupport from "./CustomerSupport/CustomerSupport";
import Price from "./Price/Price";
import SupportTeam from "./SupportTeam/SupportTeam";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Company from "./Company/Company";
// ..

const Home = () => {

    useEffect(() => {
      const initAOS = async () => {
        await import("aos");
        AOS.init({
          duration: 1000,
          easing: "ease",
          once: true,
          anchorPlacement: "top-center",
        });
      };

      initAOS();
    }, []);

  return (
    <div>
      <Hero />
      <Features />
      <CustomerSupport />
      <Price />
      <SupportTeam />
      <Company/>
    </div>
  );
};

export default Home;
