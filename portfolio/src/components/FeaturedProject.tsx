import React from 'react'
import Button from './ui/Button'
import { FiGithub } from 'react-icons/fi'
import client from '../assets/images/canis.jpg'
import admin from '../assets/images/proj1_dashboard.jpg'

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



const FeaturedProject = () => {
  
  return (
    <div id='projects'>
      <h3 className="text-title mb-4">recent projects</h3>
      <div className="text-indigo-600 text-xl font-bold mb-36">_what i have developed?</div>
      <div className="grid gap-40">
        {
          featuredProjects.map(item=> (
            <div key={item.id} className='flex flex-col md:flex-row gap-10  project-image-card relative after:bg-white'>
              <img 
                src={item.image} alt="" 
                className='rounded-xl w-[500px] 2xl:w-[700px] h-[250px] 2xl:h-[350px] z-10 border cursor-pointer shadow-lg transition duration-300 ease-in-out hover:scale-105'
              />
              <div className='z-10'>
                <h2 className="text-2xl font-extrabold text-gray-700 mb-2.5">
                  {item.title}
                </h2>
                <p className="text-gray-500 font-medium leading-relaxed text-justify">
                  {item.desc} 
                </p>
                <div className="flex flex-wrap mt-6 gap-4">
                  {
                    item.technologies.map(tech=> (
                      <span key={tech} className="tech-badge shadow-md">{tech}</span>
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
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FeaturedProject