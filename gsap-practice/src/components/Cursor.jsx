import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useGSAP(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 25,
        y: e.clientY - 25,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(cursorDot, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
      });
      gsap.to(cursorDot, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
      });
      gsap.to(cursorDot, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
      });
    };

    const handleLinkHover = () => {
      gsap.to(cursor, {
        scale: 1.3,
        rotation: 360,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
      gsap.to(cursorDot, {
        scale: 1.5,
        duration: 0.3,
      });
    };

    const handleLinkLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
      });
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.3,
      });
    };

    const handleClick = () => {
      gsap.to(cursor, {
        scale: 0.8,
        rotation: 180,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
      });
      gsap.to(cursorDot, {
        scale: 0.5,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      });
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleClick);

    // Add hover effects to interactive elements
    const links = document.querySelectorAll("a, button, .menu-item");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleClick);

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor - Donut */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0"
      >
        <div className="relative w-full h-full">
          {/* Donut body */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-500 rounded-full shadow-[10_10px_0px_rgba(139,69,19,0.4)]"></div>
          {/* Donut hole */}
          <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-gradient-to-br from-amber-50 to-orange-100 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-2 border-white"></div>
          {/* Sprinkles */}
          <div className="absolute top-1 w-1 h-1 bg-yellow-300 rounded-full"></div>
          <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-2 left-1 w-1 h-1 bg-green-400 rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-purple-400 rounded-full"></div>
        </div>
      </div>

      {/* Cursor dot - Cupcake */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0"
      >
        <div className="relative w-full h-full">
          {/* Cupcake base */}
          <div className="absolute bottom-0 w-full h-3 bg-gradient-to-t from-orange-600 to-orange-400 rounded-full"></div>
          {/* Cupcake frosting */}
          <div className="absolute top-0 w-full h-2 bg-gradient-to-b from-pink-300 to-pink-200 rounded-full"></div>
          {/* Cherry */}
          <div className="absolute -top-1 left-1/2 w-1 h-1 bg-red-500 rounded-full transform -translate-x-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
