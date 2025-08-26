"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

import forRent from "@/images/for-rent.jpeg";
import luxuryHomes from "@/images/luxury-homes.jpeg";
import commercial from "@/images/commercial-properties.jpeg";
import newProject from "@/images/new-poject.jpeg";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Properties">
          <div className="  text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
            <ProductItem
              title="For Rent"
              href="/properties/for-rent"
              src={forRent}
              description="Find budget-friendly rentals, family apartments, and pool homes for every lifestyle."
            />
            <ProductItem
              title="Luxury Homes"
              href="/properties/luxury-homes"
              src={luxuryHomes}
              description="Discover exclusive villas, penthouses, and high-end residences for modern living."
            />
            <ProductItem
              title="Commercial Properties"
              href="/properties/commercial-properties"
              src={commercial}
              description="Lease or buy offices, retail shops, and premium commercial spaces."
            />
            <ProductItem
              title="New Projects"
              href="/properties/new-projects"
              src={newProject}
              description="Explore upcoming developments, gated communities, and modern housing projects."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/buy-property">
              Property Buying Assistance
            </HoveredLink>
            <HoveredLink href="/sell-property">
              Property Selling Assistance
            </HoveredLink>
            <HoveredLink href="/manage-propery">
              Property Management
            </HoveredLink>
            <HoveredLink href="/loans">Home Loans / Financing Help</HoveredLink>
            <HoveredLink href="/legal-documntation">
              Legal & Documentation
            </HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact-us"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
