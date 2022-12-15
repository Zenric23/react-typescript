import React, { useContext } from "react";
import thinking from "../assets/images/thinking.png";
import { GrFacebookOption } from 'react-icons/gr'
import { SiIndeed } from 'react-icons/si'
import { FiGithub } from 'react-icons/fi'
import { DarkModeContext } from "../context/darkModeContext";

const About = () => {
  const { dark } = useContext(DarkModeContext) as DarkModeContextType

  return (
    <div className={`${dark ? 'after:bg-gray-800' : 'after:bg-white'} grid md:grid-cols-3 gap-10 project-image-card relative after:bg-white`} id="about">
      <div className="bg-white dark:bg-gray-700 rounded-xl p-10 col-span-2 z-10 shadow-2xl">
        <h3 className="text-title mb-4 dark:text-gray-100">about me</h3>
        <div className="text-indigo-600 text-xl font-bold mb-10">
          _who i am?
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-justify font-medium">
          I'm <strong>Zenric T. Clarete</strong> from KidapAwan City, Philippines. Currently a fourth year student at Notre Dame of 
          Kidapawan College, taking <strong>Bachelor of Information Technology</strong> (BSIT). I love coding actually I'm almost 2 years
          as a self-taught <strong>MERN stack</strong> developer and still enjoying learning new things until now. 
          
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-justify font-medium mt-5">
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
    </div>
  );
};

export default About;
