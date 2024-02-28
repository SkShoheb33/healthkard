import React from 'react'
import { FaRegCircleDot } from "react-icons/fa6";
import { Link, Outlet } from 'react-router-dom'
import mobile from '../assets/mobile.png'
import './style.css'
function HospitalCredentails() {
  return (
    <div className='flex flex-col relative'>
      <div className='fixed top-0 left-0 w-full'>
          <Outlet/>
      </div>
    
      <div className='banner lg:h-[100vh] flex lg:flex-row flex-col p-4 justify-center items-center'>
        <div className='flex flex-col text-white w-1/2 lg:w-1/3 p-3   gap-6'>
          <div className='text-2xl lg:text-4xl font-bold tracking-wider'>Partner with HealthKard</div>
          <div className='flex flex-col gap-2'>
            <div className='text-2xl font-semibold'>Why us?</div>
            <div className='flex flex-col gap-4 lg:text-xl'>
              <div className='flex items-center gap-6 '><FaRegCircleDot className=''/>completely free</div>
              <div className='flex items-center gap-6 '><FaRegCircleDot className=''/>new customers</div>
              <div className='flex items-center gap-6 '><FaRegCircleDot className=''/>increased revenue</div>
              <div className='flex items-center gap-6 '><FaRegCircleDot className=''/>boast brand visibility</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-1/2 lg:w-1/3  gap-8'>
          <Link to='login' className='blue text-white font-bold  py-3 rounded-md text-center'>Login to view existing hospital</Link>
          <Link to='signup' className='green text-white font-bold  py-3 rounded-md text-center'>Register your hospital</Link>
        </div>
      </div>
      <div className='flex flex-col gap-10 p-8 lg:h-[100vh] justify-center'>
        <div className='font-bold text-center text-2xl md:text-4xl'>Steps to join our community</div>
        <div className='flex flex-col md:flex-row items-center md:items-start gap-4 lg:justify-around'>
          <div className='shadow-md border rounded-xl py-8 px-2 w-4/5 md:w-1/5 flex flex-col gap-2 md:gap-6 items-center justify-center'>
            <div className='blue text-white w-[30px] h-[30px] flex justify-center items-center rounded-full font-bold'>1</div>
            <div className='font-bold text-center'>Register your hospital on HealthKard</div>
            <div className='text-center'>Register with your details so users can see list the listing</div>
          </div>
          <div className='shadow-md border rounded-xl py-8 px-2 w-4/5 md:w-1/5 flex flex-col gap-2 md:gap-6 items-center justify-center'>
            <div className='blue text-white w-[30px] h-[30px] flex justify-center items-center rounded-full font-bold'>2</div>
            <div className='font-bold text-center'>Get Verified</div>
            <div className='text-center'>Our team will verify the details provided</div>
          </div>
          <div className='shadow-md border rounded-xl py-8 px-2 w-4/5 md:w-1/5 flex flex-col gap-2 md:gap-6 items-center justify-center'>
            <div className='blue text-white w-[30px] h-[30px] flex justify-center items-center rounded-full font-bold'>3</div>
            <div className='font-bold text-center'>YAY!! <br/> Appear to users</div>
            <div className='text-center'>Congratulations!! you can now appear to users</div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center lg:h-[100vh]'>
        <div className=' w-1/2'>
          <img alt='mobile' src={mobile}/>
        </div>
        <div className='flex flex-col w-1/3 gap-8'>
          <div className='text-blue text-xl lg:text-3xl font-bold text-center'>Manage your hospital from your fingertips</div>
          <div className='text-green text-md lg:text-2xl text-center'>Get our partner app</div>
        </div>
      </div>
    </div>
  )
}

export default HospitalCredentails