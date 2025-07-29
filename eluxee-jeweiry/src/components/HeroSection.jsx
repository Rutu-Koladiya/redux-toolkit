import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { menuItems } from "../CONSTANTS";
// import { useState } from "react";

const HeroSection = () => {
  //   const [isActive, setIsActive] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".headline", {
      opacity: 0,
      yPercent: 100,
      duration: 0.6,
      ease: "power2.out",
      force3D: true,
      transformOrigin: "top",
    });

    tl.from(
      ".name",
      {
        opacity: 0,
        yPercent: 100,
        duration: 0.6,
        ease: "power2.out",
        force3D: true,
        transformOrigin: "top",
      },
      "<0.5"
    );

    tl.from(
      ".nav-items",
      {
        autoAlpha: 0,
        yPercent: 40,
        duration: 0.6,
        stagger: 0.15,
        ease: "power1.in",
      },
      "<0.3"
    );

    tl.from(
      ".hero-img",
      {
        autoAlpha: 0,
        scale: 1.05,
        duration: 1,
        ease: "linear",
      },
      "<0.4"
    );

    tl.from(
      ".menu",
      {
        autoAlpha: 0,
        scale: 0,
        ease: "back.out(1.7)",
        duration: 0.6,
      },
      ">-0.1"
    );
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#fefbf7] flex flex-col">
      {/* Top Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center flex-1 px-4 pt-6">
        <h2 className="headline text-[18px] md:tracking-[0.3em] tracking-wide font-stix text-[#222831]">
          RADIATE ELEGANCE WITH
        </h2>
        <h1 className="name text-4xl sm:text-5xl lg:text-6xl tracking-widest font-italianno drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)] text-[#222831] mt-2">
          Eluxee Jewelry
        </h1>

        {/* Navbar */}
        <nav className="mt-8 md:mt-10">
          <ul className="stix flex flex-col md:flex-row flex-wrap justify-center gap-1 md:gap-4 text-[#5e5e5e]  tracking-wide">
            {menuItems?.map((menuItem, index) => (
              <li
                key={index}
                // onClick={() => setIsActive(index)}
                className="relative group px-4 md:py-2 rounded-fulltext-[#222831]
                hover:text-[#c8a97e] uppercase"
              >
                <span className="nav-items relative z-10">{menuItem}</span>
                {/* <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-[#D3AF37] to-[#FFBF00] transition-transform duration-300 origin-left
                  ${isActive === index ? "scale-x-100" : "scale-x-0"}
                  group-hover:scale-x-100`}
                ></span> */}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Hero Image */}
      <div className="z-10 relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh]">
        <img
          src="/images/hero.png"
          alt="hero image"
          className="absolute top-0 left-0 hero-img w-full h-full object-cover"
        />
        <span className="menu absolute bottom-4 right-8 xl:right-26 w-[50px] h-[50px] rounded-full bg-[#fefbf7] text-[#fefbf7] flex items-center justify-center font-bold" />
      </div>
    </section>
  );
};

export default HeroSection;
