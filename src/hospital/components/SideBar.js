import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import './style.css'
function SideBar() {
  return (
    <div className='fixed md:relative bottom-0 left-0 w-full md:w-fit flex md:flex-col  md:h-full green md:p-2 p-1 text-3xl text-white gap-6 justify-around md:justify-between items-center'>
        <div className='flex md:flex-col w-2/3 md:w-full md:h-1/2 justify-around md:justify-end md:gap-4'>
          <NavLink to='profile' className=' p-2  rounded-md flex flex-col items-center w-1/2 md:w-full md:gap-1 hover:cursor-pointer'>
              <CgProfile/>
              <div className='text-xs md:text-sm font-thin'>Profile</div>
          </NavLink>
          <NavLink to='dashboard' className='p-2  rounded-md flex flex-col items-center w-1/2 md:w-full md:gap-1 hover:cursor-pointer'>
              <FaHome/>
              <div className='text-xs md:text-sm font-thin '>Home</div>
          </NavLink>
        </div>
        <div className='flex flex-col items-center justify-center md:gap-1 hover:cursor-pointer  md:h-1/3'>
            <CiLogout/>
            <div className='text-xs md:text-sm font-thin'>Logout</div>
        </div>
    </div>
  )
}

export default SideBar