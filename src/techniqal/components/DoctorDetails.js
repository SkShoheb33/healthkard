import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import serverURL from '../../server-config'
function DoctorDetails() {
  const {hospitalId} = useParams();
  const [data,setData] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get(`${serverURL}/getDoctorDetails/${hospitalId}`);
              setData(response.data); 
              console.log(response.data)
          } catch (error) {
              console.error('Error fetching hospital data:', error);
          }
      };

      fetchData();
  }, [hospitalId]);
  return (
    <div className='overflow-scroll h-[75vh]'>
        {data.map((doctorDetails,index)=>{
            return(
                <div key={index} className='mb-12 '>
                    <div className='text-2xl my-3 font-semibold'>Doctor {index+1} Details</div>
                    <div className='w-full flex light-green rounded-md p-3 hover:font-bold hover:cursor-pointer'>
                        <div className='w-1/2 font-semibold'>Name</div>
                        <div className='w-1/2'>{doctorDetails.name}</div>
                    </div>
                    <div className='w-full flex  rounded-md p-3 hover:font-bold hover:cursor-pointer'>
                        <div className='w-1/2 font-semibold'>Email</div>
                        <div className='w-1/2'>{doctorDetails.email}</div>
                    </div>
                    <div className='w-full flex light-green rounded-md p-3 hover:font-bold hover:cursor-pointer'>
                        <div className='w-1/2 font-semibold'>Qualification</div>
                        <div className='w-1/2'>{doctorDetails.qualification}</div>
                    </div>
                    <div className='w-full flex  rounded-md p-3 hover:font-bold hover:cursor-pointer'>
                        <div className='w-1/2 font-semibold'>Contact Number</div>
                        <div className='w-1/2'>+{doctorDetails.number}</div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default DoctorDetails