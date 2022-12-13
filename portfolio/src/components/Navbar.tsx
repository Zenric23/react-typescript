import React, { useEffect, useState, useContext } from 'react'
import { BsMoonStars } from 'react-icons/bs'
import {AiOutlineMenu } from 'react-icons/ai'
import { DarkModeContext } from '../context/darkModeContext'


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
  const { dark, toogleDarkMode } = useContext(DarkModeContext) as DarkModeContextType
  const [open, setOpen] = useState(false)


  useEffect(()=> {
    if(open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

  }, [open])

  return (
    <>
    <div onClick={()=>setOpen(false)} className={`fixed inset-0 bg-black/60 transition-opacity ease-in-out duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`} />
    <nav className='h-[60px] px-10 lg:px-56 flex items-center justify-between text-gray-700 shadow-md md:shadow-none relative bg-white md:bg-transparent'>
      <span onClick={()=>setOpen(!open)} className="inline md:hidden absolute left-5 text-2xl cursor-pointer">
        <AiOutlineMenu/>
      </span>
      <span className="font-bold text-2xl hidden md:inline">ZENRIC.</span>
      <div className={` ${dark ? 'dark' : ''} flex gap-20 md:items-center top-[102%] absolute md:static w-[70%] md:w-auto bg-gray-100 md:bg-transparent z-10 md:z-0 p-5 md:p-0 h-[calc(100vh-60px)] ${open ? 'left-0' : 'left-[-70%]'} transition-all md:transition-none ease-out duration-300`}>
        <ul className='flex gap-7 md:gap-10 font-bold flex-col md:flex-row'>
          {
            navLinks.map(link=> (
              <li key={link.name} onClick={()=>setOpen(false)} className="navlink"><a href={link.link}>{link.name}</a></li>
            ))
          }
        </ul>
      </div>
      <div className="text-2xl cursor-pointer absolute md:static right-5" onClick={toogleDarkMode}>
        <BsMoonStars />
      </div>
    </nav>
    </>
  )
}

export default Navbar