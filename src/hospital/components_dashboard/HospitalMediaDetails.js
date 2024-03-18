import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SplashScreen from './SplashScreen';
import {ref, deleteObject}  from 'firebase/storage'
import { storage} from '../../firebase-config';
import './style.css'
function HospitalMediaDetails() {
  const [data,setData] = useState({});
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const hospitalId = localStorage.getItem('hospitalId');
        setLoading(true);   
        let fetchDetails = async()=>{
            const response = await axios.get(`http://localhost:3002/getMediaDeatils/${hospitalId}`);
            setData(response.data);
            setLoading(false);
        }
        fetchDetails();
    },[]);
    const deleteFile = async (filePath, index) => {
        try {
            const fileRef = ref(storage, filePath);
            
            // Delete the file
            await deleteObject(fileRef);
            console.log("Successfully deleted");
            await axios.put(`http://localhost:3002/deleteMediaDetails/${localStorage.getItem('hospitalId')}`, {...data,[index]:""}).then((result) => {
            setData(prevData => {
              const updatedData = { ...prevData };
              updatedData[index] = "";
              return updatedData;
          });
        })
      } catch (error) {
          console.error('Error deleting file:', error);
      }
  };
  
  return (
    <div>
      {
        loading?(<SplashScreen/>):(
          <div className='h-[75vh] overflow-scroll'>
            <div className='text-md mb-10'><span className='font-bold'>Description : </span> {data.desc}</div>
            <div className='flex flex-wrap gap-5 justify-between '>
                {data.logoURL && <div className='img relative w-1/4'>
                  <img className='' src={data.logoURL} alt='logo'/>
                  <div className='btn b-trans w-full h-full z-10 absolute top-0 left-0 flex justify-center items-center'>
                    <div onClick={()=>deleteFile(data.logoURL,'logoURL')} className=' text-white red p-2 rounded-md font-bold hover:cursor-pointer'>Delete</div>
                  </div>
                </div>}
                {data.hospitalImageURL && <div className='img relative w-1/4'>
                  <img className='' src={data.hospitalImageURL} alt='logo'/>
                  <div className='btn b-trans w-full h-full z-10 absolute top-0 left-0 flex justify-center items-center'>
                    <div onClick={()=>deleteFile(data.hospitalImageURL,'hospitalImageURL')} className=' text-white red p-2 rounded-md font-bold hover:cursor-pointer'>Delete</div>
                  </div>
                </div>}
                {data.doctorImageURL && <div className='img relative w-1/4'>
                  <img className='' src={data.doctorImageURL} alt='logo'/>
                  <div className='btn b-trans w-full h-full z-10 absolute top-0 left-0 flex justify-center items-center'>
                    <div onClick={()=>deleteFile(data.doctorImageURL,'doctorImageURL')} className=' text-white red p-2 rounded-md font-bold hover:cursor-pointer'>Delete</div>
                  </div>
                </div>}
                {data.videoURL && <div className=''>
                  <video className='w-full' src={data.videoURL} controls/>
                </div>}
                <div className=''></div>
            </div>
        </div>
        )
      }
    </div>
    
  )
}

export default HospitalMediaDetails