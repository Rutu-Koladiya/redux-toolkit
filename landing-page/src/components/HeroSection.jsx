import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { customerLogo, navItems } from "../CONSTANTS";

const HeroSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("nav h1, nav h4, nav button", {
      y: -40,
      opacity: 0,
      delay: 1,
      duration: 1,
      stagger: 0.15,
    });

    tl.from(".info h1", {
      x: -300,
      opacity: 0,
      duration: 0.5,
    });

    tl.from(".info p", {
      x: -100,
      opacity: 0,
      duration: 0.4,
    });
  }, []);
  return (
    <section className="h-screen bg-[#fffff8] text-[#050301]">
      <nav className="flex justify-between items-center py-8 px-12 md:px-16 ">
        <h1 className="md:text-3xl text-2xl font-bold">
          <i className="ri-gemini-fill md:ri-lg inline-block rotate-45" /> Flowy
        </h1>
        <div className="list flex justify-between items-center gap-4 md:gap-10 bg-red">
          {navItems?.map((item) => (
            <h4 className="text-base md:text-lg font-semibold" key={item}>
              {item}
            </h4>
          ))}
          <button className="py-3 px-5 border text-base md:text-lg rounded-lg font-semibold">
            Request a demo
          </button>
        </div>
      </nav>

      <div className="main h-[83vh] flex md:px-16 px-12">
        <div className="info w-[44%] h-full flex flex-col gap-10">
          <h1 className="md:text-7xl text-5xl leading-14 md:leading-22">
            Navigating the digital landscape for success
          </h1>
          <p className="md:text-2xl text-lg w-[95%]">
            We help businesses navigate the digital world with tailored
            marketing solutions that increase engagement, improve reach, and
            fuel long-term growth across web, social, and search platforms.
          </p>
          <button className="md:w-[40%] w-[80%] !bg-[#050301] !text-[#fffff8] rounded-lg py-4 md:text-xl text-base font-semibold">
            Book a consulatation
          </button>
        </div>
        <div className="img h-full w-[56%] flex justify-end">
          <img src="/images/hero.jpg" alt="hero image" />
        </div>
      </div>

      <div className="customers flex md:flex-row flex-col justify-between items-center py-8 px-24">
        {customerLogo.map((src) => (
          <img src={src} key={src} className="h-16 object-cover" />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
