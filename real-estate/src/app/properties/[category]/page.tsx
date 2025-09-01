"use client";

import { use } from "react";
import data from "@/data/propertiesData.json";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { notFound } from "next/navigation";

interface Property {
  id: number;
  title: string;
  type: string;
  price: string;
  location: string;
  description: string;
  image: string;
  status: string;
  className: string;
}

const toCamelCase = (str: string) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const categoryDescriptions: Record<string, string> = {
  "for-rent":
    "Browse affordable and premium rental apartments, homes, and villas.",
  "luxury-homes":
    "Discover elegant villas, penthouses, and upscale residences.",
  commercial:
    "Find office spaces, co-working setups, and retail shops for your business.",
  "new-projects":
    "Explore upcoming projects and modern developments with future-ready amenities.",
};

const PropertyCategory = ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = use(params);

  if (!category) return notFound();

  const properties = (data.propertieDetails as Property[]).filter(
    (property) => property.type === category
  );

  return (
    <div className="bg-black/[0.96] md:pt-40 py-24 md:px-6 px-2 mx-auto">
      <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent lg:text-4xl xl:text-5xl">
        {toCamelCase(category) || "Explore our properties."}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-center text-base font-normal text-neutral-300 mb-10">
        {categoryDescriptions[category]}
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search by location..."
            className="w-full pr-10 pl-4 py-1 md:py-2 text-left rounded-lg border border-neutral-700 bg-black text-white focus:ring-1 focus:ring-gray-500 outline-none transition-all duration-200"
          />
          <svg
            className="absolute right-3 md:top-3 top-2 h-5 w-5 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="relative w-full md:w-48">
          <select className="w-full px-4 py-1 md:py-2 pr-10 rounded-lg text-white border border-neutral-700 bg-black appearance-none outline-none focus:ring-1 focus:ring-gray-500 transition-all duration-200">
            <option value="">All Status</option>
            <option value="Available">Available</option>
            <option value="Sold">Sold</option>
            <option value="Pre-Launch">Pre-Launch</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-400">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {properties.length === 0 ? (
        <p>No properties found in this category.</p>
      ) : (
        <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[25rem]">
          {properties.map((item) => (
            <BentoGridItem
              key={item.id}
              className={cn("[&>p:text-lg]", item.className)}
            >
              <DirectionAwareHover imageUrl={item.image} alt={item.title}>
                <p className="font-bold text-xl">{item.title}</p>
                <p className="font-normal text-sm">{item.price}</p>
                <p className="text-sm text-neutral-400">{item.location}</p>
                <p className="text-sm text-neutral-400 line-clamp-2 md:line-clamp-none">
                  {item.description}
                </p>

                <span
                  className={cn(
                    "inline-block mt-2 px-3 py-1 text-xs rounded-full",
                    item.status === "Available" && "bg-green-600/45 text-white",
                    item.status === "Sold" && "bg-red-600/45 text-white",
                    (item.status === "Pre-Launch" ||
                      item.status === "Coming Soon") &&
                      "bg-yellow-500/45 text-black"
                  )}
                >
                  {item.status}
                </span>
              </DirectionAwareHover>
            </BentoGridItem>
          ))}
        </BentoGrid>
      )}
    </div>
  );
};

export default PropertyCategory;
