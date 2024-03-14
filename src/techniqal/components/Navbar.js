import React from 'react'
import Logo from '../../Logo'
import './style.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='border-b-gray-200 w-full justify-between flex items-center shadow-lg border h-[8vh] p-4 green'>
        <div className='flex items-center gap-2 w-1/4'>
            <Logo/> 
            <div className='font-thin'>
                Admin Panel
            </div>
        </div>
        <div id='technavbar' className='flex justify-between w-1/4 text-white'>
            <NavLink to='pending' className='p-2 rounded font-semibold'>Pending</NavLink>
            <NavLink to='approved' className='p-2 rounded font-semibold'>Approved</NavLink>
            <NavLink to='users' className='p-2 rounded font-semibold'>Users</NavLink>
        </div>
        <div className='w-1/4 flex justify-end'>Logout</div>
    </div>
  )
}

export default Navbar