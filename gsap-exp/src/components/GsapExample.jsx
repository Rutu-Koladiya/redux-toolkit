import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

const GsapExample = () => {
  useEffect(() => {
    // Simple animation: Move a box to the right
    // gsap.to(".box", { x: 300, duration: 2 });
    // gsap.from(".box", { x: 200, opacity: 0, duration: 2 });
    // gsap.fromTo(
    //   ".box",
    //   { x: 0, opacity: 0 },
    //   { x: 300, opacity: 1, duration: 2 }
    // );

    // gsap.to(".box", {
    //   x: 300,
    //   y: 100,
    //   opacity: 0.5,
    //   scale: 1.5,
    //   duration: 3,
    // });

    // const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // tl.to(".box", { x: 300, duration: 2 })
    //   .to(".box", { rotation: 360, duration: 2 })
    //   .to(".box", { opacity: 0, duration: 1 });

    // gsap.to(".box", {
    //   duration: 4,
    //   opacity: 0,
    //   x: 400,
    //   stagger: 0.2, // 0.2s delay between each box
    //   ease: "elastic.inOut"
    // });

    // gsap.to(".box", {
    //   scrollTrigger: {
    //     trigger: ".box", // Element that triggers the animation
    //     start: "top center", // Start when the top of the box reaches the center of the viewport
    //     end: "bottom top", // End when the bottom of the box reaches the top of the viewport
    //     scrub: true, // Makes the animation scrubbable
    //   },
    //   x: 800, // Animate the box on scroll
    // });

    // gsap.fromTo(
    //   ".path",
    //   { strokeDasharray: "1000", strokeDashoffset: "1000" },
    //   {
    //     strokeDashoffset: "0",
    //     duration: 3,
    //     ease: "power1.inOut",
    //   }
    // );

    gsap.to(
      ".box",
      { x: 300, opacity: 0, duration: 2, ease: "elastic.in", stagger:0.2 }
    );
  }, []);

  return (
    <div className="container" style={{ height: "200vh" }}>
      {/* <svg
        height="200"
        width="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="path"
          d="M10,80 C100,10 200,10 190,80 S 100 150 10 80"
          stroke="black"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
      <div
        className="box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
          marginTop: "100px",
        }}
      ></div> */}

      <div
        className="box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
          marginTop: "100px",
        }}
      ></div>
      <div
        className="box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
          marginTop: "100px",
        }}
      ></div>
      <div
        className="box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
          marginTop: "100px",
        }}
      ></div>
      <div
        className="box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
          marginTop: "100px",
        }}
      ></div>
    </div>
  );
};

export default GsapExample;
