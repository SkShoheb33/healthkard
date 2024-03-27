import React from 'react'
import Navbar from './components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'

function Techniqal() {
  const navigate = useNavigate();
  const techniqal = localStorage.getItem('techniqal');
  if(!techniqal){
    navigate('login');
  }
  // useEffect(()=>{
    
  //   },[]);
  return (
    <div className='flex flex-col relative'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Techniqal