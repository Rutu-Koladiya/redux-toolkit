import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { menuItems } from "../CONSTANTS";
import { useState } from "react";

const Hero = () => {
  const [isActive, setIsActive] = useState(1);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("h2", {
      autoAlpha: 0,
      yPercent: 100,
      duration: 0.6,
      ease: "power1.out",
      force3D: true,
      transformOrigin: "top",
    });

    tl.from(
      "h1",
      {
        autoAlpha: 0,
        yPercent: 100,
        duration: 0.6,
        ease: "power1.out",
        force3D: true,
        transformOrigin: "top",
      },
      "<0.2" // Waits until 40% of previous is done
    );

    tl.from(
      "ul li",
      {
        opacity: 0,
        yPercent: 50,
        duration: 0.6,
        stagger: 0.05,
        ease: "power1.in",
        force3D: true,
        transformOrigin: "top",
      },
      "<0.15"
    );

    tl.from(
      "img",
      {
        opacity: 0,
        scale: 1.1,
        yPercent: 80,
        duration: 0.6,
        ease: "linear",
        force3D: true,
      },
      "<0.4"
    );

    tl.from(
      "span",
      {
        opacity: 0,
        scale: 0,
        ease: "back.out(1.7)",
        duration: 0.6,
      },
      ">-0.1"
    );
  }, []);

  return (
    <div
      className="min-h-[100vh] py-6 bg-gradient-to-b from-[#faf7f3] to-[#f2e9e1]
"
    >
      <div className="flex flex-col justify-center items-center space-x-0.5 color-black">
        <h2 className="headline text-[18px] text-sm md:tracking-[0.3em] tracking-wide font-stix">
          RADIATE ELEGANCE WITH
        </h2>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-widest font-italianno drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
          Eluxee Jewelry
        </h1>
      </div>
      <nav>
        <ul className="flex flex-col md:flex-row md:justify-around items-center gap-2 md:space-x-0.5 px-4 md:px-28 mt-10 md:mb-10 mb-8 text-[#222831] font-stix tracking-wide">
          {menuItems?.map((menuItem, index) => (
            <li
              key={index}
              onClick={() => setIsActive(index)}
              className={`relative group px-4 py-2 rounded-full transition-all duration-300 cursor-pointer
          ${isActive === index ? "text-[#e0a800]" : "text-[#222831]"}
          hover:text-[#e0a800]`}
            >
              <span className="relative z-10">{menuItem}</span>

              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-[#D3AF37] to-[#FFBF00] transition-transform duration-300 origin-left
            ${isActive === index ? "scale-x-100" : "scale-x-0"}
            group-hover:scale-x-100`}
              ></span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative w-full max-w-dvw aspect-[9/16] md:aspect-[16/9] overflow-hidden rounded-xl shadow-md">
        <img
          src="/images/hero.png"
          alt="hero image"
          loading="eager"
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-4 right-8 w-[50px] h-[50px] rounded-full bg-black">
          -
        </span>
      </div>
    </div>
  );
};

export default Hero;

// | Syntax  | Meaning                                                                |
// | ------- | ---------------------------------------------------------------------- |
// | `<`     | Start at the **same time** as the **previous** animation.              |
// | `> `    | Start **after** the previous animation **finishes**.                   |
// | `<0.2`  | Start **0.2 seconds after** the **start** of the previous animation.   |
// | `>0.2`  | Start **0.2 seconds after** the **end** of the previous animation.     |
// | `>-0.1` | Start **0.1 seconds before** the **previous animation ends**.          |
// | `<-0.1` | Start **0.1 seconds before** the **previous animation starts** (rare). |
