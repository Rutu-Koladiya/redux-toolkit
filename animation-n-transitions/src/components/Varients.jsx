import { motion } from "motion/react";

const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -100 : 100,
  }),
  visible: { opacity: 1, x: 0 },
};

const Varients = () => {
  return (
    <>
      <motion.div variants={boxVariants} initial="hidden" animate="visible" />

      <motion.div variants={parentVariants} initial="hidden" animate="visible">
        {[...Array(3)].map((_, i) => (
          <motion.div key={i} variants={childVariants}>
            Child {i + 1}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        custom={i}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      />
    </>
  );
};

export default Varients;
