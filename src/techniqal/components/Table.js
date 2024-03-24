import React from 'react'
import gif from '../../assets/datanotfound.gif'
import { NavLink } from 'react-router-dom'
function Table({data,dataOf}) {
  return (
    <div id='table' className='relative flex flex-col h-[55vh] overflow-scroll'>
      <div className= 'sticky top-0 blue flex p-2 text-white rounded my-2'>
          <div className='w-1/2'>Health id</div>
          <div className='w-1/2'>{dataOf} name</div>
      </div>
        {data.map((d,index)=>{
            return(
              <NavLink to={`hospitalDetails/${d.hospitalId}`} key={index} className={`flex ${index % 2 === 0 ? 'bg-[#E5F7EF]' : 'bg-white'} p-2 hover:bg-[#E5F7EF]  hover:cursor-pointer hover:font-semibold`}>
                <div className='w-1/2'>{d.hospitalId}</div>
                <div className='w-1/2'>{d.hospitalDetails.hospitalLegalName}</div>
              </NavLink>
          
            )
        })}
        {data.length===0 &&<div className='flex justify-center'>
            <img src={gif} alt='data not found' width='200px' />
        </div>}
    </div>
  )
}

export default Table