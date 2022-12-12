import React from 'react'

interface Props {
    children: React.ReactNode
}

const Button = ({children}: Props) => {
  return (
    <>
        <button  className="heroBtn relative text-lg tracking-widest bg-indigo-600 text-white font-medium rounded w-fit px-8 py-2 hover:scale-105 transition">
            {children}
        </button>
    </>
  )
}

export default Button