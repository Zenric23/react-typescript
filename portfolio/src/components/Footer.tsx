import React from 'react'
import { GrFacebookOption } from 'react-icons/gr'
import { SiIndeed } from 'react-icons/si'
import { FiGithub } from 'react-icons/fi'


const Footer = () => {
  return (
    <div className="flex justify-between items-center pb-20">
      <div className="flex gap-4">
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
        <span className="text-gray-500 font-medium">Created by @Zenric Clarete</span>
    </div>
  )
}

export default Footer