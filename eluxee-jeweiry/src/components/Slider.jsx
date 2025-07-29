import React, { useRef, useState } from "react";
import { gsap } from "gsap";

const SwipeSlider = () => {
  const containerRef = useRef(null);
  const slideWidth = 300; // Adjust if needed
  const totalSlides = 5;

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlide = (direction) => {
    let newSlide = currentSlide;

    if (direction === "next" && currentSlide < totalSlides - 1) {
      newSlide = currentSlide + 1;
    } else if (direction === "prev" && currentSlide >= 0) {
      newSlide = currentSlide - 1;
    }

    setCurrentSlide(newSlide);

    const newTranslateX = -slideWidth * newSlide;

    gsap.to(containerRef.current, {
      x: newTranslateX,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <div className="overflow-hidden w-full h-screen relative flex items-center justify-center select-none">
      {/* Arrow Buttons */}
      <button
        onClick={() => handleSlide("prev")}
        className="absolute left-4 z-10 text-3xl bg-white/80 hover:bg-white px-4 py-2 rounded-full shadow-lg"
      >
        ←
      </button>

      <button
        onClick={() => handleSlide("next")}
        className="absolute right-4 z-10 text-3xl bg-white/80 hover:bg-white px-4 py-2 rounded-full shadow-lg"
      >
        →
      </button>

      {/* Slider Container */}
      <div
        ref={containerRef}
        className="flex gap-28 lg:gap-42"
        style={{ transform: `translateX(0px)` }}
      >
        {[...Array(totalSlides)].map((_, i) => (
          <div
            key={i}
            className="w-60 h-72 lg:w-72 lg:h-96 bg-black shadow-lg flex items-center justify-center text-2xl font-bold text-gray-200"
          >
            Slide {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwipeSlider;
