import React, { useState } from 'react'
import Table from './Table'
import UserInfo from '../../techniqal/components/UserInfo';
import UserInfoTable from './UserInfoTable';
function UsersInfo() {
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
    const data2 = [
        {sno:'1',health_id:'HH1201928010',hospitalName:'abc speciality hospital',plan_starts:'12/12/12',plan_ends:'12/01/13',count:'12'},
        {sno:'1',health_id:'HH1201928010',hospitalName:'abc speciality hospital',plan_starts:'12/12/12',plan_ends:'12/01/13',count:'12'},
        {sno:'1',health_id:'HH1201928010',hospitalName:'abc speciality hospital',plan_starts:'12/12/12',plan_ends:'12/01/13',count:'12'},
        {sno:'1',health_id:'HH1201928010',hospitalName:'abc speciality hospital',plan_starts:'12/12/12',plan_ends:'12/01/13',count:'12'},
        {sno:'1',health_id:'HH1201928010',hospitalName:'abc speciality hospital',plan_starts:'12/12/12',plan_ends:'12/01/13',count:'12'},
        {sno:'1',health_id:'HH1201928010',hospitalName:'abc speciality hospital',plan_starts:'12/12/12',plan_ends:'12/01/13',count:'12'},
        {sno:'1',health_id:'HH1201928010',hospitalName:'abc speciality hospital',plan_starts:'12/12/12',plan_ends:'12/01/13',count:'12'}
    ]
  return (
    <div className='flex p-4 gap-12 justify-center'>
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
            <Table data={filteredData} dataOf={'User'}/>
        </div>
        <div className='flex flex-col w-2/3 gap-10 '>
            <UserInfo/>
            <UserInfoTable data={data2} />
        </div>
    </div>
  )
}

export default UsersInfo