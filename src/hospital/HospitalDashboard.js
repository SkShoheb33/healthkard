import React, { useEffect } from 'react'

import SideBar from './components/SideBar';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';


function HospitalDashboard() {
  const navigate = useNavigate();
   useEffect(()=>{
      if(!localStorage.getItem('hospitalId')){
        navigate('/auth');
      }
   },[]);
    
  return (
    <div className='bg-white flex flex-col-reverse lg:flex-row h-[100vh] w-[100vw] overflow-hidden'>
        <SideBar/>
        <div className='flex flex-col w-full p-5 gap-5 h-full'>
            <Navbar/>
            <Outlet/>
        </div>
    </div>
    
  )
}

export default HospitalDashboard