import React, { useState } from 'react'
import profile from '../../assets/profile.png'
function UserInfo() {
  const [showBtn,setShowBtn] = useState(true);
  const [showOtpBtn,setShowOtpBtn] = useState(false);
  const [showVerify,setShowVerify] = useState(false);
  const [otp,setOtp] = useState('');
  const verifyOtp = ()=>{
    if(otp!==''){
      setShowOtpBtn(false);
      setShowVerify(true);
    }
  }
  let user = {name:'Shaik Shoheb',gender:'Male',age:'20',phoneNumber:'9876543210',email:'example@gmail.com',address:'D:no 234-23-55, 12th line, Balapuram, Chandraprastha. 573682',status:'verify'}
  return (
    <div className='card shadow-lg p-4 rounded flex justify-center items-center gap-2'>
      <div className='flex flex-col items-center gap-2'>
        <img src={profile} className='aspect-square	' alt='userprofile'/>
        <div className='font-bold'>HK24000001</div>
      </div>
      <div className=' flex flex-col gap-2 '>
        <div className=''>{user.name}</div>
        <div className='flex gap-2'>
          <div className=''>{user.gender}  </div>
          <div className=''> {user.age}</div>
        </div>
        <div className=''>{user.phoneNumber}</div>
        <div className=''>{user.email}</div>
        <div className=''>{user.address}</div>
        <div className=''>Membership Status</div>
        {showBtn&&<div onClick={()=>{setShowOtpBtn(true); setShowBtn(false)}} className='hover:cursor-pointer blue text-white text-center rounded p-1 font-bold'>Verify</div>}
        {showOtpBtn&&<div className='flex w-full gap-2'>
            <input onChange={(e)=>setOtp(e.target.value)} type='text' placeholder='Enter otp' className='p-1 w-1/2 border'/>
            <div onClick={verifyOtp} className='blue text-white w-1/2 flex items-center justify-center rounded-md hover:cursor-pointer'>Verify</div>
        </div>}
        {showVerify&&<div className='text-green text-xl'>Verified</div>}
      </div>
    </div>
  )
}

export default UserInfo