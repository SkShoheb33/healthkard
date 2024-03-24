import React, { useEffect, useState } from 'react'
import ApproivedNavbar from './ApprovedNavbar'
import {Outlet, useParams} from 'react-router-dom'
import Table from './Table'
import serverURL from '../../server-config'
import logo from '../../assets/logo.svg'
import axios from 'axios';
function Approved() {
    let [data,setData] = useState([]);
    const {hospitalId} = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${serverURL}/approvedHospitals`);
                setData(response.data); 
                setFilteredData(response.data);
            } catch (error) {
                console.error('Error fetching hospital data:', error);
            }
        };

        fetchData();
    }, []);
    const [filteredData,setFilteredData] = useState(data);
    // functions
    const filter = (term)=>{
        const newData = data.filter(row=>{
            return (row.hospitalId.toLowerCase().includes(term.toLowerCase())||
            row.hospitalDetails.hospitalLegalName.toLowerCase().includes(term.toLowerCase()));
        })
        setFilteredData(newData);
    }
  return (
    <div className='flex p-4 gap-12 justify-center relative'>
        <div className='flex flex-col gap-5 w-1/4'>
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
            <div className='gap-5 flex flex-col'>
                <input type='search' onChange={(e)=>filter(e.target.value)}  placeholder='Search with HealthKard ID or Hospital Name' className='border border-gray-100 shadow-lg w-full p-2 rounded-md'/>
                {data.length !== 0 && <Table data={filteredData} dataOf={'Hospital'}/>}
            </div>
        </div>
        {hospitalId && <div className='flex flex-col w-2/3 gap-10 '>
            <ApproivedNavbar/>
            <Outlet/>
        </div>}
        {!hospitalId && <div className='flex flex-col w-2/3 gap-10 justify-center items-center h-[80vh]'>
            <img src={logo} alt='logo' width='500px'/>
            <div className='font-bold text-3xl'>HealthKard</div>
        </div>}
    </div>
  )
}

export default Approved