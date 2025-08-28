import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

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

const services = [
  {
    title: "Property Buying Assistance",
    description:
      "Expert guidance to find your dream property with ease and transparency.",
    link: "/service/buy-property",
    cta: "Get Assistance",
  },
  {
    title: "Property Selling Assistance",
    description:
      "Professional marketing strategies to help you sell your property faster.",
    link: "/service/sell-property",
    cta: "Sell with Us",
  },
  {
    title: "Property Management",
    description:
      "End-to-end rental, maintenance, and tenant management services.",
    link: "/service/manage-property",
    cta: "Manage Property",
  },
  {
    title: "Home Loans & Financing",
    description: "Expert help with loans, EMI planning, and financing options.",
    link: "/service/loans",
    cta: "Apply Now",
  },
  {
    title: "Legal & Documentation",
    description:
      "Seamless paperwork, agreements, and legal compliance for stress-free deals.",
    link: "/service/legal-documentation",
    cta: "Consult Now",
  },
];
