import React from 'react'
import {  useNavigate } from 'react-router-dom'
function SuccessPopup() {
  const navigate = useNavigate();
  const goToHome=()=>{
    navigate('/');
    localStorage.clear();
  }
  return (
    <div className='h-[100vh] w-full fixed top-0 left-0 z-10   bg-white p-4 flex items-center justify-center flex-col gap-6 rounded-md'>
        <div className='text-green text-4xl'>Successfully uploaded your data</div>
        <div className='text-gray-800'>Be patience! Our staff will be approve soon</div>
        <div onClick={goToHome}  className='green text-white p-3 rounded-md hover:cursor-pointer'>Go to Home</div>
    </div>
  )
}

export default SuccessPopup