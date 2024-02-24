import React from 'react'
// import { Outlet } from 'react-router-dom'
import mobile from '../assets/mobile.png'
import './style.css'
function HospitalCredentails() {
  return (
    <div className='flex flex-col '>
      <div className='banner'></div>
      <div className='flex flex-col gap-8 p-8'>
        <div className='font-bold text-center text-2xl'>Steps to join our community</div>
        <div className='flex justify-around'>
          <div className='shadow-md border rounded-xl py-8 px-2 w-1/5 flex flex-col gap-6 items-center justify-center'>
            <div className='blue text-white w-[30px] h-[30px] flex justify-center items-center rounded-full font-bold'>1</div>
            <div className='font-bold text-center'>Register your hospital on HealthKard</div>
            <div className='text-center'>Register with your details so users can see list the listing</div>
          </div>
          <div className='shadow-md border rounded-xl py-8 px-2 w-1/5 flex flex-col gap-6 items-center justify-center'>
            <div className='blue text-white w-[30px] h-[30px] flex justify-center items-center rounded-full font-bold'>2</div>
            <div className='font-bold text-center'>Get Verified</div>
            <div className='text-center'>Our team will verify the details provided</div>
          </div>
          <div className='shadow-md border rounded-xl py-8 px-2 w-1/5 flex flex-col gap-6 items-center justify-center'>
            <div className='blue text-white w-[30px] h-[30px] flex justify-center items-center rounded-full font-bold'>3</div>
            <div className='font-bold text-center'>YAY!! <br/> Appear to users</div>
            <div className='text-center'>Congratulations!! you can now appear to users</div>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className=''>
          <img src={mobile}/>
        </div>
      </div>
    </div>
  )
}

export default HospitalCredentails