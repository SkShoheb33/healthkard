import React from 'react'
import { Link } from 'react-router-dom'
function SuccessPopup() {
  return (
    <div className='h-[100vh] w-full fixed top-0 left-0 z-10   bg-white p-4 flex items-center justify-center flex-col gap-6 rounded-md'>
        <div className='text-green text-4xl'>Successfully uploaded your data</div>
        <div className='text-gray-800'>Be patience! Our staff will be approve soon</div>
        <Link to='/' className='green text-white p-3 rounded-md hover:cursor-pointer'>Go to Home</Link>
    </div>
  )
}

export default SuccessPopup