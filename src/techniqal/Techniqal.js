import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'

function Techniqal() {
    const navigate = useNavigate();
    useEffect(()=>{
      const techniqal = localStorage.getItem('techniqal');
      if(!techniqal){
        navigate('login');
      }else{
        // navigate('pending');
      }
    },[]);
  return (
    <div className='flex flex-col relative'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Techniqal