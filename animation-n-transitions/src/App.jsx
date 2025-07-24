import { motion, useScroll, AnimatePresence } from "motion/react";
import { useState } from "react";
import Layout from "./components/Layout";
import ScrollSection from "./components/ScrollSection";

function App() {
  // const [isVisible, setIsVisible] = useState(false);
  // const { scrollYProgress } = useScroll();

  // const boxVariants = {
  //   rest: { scale: 1, backgroundColor: "#f59e0b" },
  //   hover: { scale: 1.1, backgroundColor: "#34d399" },
  //   tap: { scale: 0.95, rotate: 2 },
  // };

  // const parentVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.3,
  //     },
  //   },
  // };

  // const childVariants = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: { y: 0, opacity: 1 },
  // };

  // const itemVariants = {
  //   visible: (i) => ({
  //     opacity: 1,
  //     x: i * 20,
  //     transition: { delay: i * 0.1 },
  //   }),
  //   hidden: { opacity: 0, x: 0 },
  // };

  // const cardVariants = {
  //   hidden: { scale: 0.8, opacity: 0 },
  //   visible: {
  //     scale: 1,
  //     opacity: 1,
  //     transition: { type: "spring", duration: 0.5 },
  //   },
  //   hover: { scale: 1.05 },
  //   tap: { scale: 0.95 },
  //   exit: { scale: 0.8, opacity: 0 },
  // };

  return (
    <div className="text-center font-mono">
      {/* <Layout /> */}
      <ScrollSection />
      {/* basic */}
      {/* <motion.div
        className="w-[200px] h-[200px] bg-amber-600 border"
        initial={{
          x: 0,
          opacity: 0,
          y: 0,
          rotate: 0,
        }}
        animate={{
          y: 50,
          x: 1000,
          opacity: 1,
          rotate: 360,
        }}
          exit={{
          opacity: 0}}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
          ease: "anticipate",
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
      />*/}

      {/* keyfrmaes- like ek bad ek */}
      {/* <motion.div
        className="w-[200px] h-[200px] bg-amber-600 border"
        // initial={{
        //   x: 0,
        //   y: 0,
        // }}
        // it's like x-0 y-0 x chla gya 800 pe but still y-0 x is 800 and y chla gya 300 pe etc..
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotate: [0, 30, 180, 360, 0],
        }}
        transition={{
          duration: 3,
          delay: 1,
          ease: "anticipate"
        }}
      /> */}

      {/* hover, tap */}
      {/* <motion.div
        className="w-[200px] h-[200px] bg-amber-600 border"
        whileHover={{
          backgroundColor: "green",
        }}
        whileTap={{
          scale: 0.8,
        }}
        // Animates when the element gets keyboard focus (e.g. Tab).
        whileFocus={{
          scale: 1.1,
          boxShadow: "0 0 0 3px rgba(0, 255, 0, 0.6)",
        }}
      /> */}
      {/* Runs animation when element enters the viewport.- mostly used for scroll based animation */}
      {/* <motion.div
        className="w-[200px] h-[200px] bg-amber-600 border"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }} // optional config
      /> */}

      {/* drag */}
      {/* <motion.div
        className="w-[200px] h-[200px] bg-amber-600 border"
        drag
        whileDrag={{
          scale: 0.8,
          rotate: 180
        }}
        // Defines the bounding box (limits) in which the element can be dragged
        dragConstraints={{
          left: 0,
          top: 0,
          right: 1000,
          bottom: 500,
        }}
        dragElastic={0.2}
        // dragSnapToOrigin // Snaps back to original position on release
        dragDirectionLock={true} // don't allow to go in both direction x,y in one time
        dragMomentum={false} //	If the drag continues after release (default true)
        dragTransition={{
          bounceStiffness: 300,
          bounceDamping: 20,
        }}
      /> */}

      {/* scroll animation */}
      {/* <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="fixed top-0 left-0 right-0 h-2 bg-red-500 origin-left"
      />

      <h2 className="text-4xl font-bold mb-3">Frmaer Motion Scrolltrigger</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        dicta debitis eum porro rem perferendis id laudantium. Architecto,
        voluptas qui soluta eum consequatur id sapiente cupiditate minima aut
        quasi deleniti sint doloremque ullam doloribus ex eius excepturi
        voluptates corrupti necessitatibus, commodi hic dolore aliquam nostrum.
        Eaque, officia ut debitis, minus nihil temporibus inventore facere hic
        et illo, molestias necessitatibus mollitia porro quam? Eveniet,
        cupiditate quas eos alias, exercitationem veniam nam voluptate provident
        natus accusantium ratione dolorum impedit aliquam reiciendis? Sequi
        cupiditate, quos optio quisquam nulla mollitia, sed suscipit dolore modi
        quibusdam, expedita assumenda rerum reiciendis quaerat tempora! Aut,
        laudantium earum autem sint debitis a, voluptatibus corporis illo
        aliquam, cum velit non officiis vel explicabo ex vitae expedita eveniet
        voluptate. Voluptas in iste est nostrum minima asperiores quasi iusto,
        corporis nesciunt fuga esse sunt unde sed inventore excepturi
        consequatur. Veniam rerum dicta debitis voluptatibus, fuga sed modi
        dolorem magni in nulla, odit distinctio veritatis numquam dolores minus
        illum quibusdam unde dolor repellendus laborum quaerat a. Aspernatur
        ratione illum perspiciatis inventore praesentium mollitia perferendis
        placeat, fuga earum tempore facere quas iure fugit animi quidem, quaerat
        quos consectetur vitae reiciendis sequi, odio architecto. Nam ullam
        exercitationem optio. Asperiores facilis dolorem quaerat rem sequi!
        <br /> <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, iure
        nisi! Consectetur sint et fuga sunt illo autem molestias sed eveniet
        atque. Culpa rem esse eius neque nam? Magnam distinctio rerum, obcaecati
        sequi ab molestias nemo necessitatibus ratione beatae in amet cumque
        pariatur similique totam facilis ipsa repellat saepe minima enim,
        quibusdam tenetur. Ratione id corrupti doloribus rem, quis, ipsa,
        excepturi impedit nobis ex minus hic ipsum repudiandae obcaecati eaque
        vero dolores laudantium nam aspernatur consequatur illo explicabo neque
        aliquid. Vel culpa aperiam, hic iste repudiandae quod perferendis dolor
        beatae maxime, odio, distinctio eveniet temporibus saepe consectetur sed
        iusto placeat tenetur. Cum tempora fugit praesentium quo nostrum
        perferendis natus illo quis. Tempora illo, eos expedita numquam alias
        voluptatem dolorem eaque eveniet sequi odio sit natus ipsum. Et beatae
        harum libero error aspernatur sed non id blanditiis dolores tempore,
        dolor ab deleniti! Nulla illum dolore, ipsam odit consequatur eos
        recusandae ex tenetur incidunt iure qui repudiandae quas quod obcaecati
        sunt magnam aliquid quae rerum a. Cum libero, eaque ipsa ipsum voluptas
        tenetur adipisci quibusdam saepe accusamus sint delectus totam
        praesentium ducimus obcaecati minus unde, vitae inventore perferendis
        itaque! Quasi, nulla, expedita ex optio, et asperiores nemo corporis
        ducimus quidem provident voluptatum?
        <br /> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad provident
        modi aliquam perspiciatis ut enim, illum ratione temporibus similique
        sint? Commodi quia, inventore dolorum eaque dolores quidem neque hic
        nisi porro! Temporibus dicta a deleniti vel iste illum voluptates ex
        beatae ad asperiores quibusdam corporis accusamus quo consequuntur amet
        impedit unde, ipsum ratione, laboriosam esse magnam quos minus! Debitis,
        dolorum vero nam soluta, nihil, molestias officiis repellat saepe et
        fugiat itaque. Dolorum nesciunt soluta necessitatibus commodi
        accusantium quasi consequuntur nulla expedita porro omnis, enim officiis
        quisquam illum alias deserunt dolor aspernatur numquam consectetur?
        Doloremque hic consequuntur, quisquam, sunt facere recusandae voluptates
        aliquam rem amet necessitatibus velit similique dolorum voluptate qui id
        ad quo fugiat voluptas, vero autem aut vitae! Soluta nulla ullam
        accusamus repellat, odio dolores. Vel repellat pariatur dignissimos hic
        eius labore temporibus tenetur. Vero, eum aliquid itaque quasi
        asperiores natus repellendus dignissimos vel odit placeat quo illo!
        Obcaecati illum rerum, assumenda alias eius mollitia reiciendis eaque
        deleniti amet earum facere neque fuga blanditiis, consequuntur
        praesentium porro atque aperiam nesciunt iste veniam optio, consectetur
        id. Expedita, aut mollitia. Incidunt optio illum quis deleniti tempora
        fugit temporibus, quibusdam sequi omnis inventore, voluptatum
        necessitatibus vel eius eum vitae. Accusantium, dicta eligendi.
      </p> */}

      {/* variants */}
      {/* <motion.div
        className="w-[200px] h-[200px] border"
        variants={boxVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      />

      <motion.div variants={parentVariants} initial="hidden" animate="visible">
        <motion.div variants={childVariants}>Item 1</motion.div>
        <motion.div variants={childVariants}>Item 2</motion.div>
        <motion.div variants={childVariants}>Item 3</motion.div>
      </motion.div>

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          custom={i}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          Item {i}
        </motion.div>
      ))}

      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>

      {isVisible && (
        <motion.div
          className="w-3xs h-56 bg-red-900"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          exit="exit"
        />
      )} */}
    </div>
  );
}

export default App;
