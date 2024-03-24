import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import serverURL from '../../server-config'
function HospitalDetails() {
    const {hospitalId} = useParams();
    const [data,setData] = useState({});
    useEffect(() => {
        // console.log(hospitalId)
        const fetchData = async () => {
            try {
                const response = await axios.get(`${serverURL}/getHospitalDeatils/${hospitalId}`);
                setData(response.data); 
            } catch (error) {
                console.error('Error fetching hospital data:', error);
            }
        };

        fetchData();
    }, [hospitalId]);

  return (
    <div className='flex flex-col h-[75vh] rounded-md overflow-scroll p-2 border pb-6 border-gray-100'>
        <div className='w-full flex light-green p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Legal Name</div>
            <div className='w-1/2'>{data?.hospitalLegalName}</div>
        </div>
        <div className='w-full flex  p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Trade Name</div>
            <div className='w-1/2'>{data?.hospitalTradeName}</div>
        </div>
        <div className='w-full flex light-green p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>GST Number</div>
            <div className='w-1/2'>{data?.gstNumber}</div>
        </div>
        <div className='w-full flex  p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>GST File</div>
            <a rel="noopener noreferrer" href={data?.hospitalGSTFile} target='_blank'  className=' blue text-white w-fit px-2 rounded'> View </a>
        </div>
        <div className='w-full flex light-green p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>License Number</div>
            <div className='w-1/2'>{data?.licenseNumber}</div>
        </div>
        <div className='w-full flex  p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>License File</div>
            <a rel="noopener noreferrer" href={data?.hospitalLicense} target='_blank' className=' blue text-white w-fit px-2 rounded'> View </a>
        </div>
        <div className='w-full flex light-green p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Street Address</div>
            <div className='w-1/2'>{data?.address?.street}</div>
        </div>
        <div className='w-full flex  p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Landmark</div>
            <div className='w-1/2'>{data?.address?.landmark}</div>
        </div>
        <div className='w-full flex light-green p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>City</div>
            <div className='w-1/2'>{data?.address?.city}</div>
        </div>
        <div className='w-full flex  p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>State</div>
            <div className='w-1/2'>{data?.address?.state}</div>
        </div>
        <div className='w-full flex light-green p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Country</div>
            <div className='w-1/2'>{data?.address?.country}</div>
        </div>
        <div className='w-full flex  p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Postal Code</div>
            <div className='w-1/2'>{data?.address?.code}</div>
        </div>
        <div className='w-full flex light-green p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Latitude</div>
            <div className='w-1/2'>{data?.address?.lat}</div>
        </div>
        <div className='w-full flex  p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Longitude</div>
            <div className='w-1/2'>{data?.address?.lng}</div>
        </div>
        <div className='w-full text-center text-2xl font-bold my-10'>Contact Information</div>
        <div className='w-full flex light-green p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Hospital Contact Number</div>
            <div className='w-1/2'>+{data?.hospitalNumber}</div>
        </div>
        <div className='w-full flex  p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Open Timing</div>
            <div className='w-1/2'>{data?.from}</div>
        </div>
        <div className='w-full flex light-green p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Closing Timing</div>
            <div className='w-1/2'>{data?.to}</div>
        </div>
        <div className='w-full flex  p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Services Offered</div>
            <div className='w-1/2'>{data?.servicesOffered}</div>
        </div>
        <div className='w-full flex light-green p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Available</div>
            <div className='flex gap-3'>
                {data?.daysAvailabilty && Object.keys(data?.daysAvailabilty).map((day,index)=>{
                    return(
                        <div key={index} className={`rounded-full w-[24px] h-[24px] flex justify-center items-center ${data?.daysAvailabilty[day]?'green text-white':'bg-white'}`}>{day}</div>
                    )
                })}
            </div>
        </div>
        <div className='w-full flex  p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Verified</div>
            <div className='w-1/2'>Yes</div>
        </div>
        <div className='w-full text-center text-2xl font-bold my-10'>Owner Information</div>
        <div className='w-full flex light-green p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Name</div>
            <div className='w-1/2'>{data?.hospitalOwnerFullName}</div>
        </div>
        <div className='w-full flex  p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Email</div>
            <div className='w-1/2'>{data?.hospitalOwnerEmail}</div>
        </div>
        <div className='w-full flex light-green p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Contact Number</div>
            <div className='w-1/2'>{data?.hospitalOwnerContactNumber}</div>
        </div>
        <div className='w-full flex  p-3 rounded-md hover:font-bold hover:cursor-pointer'>
            <div className='w-1/2 font-semibold'>Verified</div>
            <div className='w-1/2'>Yes</div>
        </div>
    </div>
  )
}

export default HospitalDetails