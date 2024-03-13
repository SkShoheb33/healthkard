import React from 'react'
import logo from  '../../assets/logo.svg'

function UploadSplashScreen({progress}) {
  return (
    <div className='absolute top-0 bottom-0 h-[100vh] bg-white z-10 w-full flex flex-col gap-10 justify-center items-center '>
        <img src={logo} alt={logo} width='100px' className=''/>
        <div className="flex  justify-center items-center">
            <div className="relative inline-flex ">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
        </div>
        <div className='font-bold text-2xl'>{progress}%</div>
        <div className=''>Uploading please wait. </div>
    </div>
  )
}

export default UploadSplashScreen