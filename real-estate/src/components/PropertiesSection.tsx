import React from "react";
import propertiesData from "../data/properties.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import forRentImg from "@/images/for-rent.jpeg";
import luxuryImg from "@/images/luxury-homes.jpeg";
import commercialImg from "@/images/commercial-properties.jpeg";
import newProjectImg from "@/images/new-poject.jpeg";

interface Properties {
  id: number;
  title: string;
  imageKey: string;
  description: string;
  highlights: string[];
  link: string;
  cta: string;
}

const imageMap: Record<string, StaticImageData> = {
  forRent: forRentImg,
  luxury: luxuryImg,
  commercial: commercialImg,
  newProjects: newProjectImg,
};

const PropertiesSection = () => {
  return (
    <div className="bg-black/[0.96] md:pt-0 py-18 md:px-6 px-2 mx-auto">
      <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent lg:text-4xl xl:text-5xl">
        Explore Our Properties
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-base font-normal text-neutral-300">
        Choose from budget rentals, luxury homes, commercial spaces, and new
        projects designed for modern living. Filter, compare, and find your
        perfect match.
      </p>
      <div className="max-w-6xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {propertiesData.properties.map((property: Properties) => (
          <div key={property.id} className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <Image
                  src={imageMap[property.imageKey]}
                  alt={property.title}
                  width={400}
                  height={400}
                  className="w-[300px] h-[150px] bg-cover rounded-t-3xl"
                />
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {property.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  {property.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 my-3">
                  {property.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                  <div className="flex justify-end w-full mt-4 transform hover:-translate-y-1 transition duration-400">
                    <Link href={`/properties/${property.link}`} className="flex items-center">
                      <span>{property.cta}</span>
                      <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.75 8.75L14.25 12L10.75 15.25"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </Link>
                  </div>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesSection;
