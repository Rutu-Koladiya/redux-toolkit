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
    <div ref={containerRef}>
      <h3
        ref={textRef}
        className="px-4 md:px-28 font-['STIX_Two_Text'] text-xl text-center md:tracking-[0.2em] tracking-wide leading-8"
      >
        JEWELRY IS MORE THAN JUST AN ACCESSORY, IT’S AN EXPRESSION AND{" "}
        <ImageInText /> TIMELESS BEAUTY THAT’S THE REASON WHY EACH PIECE IN OUR
        COLLECTION IS THOUGHTFULLY CURATED AND EXPERTLY CRAFTED USING{" "}
        <ImageInText /> THE HIGHEST QUALITY MATERIALS <ImageInText />
      </h3>
    </div>
  );
};

export default Text;
