// Fade In + Slide Up hero text on page load.

// Animate each letter of a heading (HELLO) with a delay between them.

// Scale a button when hovered using gsap.to.

// Animate an image from opacity 0 to full, and slide from the left.

// Use gsap.timeline() to sequence multiple animations — e.g., header → text → button.

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";

const Basic = () => {
  const btnRef = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    const headingSplit = new SplitText(".title", { type: "chars, words" });

    // const btn = document.querySelector(".btn");
    tl.from(headingSplit.chars, {
      y: -200,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
    });

    tl.from("img", {
      x: -200,
      opacity: 0,
      duration: 1,
    });

    const addHoverEffect = () => {
      gsap.to(".btn", {
        scale: 0.8,
        borderRadius: 10,
        fontSize: 20,
        backgroundColor: "red",
        duration: 0.4,
        ease: "back.in",
      });
    };

    const removeHoverEffect = () => {
      gsap.to(".btn", {
        scale: 1,
        borderRadius: 0,
        duration: 0.01,
        backgroundColor: "initial",
      });
    };

    btnRef.current.addEventListener("mouseenter", addHoverEffect);
    btnRef.current.addEventListener("mouseleave", removeHoverEffect);
  }, []);
  return (
    <div className="main mt-4 mx-8">
      <nav>
        <h1 className="title text-4xl">Hello</h1>
      </nav>

      <button ref={btnRef} className="btn border-2 border-black p-2 text-lg font-bold">
        Text
      </button>

      <img src="https://source.unsplash.com/random/800x400" alt="Random" />
    </div>
  );
};

export default Basic;
