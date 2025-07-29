import React, { useRef } from "react";
import ImageInText from "./ImageInText";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const InfoSection = () => {
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
        end: "center 20%",
        scrub: true,
      },
    });

    split.lines.forEach((line) => {
      masterTimeline.from(line, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      const images = line.querySelectorAll(".diamonds");

      if (images.length > 0) {
        masterTimeline.from(
          images,
          {
            scale: 0.3,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.1,
          },
          "<0.1"
        );

        masterTimeline.to(
          images,
          {
            scale: 1.1,
            duration: 1,
            yoyo: true,
            repeat: 1,
            ease: "sine.inOut",
          },
          ">0.2"
        );
      }
    });
  }, []);
  return (
    <div className="h-screen relative" ref={containerRef}>
      <div className="inline-block align-middle w-full h-full overflow-hidden">
        <img src="/images/bg03.jpeg" className="w-full h-full object-contain" />
      </div>
      <div className="info absolute z-10 h-4/5 w-4/5 p-4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <h3
          ref={textRef}
          className="stix text-center px-4 text-3xl tracking-widest"
        >
          JEWELRY IS MORE THAN JUST AN ACCESSORY, IT’S AN EXPRESSION AND{" "}
          <ImageInText src={"/images/diamond1.jpeg"} /> TIMELESS BEAUTY THAT’S
          THE REASON <ImageInText src={"/images/diamond2.jpeg"} /> WHY EACH
          PIECE IN OUR COLLECTION IS THOUGHTFULLY CURATED AND EXPERTLY CRAFTED{" "}
          <ImageInText src={"/images/diamond3.jpeg"} /> USING THE HIGHEST
          QUALITY MATERIALS{" "}
        </h3>
      </div>
    </div>
  );
};

export default InfoSection;
