import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { services } from "@/data/dummyData";

const ServiceSection = () => {
  return (
    <div className="bg-black/[0.96] mx-auto md:px-6 pt-18 md:pt-0 text-center">
      <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent lg:text-4xl xl:text-5xl">
        Our Services
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-base font-normal text-neutral-300">
        We provide end-to-end real estate solutions from buying and selling to
        management, loans, and documentation.
      </p>
      <HoverEffect items={services} className="max-w-6xl mx-auto px-8" />
    </div>
  );
};

export default ServiceSection;
