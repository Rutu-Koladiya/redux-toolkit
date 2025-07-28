import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const String = () => {
  const lineRef = useRef();
  const pathRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      lineRef.current,
      { strokeDasharray: 200, strokeDashoffset: 200 },
      { strokeDashoffset: 0, duration: 2, ease: "power2.out" }
    );

    const length = pathRef.current.getTotalLength();
    gsap.fromTo(
      pathRef.current,
      { strokeDasharray: length, strokeDashoffset: length },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <>
      <svg width="200" height="100" viewBox="0 0 200 100">
        <line
          ref={lineRef}
          x1="0"
          y1="50"
          x2="200"
          y2="50"
          stroke="black"
          strokeWidth="2"
        />
      </svg>

      <svg viewBox="0 0 200 200" width="300" height="300">
        <path
          ref={pathRef}
          d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
          stroke="black"
          fill="none"
          strokeWidth="2"
        />
      </svg>

      <svg width="500" height="350" viewBox="0 0 300 150">
      <path
        ref={pathRef}
        d="M10 100 Q250 0 490 200"
        stroke="black"
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
    </>
  );
};

export default String;
