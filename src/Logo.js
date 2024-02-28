import React from 'react'
import logo from './logo.svg'
function Logo() {
  return (
    <div className='flex items-center gap-2'>
      <img src={logo} alt={logo} width='40px' className='aspect-square'/>
      <div className=''>HealthKard</div>
    </div>
  )
}

export default Logo