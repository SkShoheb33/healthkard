import React from 'react'
import Logo from '../../Logo'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='border-b-gray-200 w-full justify-between flex items-center shadow-lg border h-[8vh] p-4'>
        <div className='flex items-center gap-2 w-1/4'>
            <Logo/> 
            <div className='font-thin'>
                Admin Panel
            </div>
        </div>
        <div className='flex justify-between w-1/4 text-green'>
            <NavLink className=''>Pending</NavLink>
            <div className=''>Approved</div>
            <div className=''>Users</div>
        </div>
        <div className='w-1/4 flex justify-end'>Logout</div>
    </div>
  )
}

export default Navbar