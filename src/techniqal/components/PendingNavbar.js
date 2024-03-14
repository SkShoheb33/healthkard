import React from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'
function PendingNavbar() {
  return (
    <div className='w-full h-10 flex items-center '>
        <div className='flex justify-around w-2/3 font-bold'>
            <NavLink to='hospitalDetails' className=' p-1'>Hospital</NavLink>
            <NavLink to='doctorDetails'  className=' p-1'>Doctor</NavLink>
            <NavLink to='mediaDetails' className=' p-1'>Media</NavLink>
        </div>
        <div className='flex items-center gap-2'>
            <div className='red text-white px-3 py-1 hover:cursor-pointer '>Deny</div>
            <div className='green text-white px-3 py-1 hover:cursor-pointer'>Approve</div>
            <div className='blue text-white px-3 py-1 hover:cursor-pointer'>Edit</div>
        </div>
    </div>
  )
}

export default PendingNavbar