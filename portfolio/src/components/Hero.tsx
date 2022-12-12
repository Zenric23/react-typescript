import React from 'react'
import Button from './ui/Button'
import pic from '../assets/images/me.webp'


const Hero = () => {

  return (
    <div className='h-[90vh] 2xl:h-[80vh] flex gap-20 items-center' id='home'>
      <img src={pic} alt="" className='hidden lg:inline w-[300px] 2xl:w-auto h-[300px] 2xl:h-auto hover:rotate-[-20deg] transition duration-300 cursor-pointer' />
      <div className="flex flex-col gap-3">
        <h2 className="text-gray-600 text-2xl font-semibold tracking-widest">Hello, I'm Zenric Clarete.</h2>
        <span className="leading-tight text-4xl lg:text-5xl 2xl:text-6xl font-extrabold drop-shadow-lg text-gray-700">
          I <span className="text-indigo-600 drop-shadow-lg">Design</span> and <span className="text-indigo-600">Develop</span> things for web.
        </span>
        <div className="mt-10">
          <Button>projects</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero