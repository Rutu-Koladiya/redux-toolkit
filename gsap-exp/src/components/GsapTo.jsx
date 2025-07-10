import gsap from "gsap";
import { useEffect } from "react";

const GsapTo = () => {
  useEffect(() => {
    gsap.to(".box", {
      // x: 300,
      borderRadius: "100%",
      repeat: -1,
      yoyoEase: "power2.inOut",
      // yoyo: false,
      // keyframes: [{x:100, duration:1}, {y:100, duration:0.5}],
      // x: "random(-100, 100, 5)",
      x: "+=" + 50,
      duration: 1,
      rotate: 360,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <div className="container" style={{ height: "200vh" }}>
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

export default GsapTo;
