import React from 'react'
import {Link, NavLink} from 'react-router-dom'
function ProfileNavbar() {
  return (
    <div className='w-full h-10 flex items-center justify-between  '>
        <div id='pendingnavbarlinks' className='flex justify-around w-2/3 font-bold'>
            <NavLink to='hospitalDetails' className='w-1/4 text-center p-1'>Hospital</NavLink>
            <NavLink to='doctorDetails'  className=' w-1/4 text-center p-1'>Doctor</NavLink>
            <NavLink to='mediaDetails' className=' w-1/4 text-center p-1'>Media</NavLink>
        </div>
        <div className='flex items-center w-fit'>
            <Link to='edit' className='text-center blue text-white px-6 py-1 hover:cursor-pointer rounded'>Edit</Link>
        </div>
    </div>
  )
}

export default ProfileNavbar