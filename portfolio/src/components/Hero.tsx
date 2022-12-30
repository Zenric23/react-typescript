import React, { useRef } from 'react'
import Button from './ui/Button'
import pic from '../assets/images/me.webp'
import { motion } from 'framer-motion'
import useElementOnScreen from '../hooks/useElementOnScreen'

const Hero = () => {

  const imageVariants = {
    hidden: {
      x: "-180%",
      rotate: 0
    },
    visible: {
      x: 0,
      rotate: 360, 
      transition: {
        duration: 0.5,
        delay: 0.5,
        
      }
    },
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
        type: 'spring',
        stiffness: 200
      }
    },
  }

  return (
    <div className='h-[90vh] 2xl:h-[80vh] flex gap-20 items-center' id='home'>
      <motion.img 
        src={pic} 
        alt="" 
        className='hidden md:inline w-[300px] 2xl:w-auto h-[300px] 2xl:h-auto hover:rotate-[-20deg] transition duration-300 cursor-pointer' 
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
       className="flex flex-col gap-3"
       variants={textVariants}
       initial="hidden"
       animate="visible"
      >
        <h2 className="text-gray-600 text-2xl font-semibold tracking-widest dark:text-gray-400">Hello, I'm Zenric Clarete.</h2>
        <span className="leading-tight text-4xl lg:text-5xl 2xl:text-6xl font-extrabold drop-shadow-lg text-gray-700 dark:text-gray-200">
          I <span className="text-indigo-600 drop-shadow-lg">Design</span> and <span className="text-indigo-600">Develop</span> things for web.
        </span>
        <div className="mt-10">
          <Button link='#projects'>projects</Button>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero