import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import { Link, useParams } from 'react-router-dom'

function DeleteHospital() {
    const {hospitalId}  = useParams();
  return (
    <div className='b-trans absolute top-0 left-0 flex justify-center items-center w-full h-full'>
        <div className='bg-white p-2 w-1/3 gap-4 flex flex-col rounded'>
            <div className='flex  items-center justify-between text-2xl '>
                <div className=' font-bold text-red-700'>Alert</div>
                <Link to={`../hospitalDetails/${hospitalId}`} className='p-1 hover:bg-gray-200 rounded-full hover:cursor-pointer hover:text-red-700'>
                    <RxCross2 />
                </Link>
            </div>
            <div className='text-2xl font-bold'>Are you sure to delete this hospital permenantly?</div>
            <div className='flex w-full justify-between'>
                <Link to={`../hospitalDetails/${hospitalId}`} className='bg-gray-200 p-2 rounded font-bold hover:cursor-pointer'>Cancel</Link>
                <div className='red p-2 rounded font-bold text-white hover:cursor-pointer'>Delete</div>
            </div>
        </div>
    </div>
  )
}

export default DeleteHospital