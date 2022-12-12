import React from 'react'
import { BsMoonStars } from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className='py-4 px-56 flex items-center justify-between text-gray-700'>
      <span className="font-bold text-2xl">ZENRIC.</span>
      <div className="flex gap-20 items-center">
        <ul className='flex gap-10 font-bold'>
          <li className="navlink"><a href='#home'>home</a></li>
          <li className="navlink"><a href='#projects'>projects</a></li>
          <li className="navlink"><a href='#about'>about</a></li>
          <li className="navlink"><a href='#contact'>contact</a></li>
        </ul>
        <div className="text-xl cursor-pointer">
          <BsMoonStars />
        </div>
      </div>
    </nav>
  )
}

export default Navbar