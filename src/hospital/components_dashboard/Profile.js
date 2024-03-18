import React, { useEffect } from 'react'
import ProfileNavbar from './ProfileNavbar'
import { Outlet, useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('hospitalDetails');
  },[]);
  return (
    <div className='flex flex-col gap-4'>
      <ProfileNavbar/>
      <Outlet/>
    </div>
  )
}

export default Profile