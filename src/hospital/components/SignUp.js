import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';


function SignUp() {
    const [isOtpSent,setIsOtpSent] = useState(false);
    const navigate = useNavigate();
    const sendOTP = ()=>{
        if(isOtpSent){
            navigate('../../hospitalRegister/hospitalDetails/')
            return;
        }
        setIsOtpSent(true);
        
    }
  return (
    <div div className='relative h-[100vh] w-full flex justify-center items-center'>
        <div className='shadow-md flex flex-col gap-6 w-2/3 lg:w-1/3 p-6 border rounded-md'>
            <div className='text-xl font-bold flex justify-between'>
                <div className=''>Sign Up</div>
                <RxCross2 className='hover:bg-gray-200 hover:cursor-pointer rounded-full p-1 text-3xl' />
            </div>
            {!isOtpSent&&<div className='w-full flex flex-col gap-6'>
                <div className="relative w-full min-w-[200px] h-10">
                    <input className="border- peer w-full h-full bg-transparent text-green-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-green-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-green-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-green-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-green-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-green-gray-200 peer-focus:before:!border-gray-900 after:border-green-gray-200 peer-focus:after:!border-gray-900">Name of Hospital</label>
                </div>
                <div className="relative w-full min-w-[200px] h-10">
                    <input className="border- peer w-full h-full bg-transparent text-green-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-green-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-green-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-green-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-green-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-green-gray-200 peer-focus:before:!border-gray-900 after:border-green-gray-200 peer-focus:after:!border-gray-900">Email</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-500">I agree term and conditions of HealthKard</label>
                </div>
            </div>}
            {isOtpSent && <div className='flex flex-col'>
                <div className=''>Enter OTP</div>
                <div className='flex justify-between p-6'>
                    <input type='text' maxLength={1} className='focus:border-0 border-green-800 border rounded-md w-8 h-8 text-center'/>
                    <input type='text' maxLength={1} className='focus:border-0 border-green-800 border rounded-md w-8 h-8 text-center'/>
                    <input type='text' maxLength={1} className='focus:border-0 border-green-800 border rounded-md w-8 h-8 text-center'/>
                    <input type='text' maxLength={1} className='focus:border-0 border-green-800 border rounded-md w-8 h-8 text-center'/>
                    <input type='text' maxLength={1} className='focus:border-0 border-green-800 border rounded-md w-8 h-8 text-center'/>
                    <input type='text' maxLength={1} className='focus:border-0 border-green-800 border rounded-md w-8 h-8 text-center'/>
                </div>
            </div>}
            <div onClick={sendOTP}  className='hover:cursor-pointer green text-white text-center rounded-md p-2'>{!isOtpSent?<div>Send OTP</div>:<div>Sign Up</div>}</div>
            <div className='flex w-full items-center justify-center gap-2'>
                <div className='bg-black w-1/3 border'></div>
                    or
                <div className='bg-black w-1/3 border'></div>
                
            </div>
            <div className='flex items-center justify-center gap-3 rounded-md border shadow-md p-2'>
                <FcGoogle/>
                <div className=''>Sign in with Google</div>
            </div>

        </div>
    </div>
  )
}

export default SignUp