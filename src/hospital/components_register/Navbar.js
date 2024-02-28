import React from 'react'
import Logo from '../../Logo'

function Navbar() {
  return (
    <div className=' bg-white z-10 sticky top-0  h-[10vh] md:left-10 text-green font-bold text-4xl flex items-center pl-12 border-b-2'>
      <Logo/>
    </div>
  )
}

export default Navbar