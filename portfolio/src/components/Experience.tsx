import React from "react";
import { motion } from 'framer-motion'
import useElementOnScreen from "../hooks/useElementOnScreen";

interface Experience {
  company: string,
  position: string,
  desc: string,
  date: string
}

const experiences: Experience[] = [
    {
        company: 'Notre Dame of Kidapawan College',
        desc: `Develop and deploy an E-commerce platform for king Canis Pet Supplies, Kidapawan City as our Capstone Research proposal .`,
        position: 'Fullstack Developer',
        date: '2022'
    },
    {
        company: 'Freelance',
        desc: `Translating Figma desigin into reusable, efficient and readable code using React JS.`,
        position: 'Front-end Developer',
        date: '2022'
    },
]

const Experience = () => {

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  })

  const headerVariants = {
    hidden: {
      x: "-100%"
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    }
  }

  const expContainerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5
      }
    }
  }

  const expItemVariants = {
    hidden: {
      opacity: 0,
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
  }
  
  return (
    <div id="exp" ref={containerRef}>
      <motion.div
        animate={isVisible ? 'visible' : 'hidden'}
        variants={headerVariants}
      >
        <h3 className="text-title mb-4 dark:text-gray-200">experience</h3>
        <div className="text-indigo-600 dark:text-indigo-500 text-xl font-bold mb-20">
          _what i have done?
        </div>
      </motion.div>
      <motion.div 
        className="grid md:grid-cols-2 gap-10 md:gap-20"
        variants={expContainerVariants}
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {
          experiences.map(exp=> (
            <motion.div 
              key={exp.company}
              variants={expItemVariants}
            >
              <h2 className="text-xl text-gray-700 mb-1 font-bold dark:text-gray-400">{exp.company}</h2>
              <div className="text-gray-500 dark:text-gray-500 font-medium">{exp.position}</div>
              <div className="text-gray-500 mt-1 mb-4">{exp.date}</div>
              <p className="text-gray-700 dark:text-gray-400 font-medium text-justify">{exp.desc}</p>
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  );
};

//company
//position

//description

export default Experience;
