import axios from 'axios';
import serverURL from '../../server-config'
import React, { useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg";
function Navbar() {
  const [data,setData] = useState({
    hospitalName :'',
    hospitalId : ''
  })
  // const serverURL = 'http://localhost:3002';
  useEffect(()=>{
    const hospitalId = localStorage.getItem('hospitalId');
    let fetchDetails = async()=>{
      const response = await axios.get(`${serverURL}/getName/${hospitalId}`);
      setData({hospitalId: localStorage.getItem('hospitalId'),hospitalName:response.data});
    }
    fetchDetails();
  },[]);
  return (
    <div className='flex justify-between '>
        <div className='flex items-center gap-2 font-bold text-sm lg:text-2xl'>
            <div className=''>Welcome, </div>
            <div className='text-green text-sm lg:text-4xl uppercase'>{data.hospitalName} !</div>
        </div>
        <div className='flex items-center gap-1 text-xs lg:text-lg'>
            <div className=''>{data.hospitalId}</div>
            <CgProfile/>
        </div>
    </div>
  )
}

export default Navbar