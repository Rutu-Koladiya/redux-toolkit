import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TextAnimation = () => {
  useGSAP(() => {
    gsap.to("#page2 #scroll", {
      transform: "translateX(-120%)",
      // xPercent: -100,
      scrollTrigger: {
        trigger: "#page2",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: true,
        pin: true,
      },
    });
  }, []);
  return (
    <div>
      <div className="w-full h-screen bg-amber-200" />
      <div
        id="page2"
        className="w-full h-screen overflow-x-hidden bg-amber-200"
      >
        <h1 id="scroll" className="font-semibold text-[34vw] whitespace-nowrap">
          EXPERIENCE
        </h1>
      </div>
      <div className="w-full h-screen  bg-amber-200" />
    </div>
  );
};

export default TextAnimation;
