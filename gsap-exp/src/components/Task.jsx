import gsap from "gsap";
import { useEffect } from "react";

const Task = () => {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const timeline = gsap.timeline({
      repeat: -1,
      //   yoyo: true,
    });

    timeline
      .to(".round", {
        x: screenWidth - 120,
        duration: 1,
        y: -80,
        scale: 1.5,
        ease: "expo.out",
      })
      .to(".star", {
        x: -screenWidth + 120,
        backgroundColor: "orange",
        duration: 1,
        ease: "power2.inOut",
      })
      .to(
        ".box",
        {
          scale: 1.2,
          rotate: 360,
          duration: 1,
          ease: "bounce.in",
        }
        // 1.5
      );
  }, []);
  return (
    <div
      className="container"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#f9f9f9",
      }}
    >
      {/* Star on right initially */}
      <div
        className="star"
        style={{
          position: "absolute",
          right: 0,
          top: "40%",
          width: "40px",
          height: "40px",
          backgroundColor: "green",
          borderRadius: "20%",
        }}
      ></div>

      {/* Center Box */}
      <div
        className="box"
        style={{
          position: "absolute",
          left: "50%",
          top: "20%",
          transform: "translate(-50%, 0)",
          width: "80px",
          height: "80px",
          backgroundColor: "red",
        }}
      ></div>

      {/* Round on left initially */}
      <div
        className="round"
        style={{
          position: "absolute",
          left: 0,
          top: "40%",
          width: "60px",
          height: "60px",
          backgroundColor: "yellow",
          borderRadius: "100%",
        }}
      ></div>
    </div>
  );
};

export default Task;
