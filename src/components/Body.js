import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import About from "./About";
import Learning from "./Learning";
import Skills from "./Skills";
import Contact from "./Contact";
import v_pik from "../Images/v_pik.jpg";
import { BrowserRouter } from "react-router-dom";
import Projects from "./Projects";
const Body = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Vaishnavi_resume.pdf";
    link.download = "Vaishnavi_resume.pdf";
    link.click();
  };

  return (
    <div className=" w-full border-red-500 pb-3 lg:p-0 p-5">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      ,
      <motion.div className="w-full text-white lg:mt-0 mt-7 flex lg:flex-row flex-col md:flex-col md:justify-center lg:items-center lg:justify-center h-fit lg:h-screen">
        <motion.div
          className=""
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <h2 className="text-2xl font-semibold my-4">Hello, I am</h2>
          <h1 className="lg:text-[4rem] text-4xl font-bold tracking-wider my-4">
            Vaishnavi Akkanna
          </h1>
          <p className="text-2xl font-semibold my-4">
            I'm Passionate Full-Stack{" "}
            <span className="text-[#2fbf71]">Developer.</span>
          </p>
          <p className="text-gray-300 mt-4 text-justify">
            A passinate software engineer with sound knowledge in frontend and
            backend techs and developments.
          </p>
          <p className="text-gray-300 text-justify">
            {" "}
            An enthusiastic and dedicated computer science engineer to apply my
            tech stack knowledge to solve <br className="lg:block hidden" />{" "}
            societal problems with user friendly and technical solutions
          </p>
          <motion.button
            className="px-5 py-1 mb-20 mt-8 relative rounded-sm text-sm hover:shadow-2xl hover:shadow-green-600/[0.5] transition duration-200 border-2 border-white"
            whileTap={{
              scale: "0.8",
            }}
            whileHover={{
              scale: "0.95",
            }}
            onClick={handleDownload}
          >
            <div className="absolute inset-x-0 h-[2px] mx-auto  -bottom-[2px] shadow-2xl  bg-gradient-to-r from-transparent via-green-400 to-transparent" />
            <span className=" text-white text-lg">Download CV</span>
          </motion.button>
        </motion.div>
        <motion.div
          className="lg:block lg:justify-normal flex justify-center "
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <img
            className=" w-72 h-72 object-cover rounded-full lg:ml-20 lg:mt-0 -mt-8"
            alt="img"
            src={v_pik}
          />
        </motion.div>
      </motion.div>
      <div id="about">
        <About />
      </div>
      <div id="learning">
        <Learning />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Body;
