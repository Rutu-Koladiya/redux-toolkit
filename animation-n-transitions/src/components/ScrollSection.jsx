// radial-gradient(140% 190% at 117.54% 131.12%, #f0fcff 0%, #9bedff 25.52%, #98ecff 42.71%, #5be1ff 60.94%, #00bae2 94.79%);

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // latest 2025 default
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 2]);

  return (
    <section className="h-[200vh] bg-gray-100 p-10">
      <div className="h-[150vh]" /> {/* Spacer */}
      <motion.div
        ref={ref}
        style={{ y, opacity }}
        className="bg-blue-500 text-white p-10 rounded-xl"
      >
        <h2 className="text-3xl font-bold">Scroll Activated Animation</h2>
        <p>
          This content fades and slides in on scroll using useScroll +
          useTransform.
        </p>
      </motion.div>
      <motion.div
        layout
        style={{ scale, y }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-4"
      >
        <motion.h1 layout>Scroll + Layout Animation</motion.h1>
      </motion.div>
      <div className="h-[150vh]" /> {/* Spacer */}
    </section>
  );
};

export default ScrollSection;
