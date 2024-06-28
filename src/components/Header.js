import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-[#10101a] w-full left-0 right-0 top-0 fixed z-50 border-white flex justify-between lg:justify-center gap-x-20 items-center px-5  py-5">
        <motion.h1
          className="font-bold text-3xl text-white tracking-wider cursor-pointer"
          whileHover={{
            scale: 1.05,
            rotate: "-5deg",
          }}
          onClick={scrollToTop}
        >
          Portfo<span className="text-[#2fbf71]">lio</span>
        </motion.h1>
        <ul className="hidden lg:flex font-semibold text-white">
          <ScrollLink to="about" smooth={true} duration={500}>
            <motion.li
              className="cursor-pointer py-2 px-5 tracking-wider"
              whileHover={{
                backgroundColor: "#2fbf71",
              }}
            >
              About
            </motion.li>
          </ScrollLink>
          <ScrollLink to="learning" smooth={true} duration={500}>
            <motion.li
              className="cursor-pointer py-2 px-5 tracking-wider"
              whileHover={{
                backgroundColor: "#2fbf71",
              }}
            >
              Learning Experience
            </motion.li>
          </ScrollLink>

          <ScrollLink to="skills" smooth={true} duration={500}>
            <motion.li
              className="cursor-pointer py-2 px-5 tracking-wider"
              whileHover={{
                backgroundColor: "#2fbf71",
              }}
            >
              Skills & Abilities
            </motion.li>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500}>
            <motion.li
              className="cursor-pointer py-2 px-5 tracking-wider"
              whileHover={{
                backgroundColor: "#2fbf71",
              }}
            >
              Projects
            </motion.li>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <motion.li
              className="cursor-pointer py-2 px-5 tracking-wider"
              whileHover={{
                backgroundColor: "#2fbf71",
              }}
            >
              Contact
            </motion.li>
          </ScrollLink>
        </ul>
        <FontAwesomeIcon
          className="lg:hidden w-5 h-8 text-white"
          icon={menuOpen ? faXmark : faBars}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              y: -1000,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            exit={{
              y: -1000,
            }}
            className="grid place-content-center fixed top-0 left-0 z-20 h-screen w-full bg-[#10101a]  lg:hidden"
          >
            <ul className="border-black text-center text-2xl text-gray-300 font-semibold">
              <li className="px-4 py-2">
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </ScrollLink>
              </li>
              <li className="px-4 py-2">
                <ScrollLink
                  to="learning"
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                >
                  Learning Experience
                </ScrollLink>
              </li>

              <li className="px-4 py-2">
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                >
                  Skills
                </ScrollLink>
              </li>
              <li className="px-4 py-2">
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </ScrollLink>
              </li>
              <li className="px-4 py-2">
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
