import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function Home() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <div className='h-[90vh] overflow-scroll'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Home