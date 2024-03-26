import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom'
function DenyHospital() {
    const navigate = useNavigate();
    const [email,setEmail] = useState({subject:"",body:""})
    const send = ()=>{
        navigate('../doctorDetails')
    }
  return (
    <div className='fixed top-0 left-0 b-trans h-[100vh] w-full p-10 flex justify-center items-center'>
        <div className='bg-white p-4 w-1/3 flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
                <div className='text-2xl font-semibold'>Deny</div>
                <Link to='../' className='hover:text-red-800 hover:bg-gray-200 p-2 rounded-full hover:cursor-pointer'><RxCross1/></Link>
            </div>
            <div className='text-sm'>Please give reason for the deny.</div>
            <div className="relative w-full min-w-[200px] h-10 ">
                <input autoFocus name="street" onChange={e=>setEmail(e.target.value)} value={email.subject} className="border peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter subject here
                </label>
            </div>
            <textarea className='border rounded p-2' onChange={e=>setEmail(e.target.value)} value={email.body}  rows='10' placeholder='Enter reason here'></textarea>
            <div className='flex gap-2 items-center '>
                <input type='radio'/>
                <div className=''>Completly delete the hospital</div>
            </div>
            <div className='flex flex-row-reverse gap-5'>
                <div onClick={send} className='blue text-white p-2 w-3/12 text-center rounded hover:cursor-pointer'>Send email</div>
                <Link to='../doctorDetails' className='bg-gray-500 text-white p-2 w-3/12 text-center rounded hover:cursor-pointer'>Cancel</Link>
            </div>
        </div>
    </div>
  )
}

export default DenyHospital