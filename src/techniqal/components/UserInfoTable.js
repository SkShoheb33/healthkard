import React from 'react'

function UserInfoTable({data}) {
  return (
    <div className='w-full h-[40vh]  overflow-scroll'>
        <div className='flex blue sticky top-0 text-white p-2 rounded'>
            <div className='w-1/12'>Sno</div>
            <div className='w-2/12'>Hospital Id</div>
            <div className='w-4/12'>Hospital Name</div>
            <div className='w-1/6'>Plans Starts</div>
            <div className='w-1/6'>Plans Ends</div>
            <div className='w-1/12'>Count</div>
        </div>
        {
            data.map((d,i)=>{
                return(
                    <div className={`flex  ${i%2===1?'light-green' :''} hover:bg-[#00BFA8] hover:text-white hover:cursor-pointer  p-2 rounded`}>
                        <div className='w-1/12'>{d.sno}</div>
                        <div className='w-2/12'>{d.health_id}</div>
                        <div className='w-4/12'>{d.hospitalName}</div>
                        <div className='w-1/6'>{d.plan_starts}</div>
                        <div className='w-1/6'>{d.plan_ends}</div>
                        <div className='w-1/12'>{d.count}</div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UserInfoTable