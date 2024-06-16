import React from "react";
import v_pik from "../Images/v_pik.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Percentage of the component that needs to be visible to trigger the animation
  });

  return (
    <motion.div className="flex lg:flex-row flex-col py-20 lg:py-0 items-center justify-center lg:gap-x-8 h-fit lg:h-screen">
      <motion.div
        className="lg:block hidden"
        ref={ref}
        initial={{ y: 50, opacity: 0 }} // Initial state, offscreen
        animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }} // Animate to view when inView is true
        transition={{ duration: 1 }} // Consistent duration
      >
        <img
          className="w-96 lg:w-[30rem] lg:h-[30rem] object-cover rounded-full"
          alt="img"
          src={v_pik}
        />
      </motion.div>
      <motion.div
        ref={ref}
        className="lg:mt-0 mt-8"
        initial={{ y: 50, opacity: 0 }} // Initial state, offscreen
        animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }} // Animate to view when inView is true
        transition={{ duration: 1 }} // Consistent duration
      >
        <h1 className="text-2xl tracking-widest text-white lg:text-start text-center">
          ABOUT ME
        </h1>
        <p className="w-fit lg:w-[28rem] text-justify text-gray-300 tracking-wide mt-4">
          As a passionate Software Engineering Intern with a solid foundation in
          both frontend and backend development, I am well-versed in
          technologies such as Python, CSS, HTML, JavaScript, and Node.js. My
          enthusiasm for technology and a strong desire to learn drive me to
          seek challenging projects where I can bring fresh perspectives and
          enhance my skills. I am also passionate towards personal branding,
          business and content writing. I am dedicated to applying my software
          development knowledge to deliver innovative solutions and support the
          company's objectives.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
