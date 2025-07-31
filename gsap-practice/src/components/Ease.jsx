import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Ease = () => {
  useGSAP(() => {
    // gsap.defaults({
    //     duration: 2
    // })

    const tl = gsap.timeline()
    tl.to(".box1", {
      x: 800,
      ease: "back",
    });

    tl.to(".box2", {
      x: 800,
      ease: "bounce",
    });

    tl.to(".box3", {
      x: 800,
      ease: "circ",
    });

    tl.to(".box4", {
      x: 800,
      ease: "elastic",
    });

    gsap.to(".box5", {
      x: 800,
      ease: "expo",
    });
    gsap.to(".box6", {
      x: 800,
      ease: "power1",
    });
    gsap.to(".box7", {
      x: 800,
      ease: "power2",
    });
    gsap.to(".box8", {
      x: 800,
      ease: "power3",
    });
    gsap.to(".box9", {
      x: 800,
      ease: "power4",
    });
    gsap.to(".box10", {
      x: 800,
      ease: "sine",
    });
  });
  return (
    <div id="demo" className="relative w-[800px]">
      <h2>GSAP Effects Simple Demo</h2>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="box1 bg-green-300 w-20 h-20"></div>
        <div className="box2 bg-purple-300 w-20 h-20"></div>
        <div className="box3 bg-orange-400 w-20 h-20"></div>
        <div className="box4 bg-green-300 w-20 h-20"></div>
        <div className="box5 bg-purple-300 w-20 h-20"></div>
        <div className="box6 bg-orange-300 w-20 h-20"></div>
        <div className="box7 bg-green-300 w-20 h-20"></div>
        <div className="box8 bg-purple-300 w-20 h-20"></div>
        <div className="box9 bg-orange-300 w-20 h-20"></div>
        <div className="box10 bg-green-300 w-20 h-20"></div>
      </div>
    </div>
  );
};

export default Ease;
