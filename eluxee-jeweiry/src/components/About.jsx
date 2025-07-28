import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const marqueeImages = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png",
];

const About = () => {
  const containerRef = useRef();
  const marqueeRef = useRef();

  useGSAP(() => {
    const boxes = marqueeRef.current.querySelectorAll(".marquee-item");
    const totalWidth = boxes.length * 200; // assuming each box is 200px

    gsap.utils.toArray(".product").forEach((product) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: product,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          markers: true,
        },
      });

      tl.fromTo(
        product.querySelector(".product-image"),
        { scale: 1.5 },
        { scale: 1, duration: 0.2, ease: "expo.out" }
      );

      tl.fromTo(
        product.querySelector("h2"),
        { y: 60, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 2, ease: "power2.out" },
        "+=0.6"
      );

      tl.fromTo(
        product.querySelector("button"),
        { y: 50, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.4, ease: "power2.out" },
        "<0.2"
      );

      gsap.to(marqueeRef.current, {
        x: `-=${totalWidth}`,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="h-screen">
      <div className="h-[60vh] grid grid-cols-1 md:grid-cols-2">
        {/* First product */}
        <div className="product relative overflow-hidden">
          <div
            className="product-image absolute inset-0 bg-cover bg-center transition-transform duration-500"
            style={{ backgroundImage: "url('/images/ring.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative z-10 h-full flex flex-col justify-end items-center px-6 pb-8 text-gray-200">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 uppercase">
              Engagement Rings
            </h2>
            <button className="w-max px-5 py-2 bg-white/50 text-[#222831] hover:bg-[#FFBF00] transition-all duration-300">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Second product */}
        <div className="product relative overflow-hidden">
          <div
            className="product-image absolute inset-0 bg-cover bg-center transition-transform duration-500"
            style={{ backgroundImage: "url('/images/earr.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative z-10 h-full flex flex-col justify-end items-center px-6 pb-8 text-gray-200">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 uppercase">
              Diamond Earrings
            </h2>
            <button className="w-max px-5 py-2 bg-white/50 text-[#222831] hover:bg-[#FFBF00] transition-all duration-300">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Marquee section */}
      <div className="marquee-wrapper">
        <div className="marquee-track" ref={marqueeRef}>
          {marqueeImages.concat(marqueeImages).map((img, i) => (
            <div className="marquee-item" key={i}>
              <img src={img} alt={`jewel-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
