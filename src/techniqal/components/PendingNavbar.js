import React from 'react'
import './style.css'
import {Link, NavLink, useParams} from 'react-router-dom'
import axios from 'axios';
import serverURL from '../../server-config'
import { ToastContainer, toast } from 'react-toastify';
function PendingNavbar() {
  const {hospitalId} = useParams();
  const approve = async ()=>{
    await axios.put(`${serverURL}/updateIsVerified/${hospitalId}`).then((result) => {
      toast.success("Approved Successfully");
    }).catch((err) => {
      toast.error("Somthing wents wrong");
    });
  }
  return (
    <div className='w-full h-10 flex items-center '>
        <ToastContainer/>
        <div id='pendingnavbarlinks' className='flex justify-around w-2/3 font-bold'>
            <NavLink to={`hospitalDetails/${hospitalId}`} className='w-1/4 text-center p-1'>Hospital</NavLink>
            <NavLink to={`doctorDetails/${hospitalId}`}  className=' w-1/4 text-center p-1'>Doctor</NavLink>
            <NavLink to={`mediaDetails/${hospitalId}`} className=' w-1/4 text-center p-1'>Media</NavLink>
        </div>
        <div className='flex items-center gap-2 w-1/3'>
            <Link to={`deny/${hospitalId}`} className='w-1/4 text-center red text-white px-3 py-1 hover:cursor-pointer rounded'>Deny</Link>
            <div onClick={approve} className='w-1/4 text-center green text-white  py-1 hover:cursor-pointer rounded '>Approve</div>
            <Link to={`edit/${hospitalId}`} className='w-1/4 text-center blue text-white px-3 py-1 hover:cursor-pointer rounded'>Edit</Link>
        </div>
    </div>
  )
}

export default PendingNavbar