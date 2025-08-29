import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";

const HerSection = () => {
  return (
    <div className="relative flex h-[30rem] md:h-[42rem] xl:h-[47rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased justify-start md:items-center md:justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
      />
      <div className="flex flex-col items-center justify-center mt-38 md:mt-16">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent lg:text-6xl xl:text-7xl">
          Find Your Dream Home Today
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-base font-normal text-neutral-300">
          Discover the finest properties for rent, luxury homes, and new
          projects tailored to your lifestyle and aspirations. Whether buying,
          selling, or renting we make real estate simple, transparent, reliable,
          and hassle-free.
        </p>
        <div className="mt-4">
          <Link href={"/properties/for-rent"}>
            <Button
              borderRadius="1.2rem"
              className="bg-white dark:bg-[#171717] text-black dark:text-[#ededed] border-neutral-200 dark:border-slate-800"
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
