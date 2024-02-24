import React from 'react'
import Navbar from './components_register/Navbar'
import ProgressBox from './components_register/ProgressBox'
import { Outlet } from 'react-router-dom'

function HospitalRegister() {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <div className='flex h-[90vh] flex-col md:flex-row p-6'>
            <div className='hidden md:flex w-full md:w-1/3 '>
                <ProgressBox/>
            </div>
            <div className='w-full md:w-2/3'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default HospitalRegister