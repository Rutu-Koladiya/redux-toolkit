import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerEffect({
  name: "fade",
  effect: (targets, config) => {
    return gsap.to(targets, { duration: config.duration, y: 100, opacity: 0 });
  },
  defaults: { duration: 1 },
  extendTimeline: true,
});

const RegisterEffects = () => {
  useGSAP(() => {
    // also can  use in timeline --> with extendTimeline: true
    // let tl = gsap.timeline();
    // tl.fade(".box", { duration: 3 })
    //   .fade(".box2", { duration: 1 }, "+=2")
    //   .to(".box3", { x: 100 });

    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
      box.addEventListener("mouseenter", function () {
        gsap.effects.fade(this);
      });
    });
  }, []);
  return (
    <div id="demo" className="relative w-[800px]">
      <h2>GSAP Effects Simple Demo</h2>
      <div className="flex justify-center items-center gap-2">
        <div className="box bg-green-300 w-20 h-20"></div>
        <div className="box bg-purple-300 w-20 h-20"></div>
        <div className="box bg-orange-400 w-20 h-20"></div>
        <div className="box bg-green-300 w-20 h-20"></div>
        <div className="box bg-purple-300 w-20 h-20"></div>
        <div className="box bg-orange-300 w-20 h-20"></div>
        <div className="box bg-green-300 w-20 h-20"></div>
        <div className="box bg-purple-300 w-20 h-20"></div>
      </div>
    </div>
  );
};

export default RegisterEffects;
