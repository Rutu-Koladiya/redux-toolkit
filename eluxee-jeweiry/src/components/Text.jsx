import React, { useRef } from "react";
import ImageInText from "./ImageInText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

const Text = () => {
  const textRef = useRef();
  const containerRef = useRef();

  useGSAP(() => {
    const split = new SplitText(textRef.current, {
      type: "lines",
      linesClass: "split-line",
    });

    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 30%",
        scrub: true,
        // markers: true,
      },
    });

    split.lines.forEach((line) => {
      masterTimeline.from(line, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      const images = line.querySelectorAll(".img-in-text");
      if (images.length > 0) {
        masterTimeline.from(
          images,
          {
            scale: 0.5,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "<-0.2" // start after previous line finishes
        );
      }
    });
  }, []);
  return (
    <div className="h-screen relative" ref={containerRef}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="info absolute z-10 h-4/5 w-4/5 p-4 bg-[#fefbf7] shadow-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <h3
          ref={textRef}
          className="px-4 font-['STIX_Two_Text'] text-xl md:tracking-[0.2em] tracking-wide leading-8"
        >
          JEWELRY IS MORE THAN JUST AN ACCESSORY, IT’S AN EXPRESSION AND{" "}
          <ImageInText /> TIMELESS BEAUTY THAT’S THE REASON WHY EACH PIECE IN
          OUR COLLECTION IS THOUGHTFULLY CURATED AND EXPERTLY CRAFTED USING{" "}
          <ImageInText /> THE HIGHEST QUALITY MATERIALS <ImageInText />
        </h3>
      </div>
    </div>
  );
};

export default Text;
