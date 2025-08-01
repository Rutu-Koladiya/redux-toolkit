// Tasks:
// Animate sections on scroll (fade in + translate).

// Pin a section while the user scrolls through it.

// Animate a horizontal scrolling gallery using vertical scroll.

// Parallax background effect using multiple useTransform or GSAP layers.

// Create a scroll-based page progress bar at the top of the screen.

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const BasicLevel2 = () => {
  const pinRef = useRef();
  const pin1Ref = useRef();
  const pin2Ref = useRef();
  const horizontalWrapperRef = useRef();
  const horizontalSectionRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinRef.current,
        start: "top top", // pin starts when top of trigger reaches top of viewport
        end: "+=500",
        pin: true,
        scrub: true,
        markers: true,
      },
    });

    tl.from(pin1Ref.current, {
      opacity: 0,
      y: 200,
      x: 800,
      rotate: 360,
      duration: 0.5,
    });

    tl.from(
      pin2Ref.current,
      {
        opacity: 0,
        y: 200,
        x: -800,
        rotate: 360,
        duration: 0.5,
      },
      "<0.1"
    );

    gsap.to(horizontalWrapperRef.current, {
      xPercent: -((6 - 1) * 100), // -500 for 6 items
      ease: "none",
      scrollTrigger: {
        trigger: horizontalSectionRef.current,
        start: "top top",
        end: () => "+=" + window.innerWidth * (6 - 1),
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // ScrollTrigger.create({
    //   trigger: pinRef.current,
    //   start: "top top", // pin starts when top of trigger reaches top of viewport
    //   end: "+=500",
    //   pin: true,
    //   markers: true,
    // });
  }, []);
  return (
    <div>
      <section className="h-screen bg-blue-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Section 1</h1>
      </section>

      <section
        ref={pinRef}
        className="h-screen bg-purple-300 flex flex-row items-center justify-center gap-10"
      >
        <h1 ref={pin1Ref} className="pin1 text-4xl font-bold">
          Pinned
        </h1>
        <h1 ref={pin2Ref} className="pin2 text-4xl font-bold">
          Section
        </h1>
      </section>

      <section
        className="horizontal-scroll-section h-screen relative overflow-hidden bg-red-50"
        ref={horizontalSectionRef}
      >
        <div
          className="horizontal-wrapper flex h-full"
          style={{ width: `${6 * 100}vw` }}
          ref={horizontalWrapperRef}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="horizontal-item flex flex-none w-screen items-center justify-center bg-[#eee] border-r-2"
            >
              Item {i + 1}
            </div>
          ))}
        </div>
      </section>

      <section className="h-screen bg-pink-300 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Section 3</h1>
      </section>
    </div>
  );
};

export default BasicLevel2;
