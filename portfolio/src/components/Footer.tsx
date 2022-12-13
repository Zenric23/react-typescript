import React from 'react'
import { GrFacebookOption } from 'react-icons/gr'
import { SiIndeed } from 'react-icons/si'
import { FiGithub } from 'react-icons/fi'


const Footer = () => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row justify-between items-center pb-20">
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
    </div>
  )
}

export default Footer