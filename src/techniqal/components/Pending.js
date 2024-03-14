import React, { useState } from 'react'
import PendingNavbar from './PendingNavbar'
import {Outlet} from 'react-router-dom'
import Table from './Table'
function Pending() {
    const data = [
        {health_id:'HK2420109101',name:'Shoheb Hospital'},
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
    const [filteredData,setFilteredData] = useState(data);
    // functions
    const filter = (term)=>{
        const newData = data.filter(row=>{
            return (row.health_id.toLowerCase().includes(term.toLowerCase())||
            row.name.toLowerCase().includes(term.toLowerCase()));
        })
        setFilteredData(newData);
    }
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
            <input type='search' onChange={(e)=>filter(e.target.value)}  placeholder='Search with HealthKard ID or Hospital Name' className='border border-gray-100 shadow-lg w-full p-2 rounded-md'/>
            <Table data={filteredData}/>
        </div>
        <div className='flex flex-col w-2/3 gap-10'>
            <PendingNavbar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Pending