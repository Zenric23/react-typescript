import React, { useContext, useState } from 'react'
import Button from './ui/Button'
import { FiGithub } from 'react-icons/fi'
import client from '../assets/images/canis.jpg'
import admin from '../assets/images/proj1_dashboard.jpg'
import { DarkModeContext } from '../context/darkModeContext'
import useElementOnScreen from '../hooks/useElementOnScreen'
import { motion } from 'framer-motion'

// https://eugenebadato.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F16zwqt7odl38%2F4535K10nsvaMIGAWbMdKRg%2F4e786af3f8ad2ed6ec93e0e829e662c3%2FScreenshot_7.png&w=1920&q=75

interface Project {
  id: number,
  image: string,
  dashboard: string,
  title: string,
  desc: string,
  technologies: string[],
  thumbnail: string,
  github: string
}

const featuredProjects: Project[] = [
  {
    id: 1,
    image: client,
    dashboard: admin,
    title: 'King Canis Pet Supplies',
    desc: "Is an E-commerce platform for Pet's food, accessories and other things for pets. was built for King Canis Pet Supplies based in Kidapwan City, Cotabato, Philippines",
    technologies: ['Mongo DB', 'React JS', 'Node JS', 'Tailwind CSS'],
    thumbnail: 'https://kingcanis.com',
    github: 'https://github.com/Zenric23/KING_CANIS'
  },
]

const getStyle = (img: string) => {
  const style = {
    color: 'auto',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  return style
}

const FeaturedProject = () => {

  const[showAdminImg, setShowAdminImg] = useState(false)
  const {dark} = useContext(DarkModeContext) as DarkModeContextType
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.2
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

  const projectItemVariants = {
    hidden: {
      opacity: 0,
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.5,
        type: 'spring',
        stiffness: 100
      }
    },
  }
  
  return (
    <div id='projects' ref={containerRef}>
      <motion.div
        className='mb-36'
        variants={headerVariants}
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <h3           
          className="text-title mb-4 dark:text-gray-200"
        >
            recent projects
        </h3>
        <div className="text-indigo-600 dark:text-indigo-500 text-xl font-bold">_what i have developed?</div>
      </motion.div>
      <div className="grid gap-40">
        {
          featuredProjects.map(item=> (
            <motion.div 
              key={item.id}
              variants={projectItemVariants}
              animate={isVisible ? 'visible' : 'hidden'}
              className={`grid md:grid-cols-3 gap-10  project-image-card relative ${dark ? 'after:bg-gray-900' : 'after:bg-white'}`}
            >
              <div 
                className="col-span-2 z-10 h-full lg:h-[350px] rounded-xl relative transition duration-300 ease-in-out hover:scale-105 shadow-lg" 
                style={getStyle(item.image)}
                onMouseOver={()=>setShowAdminImg(true)}
                onMouseLeave={()=>setShowAdminImg(false)}
              >
                <img 
                  src={item.dashboard} alt="" 
                  className={`rounded-xl h-full w-full border transition-all duration-300 ease-in-out ${showAdminImg ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                />
              </div>
              <div className='z-10'>
                <h2 className="text-2xl font-extrabold text-gray-700 mb-2.5 dark:text-gray-100">
                  {item.title}
                </h2>
                <p className="text-gray-700 font-medium leading-relaxed text-justify dark:text-gray-400">
                  {item.desc} 
                </p>
                <div className="flex flex-wrap mt-6 gap-4">
                  {
                    item.technologies.map(tech=> (
                      <span key={tech} className="tech-badge shadow-md ">{tech}</span>
                    ))
                  }
                </div>
                <div className="flex gap-6 mt-10">
                  <Button withTarget link={item.thumbnail}>take a look</Button>
                  <a href={item.github} target="_blank" className="icon">
                    <span>
                      <FiGithub />
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default FeaturedProject