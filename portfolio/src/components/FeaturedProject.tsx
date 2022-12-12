import React from 'react'
import Button from './ui/Button'
import { FiGithub } from 'react-icons/fi'


interface Project {
  image: string,
  title: string,
  desc: string,
  technologies: string[],
  thumbnail: string,
  github: string
}

const featuredProjects: Project[] = [
  {
    image: 'https://eugenebadato.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F16zwqt7odl38%2F4535K10nsvaMIGAWbMdKRg%2F4e786af3f8ad2ed6ec93e0e829e662c3%2FScreenshot_7.png&w=1920&q=75',
    title: 'King Canis Pet Supplies',
    desc: "Is an E-commerce platform for Pet's food, accessories and other things for pets. was built for King Canis Pet Supplies based in Kidapwan City, Cotabato, Philippines",
    technologies: ['Mongo DB', 'React JS', 'Node JS', 'Tailwind CSS'],
    thumbnail: '',
    github: ''
  },
  {
    image: 'https://eugenebadato.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F16zwqt7odl38%2F4535K10nsvaMIGAWbMdKRg%2F4e786af3f8ad2ed6ec93e0e829e662c3%2FScreenshot_7.png&w=1920&q=75',
    title: 'King Canis Pet Supplies',
    desc: "Is an E-commerce platform for Pet's food, accessories and other things for pets. was built for King Canis Pet Supplies based in Kidapwan City, Cotabato, Philippines",
    technologies: ['Mongo DB', 'React JS', 'Node JS', 'Tailwind CSS'],
    thumbnail: '',
    github: ''
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
            <div className='flex gap-10  project-image-card relative after:bg-white'>
              <img 
                src="https://eugenebadato.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F16zwqt7odl38%2F4535K10nsvaMIGAWbMdKRg%2F4e786af3f8ad2ed6ec93e0e829e662c3%2FScreenshot_7.png&w=1920&q=75" alt="" 
                className='rounded-xl w-[700px] h-[350px] z-10'
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
                      <span className="tech-badge shadow-md">{tech}</span>
                    ))
                  }
                </div>
                <div className="flex gap-6 mt-10">
                  <Button>take a look</Button>
                  <span className="icon">
                    <FiGithub />
                  </span>
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