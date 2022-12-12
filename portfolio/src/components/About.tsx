import React from "react";
import thinking from "../assets/images/thinking.png";
import { GrFacebookOption } from 'react-icons/gr'
import { SiIndeed } from 'react-icons/si'
import { FiGithub } from 'react-icons/fi'

const About = () => {
  return (
    <div className="grid md:grid-cols-3 gap-10 project-image-card relative after:bg-white" id="about">
      <div className="bg-white rounded-xl p-10 col-span-2 z-10 shadow-2xl">
        <h3 className="text-title mb-4">about me</h3>
        <div className="text-indigo-600 text-xl font-bold mb-10">
          _who i am?
        </div>
        <p className="text-gray-500 text-justify font-medium">
          I'm <strong>Zenric T. Clarete</strong> from KidapAwan City, Philippines. Currently a fourth year student at Notre Dame of 
          Kidapawan College, taking <strong>Bachelor of Information Technology</strong> (BSIT). I love coding actually I'm almost 2 years
          as a self-taught <strong>MERN stack</strong> developer and still enjoying learning new things until now. 
          
        </p>
        <p className="text-gray-500 text-justify font-medium mt-5">
          For now I'm looking for real-word job
          as a Software Developer so that i can adopt the best practices and team-work environment in the actual experience as a employee.
        </p>
        <div className="mt-8 flex gap-4">
          <a className="icon">
            <FiGithub />
          </a>
          <a className="icon">
            <SiIndeed />
          </a>
          <a className="icon">
            <GrFacebookOption />
          </a>
        </div>
      </div>
      <img src={thinking} alt="" className="z-10" />
    </div>
  );
};

export default About;
