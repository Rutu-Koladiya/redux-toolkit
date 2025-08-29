"use client";

import { use } from "react";
import data from "@/data/data.json";
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
    <div className="bg-black/[0.96] md:pt-40 py-24 px-6 mx-auto">
      <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent lg:text-4xl xl:text-5xl">
        {toCamelCase(category) || "Explore our properties."}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-center text-base font-normal text-neutral-300 mb-10">
        {categoryDescriptions[category]}
      </p>
      {properties.length === 0 ? (
        <p>No properties found in this category.</p>
      ) : (
        <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[25rem]">
          {properties.map((item) => (
            <BentoGridItem
              key={item.id}
              className={cn("[&>p:text-lg]", item.className)}
            >
              <DirectionAwareHover imageUrl={item.image}>
                <p className="font-bold text-xl">{item.title}</p>
                <p className="font-normal text-sm">{item.price}</p>
              </DirectionAwareHover>
            </BentoGridItem>
          ))}
        </BentoGrid>
      )}
    </div>
  );
};

export default PropertyCategory;
