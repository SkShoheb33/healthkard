import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { NavLink, useNavigate } from 'react-router-dom';
import './style.css'
function SideBar() {
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem('hospitalId');
    navigate('/auth');
  }
  return (
    <div className='fixed lg:relative bottom-0 left-0 w-full lg:w-fit flex lg:flex-col  lg:h-full green lg:p-2 p-1 text-3xl text-white gap-6 justify-around lg:justify-between items-center'>
        <div className='flex lg:flex-col w-2/3 lg:w-full lg:h-1/2 justify-around lg:justify-end lg:gap-4'>
          <NavLink to='profile' className=' p-2  rounded-md flex flex-col items-center w-1/2 lg:w-full lg:gap-1 hover:cursor-pointer'>
              <CgProfile/>
              <div className='text-xs lg:text-sm font-thin'>Profile</div>
          </NavLink>

          <NavLink to='dashboard' className=' p-2  rounded-md flex flex-col items-center w-1/2 lg:w-full lg:gap-1 hover:cursor-pointer'>
              <FaHome/>
              <div className='text-xs lg:text-sm font-thin'>Home</div>
          </NavLink>
        </div>
        <div onClick={logout} className='p-2 flex flex-col items-center justify-center lg:gap-1 hover:cursor-pointer  lg:h-1/3'>
            <CiLogout/>
            <div className='text-xs lg:text-sm font-thin'>Logout</div>
        </div>
    </div>
  )
}

export default SideBar