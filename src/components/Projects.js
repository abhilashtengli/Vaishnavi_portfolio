import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.4, // Percentage of the component that needs to be visible to trigger the animation
  });
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ y: 100, opacity: 0 }} // Initial state, offscreen
        animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }} // Animate to view when inView is true
        transition={{ duration: 0.3 }} // Consistent duration
        className=" py-5 pt-24"
      >
        <h1 className="text-3xl tracking-widest text-white text-center">
          PROJECTS
        </h1>
        <motion.div
          className="text-white  lg:mx-32 space-y-7 p-7 bg-[#0e0e13] my-7"
          initial={{
            border: "0.5px solid rgba(47, 191, 113, 0.4)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 2px 30px rgba(47, 191, 113, 0.4)",
            border: "2px solid rgba(47, 191, 113, 0.4)",
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <h2 className="font-semibold text-slate-400">2023</h2>
          <h1 className="text-2xl font-semibold">
            Hospital management system using SQL
          </h1>
          <ul className="text-slate-400">
            <li className="text-justify">
              • Developed a user-friendly Hospital management system application
              featuring a login and registration page, enabling secure
              authentication for users.
            </li>
            <li className="text-justify">
              • Implemented dynamic functionality allowing patients to book
              their appointments, answer questions, and view immediate results
              upon completion, and also can change the consulting time before
              4-5 hours, providing an engaging and interactive experience.
            </li>
            <li className="text-justify">
              • Integrated the backend, the frontend by connecting them using
              flask framework and storing data was done using SQL database,
              leveraging its features to store user data, appointment records,
              and maintain medical history, while also developing an admin
              dashboard to display analytics in a visually appealing graph
              format.
            </li>
          </ul>
          <h2 className="text-slate-400">
            <b className="text-white">Technologies and Frameworks:</b> python,
            flask, XAMPP, HTML, CSS, Oracle Database, JS
          </h2>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Projects;
