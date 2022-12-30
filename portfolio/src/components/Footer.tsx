import React from 'react'
import { GrFacebookOption } from 'react-icons/gr'
import { SiIndeed } from 'react-icons/si'
import { FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'
import useElementOnScreen from '../hooks/useElementOnScreen'


const Footer = () => {

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.9
  })


  const containerVariants = {
    hidden: {
      y: 40,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <motion.div 
      variants={containerVariants}
      animate={isVisible ? 'visible' : 'hidden'}
      ref={containerRef} 
      className="flex flex-col gap-10 lg:flex-row justify-between items-center pb-20"
    >
      <div className="flex gap-4">
          <a href="https://github.com/Zenric23" target='_blank' className="icon">
            <FiGithub />
          </a>
          <a href="https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage&_ga=2.203995094.797627152.1670848456-219345077.1670667454" target="_blank" className="icon">
            <SiIndeed />
          </a>
          <a className="icon" href="https://www.facebook.com/zenric.clarete" target='_blank'>
            <GrFacebookOption />
          </a>
        </div>
        <span className="text-gray-500 font-medium">Created by @Zenric Clarete</span>
    </motion.div>
  )
}

export default Footer