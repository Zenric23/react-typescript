import React, { useState } from 'react'
import { BsMoonStars } from 'react-icons/bs'
import {AiOutlineMenu } from 'react-icons/ai'


interface Navlink {
  name: string,
  link: string
}

const navLinks: Navlink[] = [
  {
    name: 'home',
    link: '#home'
  },
  {
    name: 'projects',
    link: '#projects'
  },
  {
    name: 'about',
    link: '#about'
  },
  {
    name: 'contact',
    link: '#contact'
  }
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
    {/* <div className={`fixed inset-0 bg-black/60 transition ease-in-out duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`} /> */}
    <nav className='h-[60px] px-56 flex items-center justify-between text-gray-700 shadow-md relative'>
      <span onClick={()=>setOpen(!open)} className="inline lg:hidden absolute left-5 text-2xl cursor-pointer">
        <AiOutlineMenu/>
      </span>
      <span className="font-bold text-2xl hidden lg:inline">ZENRIC.</span>
      <div className={`flex gap-20 lg:items-center top-[102%] absolute lg:static w-[70%] lg:w-0 bg-gray-100 z-10 lg:z-0 p-5 lg:p-0 h-[calc(100vh-60px)] ${open ? 'left-0' : 'left-[-100%]'} transition-all ease-out duration-300`}>
        <ul className='flex gap-7 lg:gap-10 font-bold flex-col lg:flex-row'>
          {
            navLinks.map(link=> (
              <li onClick={()=>setOpen(false)} className="navlink"><a href={link.link}>{link.name}</a></li>
            ))
          }
        </ul>
      </div>
      <div className="text-2xl cursor-pointer absolute lg:static right-5">
        <BsMoonStars />
      </div>
    </nav>
    </>
  )
}

export default Navbar