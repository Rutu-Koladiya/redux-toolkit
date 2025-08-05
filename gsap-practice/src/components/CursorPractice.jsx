import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Cursor = () => {
  useGSAP(() => {
    const cursor = document.querySelector(".cursor");
    const main = document.querySelector(".main");

    const moveCursor = (e) => {
      console.log(e);

      gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const addHoverEffect = () => {
      gsap.to(cursor, { scale: 1.8, duration: 0.2 });
    };

    const removeHoverEffect = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    };

    const addClickEffect = () => {
      gsap.to(cursor, { scale: 0.7, duration: 0.1 });
      setTimeout(() => {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      }, 100);
    };

    main.addEventListener("mousemove", moveCursor);
    main.addEventListener("mousedown", addClickEffect);

    const interactiveEls = main.querySelectorAll(
      "a, button, input, textarea, .cursor-hover"
    );

    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      main.removeEventListener("mousemove", moveCursor);
      main.removeEventListener("mousedown", addClickEffect);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);
  return (
    <div className="main relative w-screen h-screen cursor-none">
      <div className="cursor w-8 h-8 bg-black rounded-full fixed pointer-events-none z-50"></div>

      <div>
        <button className="cursor-hover px-4 py-2 bg-blue-500 text-white rounded">
          Click Me
        </button>
        <a href="#" className="cursor-hover underline">
          Visit
        </a>
      </div>
    </div>
  );
};

export default Cursor;
