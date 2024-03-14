import React from 'react'
import profile from '../../assets/profile.png'
function UserInfo() {
  let user = {name:'Shaik Shoheb',gender:'Male',age:'20',phoneNumber:'9876543210',email:'example@gmail.com',address:'D:no 234-23-55, 12th line, Balapuram, Chandraprastha. 573682',status:'verify','last_check_up':'12/12/24'}
  return (
    <div className='card shadow-lg p-4 rounded flex justify-between items-center gap-2'>
      <div className='flex flex-col items-center gap-2 w-1/3'>
        <img src={profile} width='200px' className='aspect-square	' alt='userprofile'/>
        <div className='font-bold'>HK24000001</div>
      </div>
      <div className=' flex flex-col gap-2 w-2/3 '>
        <div className=''>{user.name}</div>
        <div className='flex gap-2'>
          <div className=''>{user.gender}  </div>
          <div className=''> {user.age}</div>
        </div>
        <div className=''>{user.phoneNumber}</div>
        <div className=''>{user.email}</div>
        <div className=''>{user.address}</div>
        <div className='flex items-center gap-2'><div className='font-bold'>Last Check up : </div>  {user.last_check_up}</div>
      </div>
    </div>
  )
}

export default UserInfo