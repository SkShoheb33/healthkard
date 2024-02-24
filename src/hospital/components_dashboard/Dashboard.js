import React,{useState} from 'react'
import Table from '../components/Table';
import UserInfo from '../components/UserInfo';
import Graph from '../components/Graph';
function Dashboard() {
    const columns = ['Health Id','Name','Gender','Age','phone Number'];
    const data =[
      {id:'HK240001',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9876543210'},
      {id:'HK240002',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9876543210'},
      {id:'HK240003',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9876543210'},
      {id:'HK240004',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9876543210'},
      {id:'HK240005',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9876543210'},
      {id:'HK240004',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9876543210'},
      {id:'HK240005',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9876543210'},
      {id:'HK240004',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9876543210'},
      {id:'HK240005',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9876543210'},
      {id:'HK240004',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9876543210'},
      {id:'HK240005',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9876543210'},
      {id:'HK240004',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9876543210'},
      {id:'HK240005',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9876543210'},
      {id:'HK240004',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9876543210'},
      {id:'HK240005',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9876543210'},
      {id:'HK240004',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9876543210'},
      {id:'HK240005',name:'Shaik Shoheb',gender:'Male',age:'20',phNumber:'9176543210'},
    ]
  const [records,setRecords] = useState(data);
  function handleFilter(event){
      const newData = data.filter(row=>{
          return (row.id.toLowerCase().includes(event.target.value.toLowerCase())||
          row.phNumber.toLowerCase().includes(event.target.value.toLowerCase())||
          row.name.toLowerCase().includes(event.target.value.toLowerCase()));
      })
      setRecords(newData);
  }
  return (
    <>
        <div className='lg:w-1/4 '>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input onChange={handleFilter} type="search" id="default-search" className="block w-full p-2 px-5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-0 " placeholder="Search with HealthKard ID or Phone Number" required/>
                </div>
        </div>
        <div className='flex w-full  h-full justify-between gap-2'>
            <Table data = {records} columns = {columns}/>
            <div className='hidden lg:flex flex-col w-2/5 gap-5  '>
                <UserInfo/>
                <Graph/>
            </div>
        </div>
    </>
  )
}

export default Dashboard