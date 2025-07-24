import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

// const cards = [
//   { id: 1, title: "Card One", content: "This is card one." },
//   { id: 2, title: "Card Two", content: "This is card two." },
//   { id: 3, title: "Card Three", content: "This is card three." },
// ];

const bentoItems = [
  {
    id: 1,
    title: "Profile",
    description: "User settings and preferences",
    className: "col-span-2 row-span-1",
    bg: "bg-blue-500",
    direction: "left",
  },
  {
    id: 2,
    title: "Analytics",
    description: "Your data visualizations",
    className: "col-span-1 row-span-2",
    bg: "bg-green-500",
    direction: "top",
  },
  {
    id: 3,
    title: "Messages",
    description: "See latest conversations",
    className: "col-span-1 row-span-1",
    bg: "bg-amber-500",
    direction: "bottom",
  },
  {
    id: 4,
    title: "Tasks",
    description: "Pending and completed tasks",
    className: "col-span-1 row-span-1",
    bg: "bg-purple-500",
    direction: "right",
  },
  {
    id: 5,
    title: "Calendar",
    description: "Upcoming events",
    className: "col-span-2 row-span-1",
    bg: "bg-pink-500",
    direction: "top",
  },
];

// Parent Variant for Staggering
const gridVariant = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Direction-Based Variant
const itemVariant = {
  hidden: (direction) => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -100 };
      case "right":
        return { opacity: 0, x: 100 };
      case "top":
        return { opacity: 0, y: -100 };
      case "bottom":
        return { opacity: 0, y: 100 };
      default:
        return { opacity: 0 };
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
  exit: { opacity: 0 },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

const Layout = () => {
  //   const [selected, setSelected] = useState(null);
  //   const [highlighted, setHighlighted] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const selectedItem = bentoItems.find((item) => item.id === selectedId);

  const closeOverlay = () => setSelectedId(null);

  return (
    // <motion.div layoutRoot className="p-8 space-y-4">
    //   <motion.div layout className="grid grid-cols-3 gap-4">
    //     {cards.map((card) => (
    //       <motion.div
    //         key={card.id}
    //         layout
    //         layoutId={`card-${card.id}`}
    //         onClick={() => setSelected(card)}
    //         className="bg-blue-300 p-4 rounded cursor-pointer hover:bg-blue-400"
    //       >
    //         <h2>{card.title}</h2>
    //       </motion.div>
    //     ))}
    //   </motion.div>

    //   <AnimatePresence mode="wait">
    //     {/* mode wait This ensures exit animation fully finishes before the new one enters, giving the smooth morphing transition you expect. */}
    //     {selected && (
    //       <motion.div
    //         key={selected.id}
    //         layoutId={`card-${selected.id}`} // 🔁 Shared transition
    //         className="p-6 bg-white shadow-xl rounded"
    //         initial={{ opacity: 0, y: -20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         exit={{ opacity: 0, y: -20 }}
    //         layout
    //         layoutScroll // 📜 Preserves scroll position during layout animation
    //         layoutDependency={[highlighted]} // 🔧 Will re-calculate layout if highlight changes
    //       >
    //         <h2 className="text-xl font-bold">{selected.title}</h2>
    //         <p className="my-2">{selected.content}</p>

    //         <motion.button
    //           whileTap={{ scale: 0.95 }}
    //           onClick={() => setHighlighted((h) => !h)}
    //           className="mt-4 p-2 bg-yellow-300 rounded"
    //         >
    //           Toggle Highlight
    //         </motion.button>

    //         <button
    //           className="ml-4 text-sm underline"
    //           onClick={() => setSelected(null)}
    //         >
    //           Close
    //         </button>
    //       </motion.div>
    //     )}
    //   </AnimatePresence>
    // </motion.div>

    <div className="min-h-screen p-10 bg-gray-100">
      <motion.div
        variants={gridVariant}
        className="grid grid-cols-3 grid-rows-3 gap-6 auto-rows-[150px]"
        initial="hidden"
        animate="visible"
      >
        {bentoItems.map((item) => (
          <motion.div
            //   The **custom** prop in Framer Motion is used to pass dynamic data to your animation variants.
            custom={item.direction}
            variants={itemVariant}
            layoutId={`card-${item.id}`}
            key={item.id}
            className={`p-6 text-white rounded-xl shadow-lg cursor-pointer ${item.bg} ${item.className}`}
            onClick={() => setSelectedId(item.id)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeOverlay}
            />

            <motion.div
              //   initial={{ opacity: 0, y: 20 }}
              //   animate={{ opacity: 1, y: 0 }}
              //   transition={{
              //     delay: 0.2,
              //     duration: 0.4,
              //     type: "spring",
              //     stiffness: 300,
              //     damping: 30,
              //   }}
              //   layoutId={`card-${selectedItem.id}`}
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`fixed top-1/2 left-1/2 z-40 w-[90vw] max-w-xl p-10 text-white rounded-xl shadow-2xl transform -translate-x-1/2 -translate-y-1/2 ${selectedItem.bg}`}
              //   onClick={(e) => e.stopPropagation()} // Prevent overlay close
            >
              <motion.h2 className="text-2xl font-bold" variants={item}>
                {selectedItem.title}
              </motion.h2>
              <motion.p className="mt-4 text-base" variants={item}>
                {selectedItem.description}
              </motion.p>
              <motion.p className="mt-2 text-sm opacity-80" variants={item}>
                This is an expanded detailed view for {selectedItem.title}.
              </motion.p>
              <motion.button
                className="mt-6 bg-white text-black px-4 py-2 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeOverlay}
              >
                Close
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
