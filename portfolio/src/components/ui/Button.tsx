import React from 'react'

interface Props {
    children: React.ReactNode,
    link?: string,
    withTarget?: boolean
}

const Button = ({children, link, withTarget}: Props) => {
  return (
    <>
      <a href={link} target={withTarget ? '_blank' : ''}>
        <button  className="heroBtn relative text-lg tracking-widest bg-indigo-600 text-white font-medium rounded w-fit px-8 py-2 hover:scale-105 transition">
            {children}
        </button>
      </a>
    </>
  )
}

export default Button