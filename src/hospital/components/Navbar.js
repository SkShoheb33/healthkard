import React from 'react'
import { CgProfile } from "react-icons/cg";
function Navbar() {
  return (
    <div className='flex justify-between '>
        <div className='flex items-center gap-2 font-bold text-sm md:text-2xl'>
            <div className=''>Welcome, </div>
            <div className='text-green text-sm md:text-4xl uppercase'>Hospital !</div>
        </div>
        <div className='flex items-center gap-1 text-xs md:text-lg'>
            <div className=''>Health_ID</div>
            <CgProfile/>
        </div>
    </div>
  )
}

export default Navbar