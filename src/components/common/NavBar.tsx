import React from 'react'
import { BsList } from 'react-icons/bs'

const NavBar = () => {
  return (
    <div className="fixed w-16 h-16 rounded-full z-5 bg-grey bottom-10 left-10 flex justify-center items-center text-3xl text-pureWhite
    invisible lg:visible">
    <BsList />
    </div>  )
}

export default NavBar