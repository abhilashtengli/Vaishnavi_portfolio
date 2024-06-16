import React from "react";
import { education } from "./LearningDate";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Learning = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Percentage of the component that needs to be visible to trigger the animation
  });
  return (
    <>
      <motion.div className="w-full  lg:mt-0 pt-24">
        <motion.h1
          className="text-3xl tracking-widest text-white text-center"
          ref={ref}
          initial={{ y: 100, opacity: 0 }} // Initial state, offscreen
          animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }} // Animate to view when inView is true
          transition={{ duration: 0.3 }} // Consistent duration
        >
          EDUCATION
        </motion.h1>
        <div className="w-full  border-red-500 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  py-10 gap-y-10 place-content-center place-items-center text-white">
          {education.map((edu) => (
            <motion.div
              className="w-full lg:w-[28rem] lg:space-y-5 p-5 shadow-[0_2px_20px_rgba(47,_191,_113,_0.4)] lg:shadow-none bg-[#0e0e13]"
              whileHover={{
                x: -15,
                scale: 1.02,
                boxShadow: "0 2px 30px rgba(47, 191, 113, 0.4)",
                rotate: "-5deg",
                border: "2px solid rgba(47, 191, 113, 0.4)",
              }}
              ref={ref}
              initial={{
                y: 100,
                opacity: 0,
                border: "0.5px solid rgba(47, 191, 113, 0.4)",
              }} // Initial state, offscreen
              animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }} // Animate to view when inView is true
              transition={{ duration: 0.5 }} // Consistent duration
            >
              <h2>{edu.year}</h2>
              <h1 className="text-xl font-bold">{edu.class}</h1>
              <p className="text-gray-300">
                SCORE-<span className="text-[#2fbf71]">{edu.score}</span>
              </p>
              <p>{edu.institute}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Learning;
