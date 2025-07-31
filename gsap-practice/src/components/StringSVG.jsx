import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const StringSVG = () => {
  const pathRef = useRef();

  useGSAP(() => {
    const handleMouseEnter = (e) => {
      const newPath = `M10 100 Q${e.x} ${e.y} 950 100`;
      console.log(newPath);

      gsap.to(pathRef.current, {
        attr: { d: newPath },
        duration: 1,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(pathRef.current, {
        attr: { d: "M10 100 Q490 100 950 100" },
        duration: 1,
        ease: "elastic.out",
      });
    };
    const svg = document.querySelector("#string");
    svg?.addEventListener("mousemove", handleMouseEnter);
    svg?.addEventListener("mouseleave", handleMouseLeave);

    // return () => {
    //   svg?.removeEventListener("mouseenter", handleMouseEnter);
    // };
  }, []);

  return (
    <div id="string">
      <svg width="1000" height="350">
        <path
          ref={pathRef}
          d="M10 100 Q490 100 950 100"
          stroke="black"
          fill="transparent"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default StringSVG;
