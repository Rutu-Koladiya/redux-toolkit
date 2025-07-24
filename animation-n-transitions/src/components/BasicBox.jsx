import { motion } from "motion/react";

const BasicBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        rotateX: 360,
      }}
      style={{
        width: 200,
        height: 200,
        backgroundColor: "#ff6699",
        // margin: "100px auto",
        padding: "2rem",
        borderRadius: 16,
        textAlign: "center"
      }}
    >
      Hello Motion
    </motion.div>
  );
};

export default BasicBox;
