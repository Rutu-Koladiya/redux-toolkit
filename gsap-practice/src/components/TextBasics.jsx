import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const TextBasics = () => {
  useGSAP(() => {
    gsap.from(".large", {
      autoAlpha: 0,
      yPercent: 100,
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1] 
    });
  });
  return (
    <div className="h-screen w-full m-auto">
      <h3 className="large text-xl">HELLO, GSAP TUTORIALS!</h3>
    </div>
  );
};

export default TextBasics;
