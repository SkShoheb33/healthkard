import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
function ProgressBox() {
    let a = ()=>{
        document.getElementById('a').classList.add('green');
        document.getElementById('a').classList.add('text-white');
        document.getElementById('b').classList.remove('text-white');
        document.getElementById('b').classList.remove('green');
        document.getElementById('c').classList.remove('text-white');
        document.getElementById('c').classList.remove('green');
    }
    let b = ()=>{
        document.getElementById('b').classList.add('green');
        document.getElementById('b').classList.add('text-white');
        document.getElementById('a').classList.remove('text-white');
        document.getElementById('a').classList.remove('green');
        document.getElementById('c').classList.remove('text-white');
        document.getElementById('c').classList.remove('green');
    }
    let c = ()=>{
        document.getElementById('c').classList.add('green');
        document.getElementById('c').classList.add('text-white');
        document.getElementById('b').classList.remove('text-white');
        document.getElementById('b').classList.remove('green');
        document.getElementById('a').classList.remove('text-white');
        document.getElementById('a').classList.remove('green');
    }
  return (
    <div className='mx-auto w-full md:w-2/3 flex flex-col gap-4 shadow-md rounded-md py-4 h-fit'>
        <div className='text-2xl font-semibold border-b-2 p-2'>Create your Hospital page</div>
        <NavLink onClick={()=>a()} to='hospitalDetails' className='flex items-center justify-between hover:cursor-pointer '>
            <div id='a'  className='shadow-lg rounded-full border p-2 text-xs w-[20px] h-[20px] flex justify-center items-center mx-auto  '>1</div>
            <div className='flex flex-col w-4/5 '>
                <div className='text-xl'>Hospital Information</div>
                <div className='text-xs'>Hospital Name,address,Contact no, Pincode,......., owner details.</div>
            </div>
        </NavLink>
        <NavLink onClick={()=>b()} to='doctorDetails' className='flex items-center justify-between hover:cursor-pointer'>
            <div id='b'  className='shadow-lg rounded-full border p-2 text-xs w-[20px] h-[20px] flex justify-center items-center mx-auto'>2</div>
            <div className='flex flex-col w-4/5 '>
                <div className='text-xl'>Doctor Details</div>
                <div className='text-xs'>Description about Hospital, Doctors, posters etc..</div>
            </div>
        </NavLink>
        <NavLink onClick={()=>c()} to='mediaDetails' className='flex items-center justify-between hover:cursor-pointer'>
            <div id='c'  className='shadow-lg rounded-full border p-2 text-xs w-[20px] h-[20px] flex justify-center items-center mx-auto'>3</div>
            <div className='flex flex-col w-4/5 '>
                <div className='text-xl'>Media Details</div>
                <div className='text-xs'>Description about Hospital, Doctors, posters etc..</div>
            </div>
        </NavLink>
    </div>
  )
}

export default ProgressBox