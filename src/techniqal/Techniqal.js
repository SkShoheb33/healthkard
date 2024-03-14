import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function Techniqal() {
    
  return (
    <div className='flex flex-col '>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Techniqal