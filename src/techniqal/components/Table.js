import React from 'react'

function Table({data}) {
  return (
    <div className='flex flex-col h-[65vh] overflow-scroll'>
        {data.map((d,index)=>{
            return(
                <div key={index} className= {`flex ${index%2 === 0?'bg-[#E5F7EF]':'bg-white'} p-2 hover:bg-[#00BFA8] hover:text-white hover:cursor-pointer hover:font-semibold`}>
                    <div className='w-1/2'>{d.health_id}</div>
                    <div className='w-1/2'>{d.name}</div>
                </div>
            )
        })}
    </div>
  )
}

export default Table