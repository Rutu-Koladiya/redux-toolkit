import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerPrep = () => {
  useEffect(() => {
    gsap.to("#box1", {
      opacity: 1,
      rotate: 360,
      duration: 1,
    });

    gsap.to("#box2", {
      opacity: 1,
      rotate: 360,
      duration: 1,
      scrollTrigger: {
        trigger: "#box2",
        scroller: "body",
        markers: true,
        start: "top 80%", // you can tweak these
        end: "bottom 20%",
        scrub: true,
      },
    });
  }, []);
  return (
    <div>
      <div id="page1" className="bg-green-100 h-[1000px] w-full">
        <div
          id="box1"
          className="flex justify-center items-center bg-red-300 w-[300px] h-[300px]"
        ></div>
      </div>
      <div id="page2" className="bg-green-200 h-[800px] w-full">
        <div
          id="box2"
          className="flex justify-center items-center bg-red-300 w-[300px] h-[300px]"
        ></div>
      </div>
      <div id="page2" className="bg-green-200 h-[800px] w-full">
        <div
          id="box2"
          className="flex justify-center items-center bg-red-300 w-[300px] h-[300px]"
        ></div>
      </div>
    </div>
  );
};

export default ScrollTriggerPrep;
