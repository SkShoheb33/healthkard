import React from 'react'
import logo from './assets/logo.svg'
function Logo() {
  return (
    <div className='flex items-center gap-2'>
      <img src={logo} alt={logo} width='40px' className='aspect-square'/>
      <div className='text-white'>HealthKard</div>
    </div>
  )
}

export default Logo