import React from 'react'
import PendingNavbar from './PendingNavbar'
import {Outlet} from 'react-router-dom'
import Table from './Table'
function Pending() {
    const data = [
        {health_id:'HH2420109101',name:'Shoheb Hospital'},
        {health_id:'HH2420109101',name:'Shoheb Hospital'},
        {health_id:'HH2420109101',name:'Shoheb Hospital'},
        {health_id:'HH2420109101',name:'Shoheb Hospital'},
        {health_id:'HH2420109101',name:'Shoheb Hospital'},
        {health_id:'HH2420109101',name:'Shoheb Hospital'},
        {health_id:'HH2420109101',name:'Shoheb Hospital'},
        {health_id:'HH2420109101',name:'Shoheb Hospital'},
        {health_id:'HH2420109101',name:'Shoheb Hospital'},
        {health_id:'HH2420109101',name:'Shoheb Hospital'},
        {health_id:'HH2420109101',name:'Shoheb Hospital'},
        {health_id:'HH2420109101',name:'Shoheb Hospital'},
        {health_id:'HH2420109101',name:'Shoheb Hospital'},
        {health_id:'HH2420109101',name:'Shoheb Hospital'},
        {health_id:'HH2420109101',name:'Shoheb Hospital'},
        {health_id:'HH2420109101',name:'Shoheb Hospital'}
    ]
  return (
    <div className='flex p-4 gap-10'>
        <div className='flex flex-col w-1/4  gap-5'>
            <div className='flex lg:text-xl gap-10'>
                <div className='flex flex-col w-1/2 p-4 border-gray-100 rounded-xl border shadow-xl'>
                    <div className='font-semibold'>Total Users</div>
                    <div className='text-green font-bold'>100</div>
                </div>
                <div className='flex flex-col w-1/2 p-4 border-gray-100 rounded-xl border shadow-xl'>
                    <div className='font-semibold'>Total Users</div>
                    <div className='text-green font-bold'>100</div>
                </div>
            </div>
            <input type='search' placeholder='Search with HealthKard ID ' className='border border-gray-100 shadow-lg w-full p-2 rounded-md'/>
            <Table data={data}/>
        </div>
        <div className='flex flex-col w-2/3 gap-10'>
            <PendingNavbar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Pending