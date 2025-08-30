import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";

const HerSection = () => {
  return (
    <div className="relative flex h-[35rem] md:h-[42rem] xl:h-[47rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased justify-start md:items-center md:justify-center">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />
      <div className="flex flex-col items-center justify-center mt-36 md:mt-16">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent lg:text-6xl xl:text-7xl">
          Find Your Dream Home Today
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-base font-normal text-neutral-300">
          Discover the finest properties for rent, luxury homes, and new
          projects tailored to your lifestyle and aspirations. Whether buying,
          selling, or renting we make real estate simple, transparent, reliable,
          and hassle-free.
        </p>

        <div className="md:mt-8 mt-4 w-full max-w-md md:max-w-2xl mx-auto">
          <div className="flex items-center bg-white dark:bg-neutral-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-neutral-700">
            <input
              type="text"
              placeholder="Search by city, area, or project..."
              className="flex-grow px-4 py-2 text-sm md:text-base text-black dark:text-white bg-transparent outline-none"
            />
            <button
              className="px-5 py-2 bg-teal-500 text-white font-medium rounded-r-xl hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1"
              aria-label="search"
            >
              Search
            </button>
          </div>
        </div>

        <div className="mt-4">
          <Link href={"/properties/for-rent"}>
            <Button
              borderRadius="1.2rem"
              className="bg-white dark:bg-[#171717] text-black dark:text-[#ededed] border-neutral-200 dark:border-slate-800"
              aria-label="Explore Properties"
            >
              Explore Properties
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HerSection;
