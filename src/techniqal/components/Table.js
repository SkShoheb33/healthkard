import React from 'react'
import gif from '../../assets/datanotfound.gif'
function Table({data}) {
  return (
    <div className='relative flex flex-col h-[65vh] overflow-scroll'>
      <div className= 'sticky top-0 blue flex p-2 text-white rounded my-2'>
          <div className='w-1/2'>Health id</div>
          <div className='w-1/2'>Hospital name</div>
      </div>
        {data.map((d,index)=>{
            return(
                <div key={index} className= {`flex ${index%2 === 0?'bg-[#E5F7EF]':'bg-white'} p-2 hover:bg-[#00BFA8] hover:text-white hover:cursor-pointer hover:font-semibold`}>
                    <div className='w-1/2'>{d.health_id}</div>
                    <div className='w-1/2'>{d.name}</div>
                </div>
            )
        })}
        {data.length===0 &&<div className=''>
            <img src={gif} alt='data not found'/>
        </div>}
    </div>
  )
}

export default Table