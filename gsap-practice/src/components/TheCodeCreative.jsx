import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TheCodeCreative = () => {
  // we don't have to write cleanup function in usegsap like useffect
  useGSAP(
    () => {
      gsap.to(".future", {
        duration: 2,
        // text: "Dolariya N. Rutu"
        text: {
          value: "Dolariya N. Rutu",
          delimiter: "",
          newClass: "end",
        },
        // oldClass: "start",
        ease: "none",
      });

      const menuItems = document.querySelectorAll(".menu-item");

      menuItems.forEach((menuItem, idx) => {
        menuItem.addEventListener("click", () => {
          gsap.to(window, {
            duration: 1,
            // scrollTo: "#section-" + (idx + 1),
            scrollTo: { y: "#section-" + (idx + 1), autoKill: true },
          });
        });
      });
    }
    //  {revertOnUpdate, dependencies, scope} can pass this 3 config properties
  );
  return (
    <div>
      {/* <h1 className="future">Rutu R. Koladiya</h1> */}

      <nav className="fixed z-50 top-[20%] right-[10%] flex flex-col">
        <a className="menu-item cursor-pointer">01</a>
        <a className="menu-item cursor-pointer">02</a>
        <a className="menu-item cursor-pointer">03</a>
        <a className="menu-item cursor-pointer">04</a>
      </nav>

      <section id="section-1" className="bg-red-200 h-screen"></section>
      <section id="section-2" className="bg-purple-200 h-screen"></section>
      <section id="section-3" className="bg-yellow-200 h-screen"></section>
      <section id="section-4" className="bg-orange-300 h-screen"></section>
    </div>
  );
};

export default TheCodeCreative;
