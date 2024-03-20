import React from 'react'
import './style.css'
import {Link, NavLink, useParams} from 'react-router-dom'
function ApproivedNavbar() {
  const {hospitalId}  = useParams();
  return (
    <div className='w-full h-10 flex items-center justify-between'>
        <div id='pendingnavbarlinks' className='flex justify-around w-2/3 font-bold'>
        <NavLink to={`hospitalDetails/${hospitalId}`} className='w-1/4 text-center p-1'>Hospital</NavLink>
        <NavLink to={`doctorDetails/${hospitalId}`}  className=' w-1/4 text-center p-1'>Doctor</NavLink>
        <NavLink to={`mediaDetails/${hospitalId}`} className=' w-1/4 text-center p-1'>Media</NavLink>
        </div>
        <div className='flex items-center gap-2 w-1/3 justify-center'>
            <Link to={`deleteHospital/${hospitalId}`} className='w-1/3 text-center  red text-white px-3 py-1 hover:cursor-pointer rounded'>Delete</Link>
            <Link to={`edit/${hospitalId}`} className='w-1/3 text-center blue text-white px-3 py-1 hover:cursor-pointer rounded'>Edit</Link>
        </div>
    </div>
  )
}

export default ApproivedNavbar