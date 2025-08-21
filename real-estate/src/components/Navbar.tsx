"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

import forRent from "@/images/for-rent.jpeg";
import luxuryHomes from "@/images/luxury-homes.jpeg"
import commercial from "@/images/commercial-properties.jpeg"
import newProject from "@/images/new-poject.jpeg"

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/wedding-choreography">
              Property Buying Assistance
            </HoveredLink>
            <HoveredLink href="/corporate-events">
              Property Selling Assistance
            </HoveredLink>
            <HoveredLink href="/private-coaching">
              Property Management
            </HoveredLink>
            <HoveredLink href="/studio-rental">
              Home Loans / Financing Help
            </HoveredLink>
            <HoveredLink href="/studio-rental">
              Legal & Documentation
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Properties">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="For Rent"
              href="/for-rent"
              src={forRent}
              description="Spacious rental homes with private pools."
            />
            <ProductItem
              title="Luxury Homes"
              href="/luxury-homes"
              src={luxuryHomes}
              description="Premium villas & luxury residences for sale."
            />
            <ProductItem
              title="Commercial Properties"
              href="/commercial"
              src={commercial}
              description="Offices, shops & commercial spaces to lease."
            />
            <ProductItem
              title="New Projects"
              href="/new-projects"
              src={newProject}
              description="Explore latest upcoming real estate developments."
            />
            {/* <HoveredLink href="/classical">For Sale</HoveredLink> */}
            {/* <HoveredLink href="/luxury-homes">Luxury Homes</HoveredLink>
            <HoveredLink href="/commercial">Commercial Properties</HoveredLink>
            <HoveredLink href="/new-projects">New Projects</HoveredLink> */}
            {/* <HoveredLink href="/competition">Featured Listings</HoveredLink> */}
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact Us"
        ></MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
