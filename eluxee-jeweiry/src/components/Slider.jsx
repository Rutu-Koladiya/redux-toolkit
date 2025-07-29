import React, { useRef, useState } from "react";
import { gsap } from "gsap";

const SwipeSlider = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const slideWidth = 300; // Adjust based on your card width
  const totalSlides = 5;

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches?.[0]?.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX || e.touches?.[0]?.clientX;
    const diff = x - startX;
    setCurrentX(diff);
    gsap.set(containerRef.current, {
      x: translateX + diff,
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    const threshold = slideWidth / 4;
    const totalDrag = currentX;

    let newTranslate = translateX;

    if (
      totalDrag < -threshold &&
      Math.abs(translateX) < (totalSlides - 1) * slideWidth
    ) {
      newTranslate = translateX - slideWidth;
    } else if (totalDrag > threshold && translateX < 0) {
      newTranslate = translateX + slideWidth;
    }

    setTranslateX(newTranslate);
    setCurrentX(0);

    gsap.to(containerRef.current, {
      x: newTranslate,
      scale: 1.2,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div className="overflow-hidden w-full h-screen relative mx-auto select-none">
      <div
        ref={containerRef}
        className="flex gap-28 lg:gap-42 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          touchAction: "none",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
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
