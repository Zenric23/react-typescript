import React, { useContext } from "react";
import pic from "../assets/images/me.webp";
import { DarkModeContext } from "../context/darkModeContext";
import useElementOnScreen from "../hooks/useElementOnScreen";
import { motion } from "framer-motion";

const Contact = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.8
  })


  const containerVariants = {
    hidden: {
      x: '-100%',
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
    <div ref={containerRef}>
      <motion.div 
        variants={containerVariants}
        animate={isVisible ? 'visible' : 'hidden'}
        className={`bg-white dark:bg-gray-900 grid md:grid-cols-3 gap-10 relative project-image-card-reverse items-center`} 
        id="contact"
      >
        <img
          src={pic}
          alt=""
          className="h-[340px] w-[340px] hover:rotate-[-20deg] transition duration-300 cursor-pointer z-10 hidden md:inline"
        />
        <div className="p-10 bg-white dark:bg-gray-800 rounded-xl md:col-span-2 shadow-2xl z-10">
          <h3 className="text-title dark:text-gray-100 mb-4">let's work together</h3>
          <div className="text-indigo-600 dark:text-indigo-500 text-xl font-bold mb-10">
            _contact me
          </div>
          <form action="">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="font-medium text-gray-500 dark:text-gray-400 mb-2.5 block"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="block rounded p-2 border-2 w-full bg-gray-100 dark:bg-gray-400 text-gray-700 dark:text-gray-900 font-medium outline-none"
                placeholder="your email"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="font-medium text-gray-500 dark:text-gray-400 mb-2.5 block"
              >
                Message
              </label>
              <textarea
                id="message"
                className="block rounded p-2 border-2 w-full h-[150px] bg-gray-100 dark:bg-gray-400 text-gray-700 dark:text-gray-900  font-medium outline-none"
                placeholder="your message"
              />
              <button className="transition hover:scale-110 heroBtn relative py-2 px-8 font-medium bg-indigo-600 rounded text-white text-lg float-right mt-5 tracking-widest">
                submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
