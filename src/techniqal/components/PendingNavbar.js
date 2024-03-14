import React from 'react'
import './style.css'
import {Link, NavLink} from 'react-router-dom'
function PendingNavbar() {
  return (
    <div className='w-full h-10 flex items-center '>
        <div id='pendingnavbarlinks' className='flex justify-around w-2/3 font-bold'>
            <NavLink to='hospitalDetails' className='w-1/4 text-center p-1'>Hospital</NavLink>
            <NavLink to='doctorDetails'  className=' w-1/4 text-center p-1'>Doctor</NavLink>
            <NavLink to='mediaDetails' className=' w-1/4 text-center p-1'>Media</NavLink>
        </div>
        <div className='flex items-center gap-2 w-1/3'>
            <Link to='deny' className='w-1/4 text-center red text-white px-3 py-1 hover:cursor-pointer rounded'>Deny</Link>
            <div className='w-1/4 text-center green text-white px-3 py-1 hover:cursor-pointer rounded '>Approve</div>
            <Link to='edit' className='w-1/4 text-center blue text-white px-3 py-1 hover:cursor-pointer rounded'>Edit</Link>
        </div>
    </div>
  )
}

export default PendingNavbar