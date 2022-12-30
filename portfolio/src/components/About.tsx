import React, { useContext } from "react";
import thinking from "../assets/images/thinking.png";
import { GrFacebookOption } from 'react-icons/gr'
import { SiIndeed } from 'react-icons/si'
import { FiGithub } from 'react-icons/fi'
import { DarkModeContext } from "../context/darkModeContext";
import { motion } from 'framer-motion'
import useElementOnScreen from "../hooks/useElementOnScreen";

const About = () => {
  const { dark } = useContext(DarkModeContext) as DarkModeContextType
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.6
  })


  const containerVariants = {
    hidden: {
      x: '200%',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <div
      ref={containerRef}
    >
      <motion.div
        className={`${dark ? 'after:bg-gray-900' : 'after:bg-white'} grid md:grid-cols-3 gap-10 project-image-card relative`} 
        id="about"
        variants={containerVariants}
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl p-10 col-span-2 z-10 shadow-2xl">
          <h3 className="text-title mb-4 dark:text-gray-100">about me</h3>
          <div className="text-indigo-600 dark:text-indigo-500 text-xl font-bold mb-10">
            _who i am?
          </div>
          <p className="text-gray-700 dark:text-gray-400 text-justify font-medium">
            I'm <strong className="dark:text-gray-300">Zenric T. Clarete</strong> from KidapAwan City, Philippines. Currently a fourth year student at Notre Dame of 
            Kidapawan College, taking <strong className="dark:text-gray-300">Bachelor of Information Technology</strong> (BSIT). I love coding actually I'm almost 2 years
            as a self-taught <strong className="dark:text-gray-300">MERN stack</strong> developer and still enjoying learning new things until now. 
            
          </p>
          <p className="text-gray-700 dark:text-gray-400 text-justify font-medium mt-5">
            For now I'm looking for real-word job
            as a Software Developer so that i can adopt the best practices and team-work environment in the actual experience as a employee.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="https://github.com/Zenric23" target='_blank' className="icon">
              <FiGithub />
            </a>
            <a href="https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage&_ga=2.203995094.797627152.1670848456-219345077.1670667454" target="_blank" className="icon">
              <SiIndeed />
            </a>
            <a href="https://www.facebook.com/zenric.clarete" target='_blank' className="icon">
              <GrFacebookOption />
            </a>
          </div>
        </div>
        <img src={thinking} alt="" className="w-[300px] h-[300px] z-10 hidden md:inline" />
      </motion.div>
    </div>
  );
};

export default About;
