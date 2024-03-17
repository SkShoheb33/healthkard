import React from 'react'
import ProfileNavbar from './ProfileNavbar'
import { Outlet } from 'react-router-dom'

function Profile() {
  return (
    <div className='flex flex-col'>
      <ProfileNavbar/>
      <Outlet/>
    </div>
  )
}

export default Profile