// A circle that fades in and scales up

// A square that rotates on load

// A rectangle that slides in from the left

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const BasicTasks = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, scale: { type: "spring" } }}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#ff6699",
          //   margin: "100px auto",
          borderRadius: "50%",
        }}
      />

      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#3366ff",
          marginTop: 20,
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 200,
          damping: 20,
          bounce: 0.3,
        }}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#ff6699",
          //   margin: "100px auto",
          //   borderRadius: "50%",
        }}
      />

      <button onClick={() => setShow(!show)}>Toggle</button>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            style={{
              width: 200,
              height: 200,
              background: "#00cc99",
              marginTop: 20,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default BasicTasks;
