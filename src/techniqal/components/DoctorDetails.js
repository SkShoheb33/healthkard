import React from 'react'

function DoctorDetails() {
    const data = [
        {
          "doctorLicenseURL": "https://firebasestorage.googleapis.com/v0/b/healthkard.appspot.com/o/Hospital%2FHH242811026%2FdoctorLicense%2FAccenture%20-%20VSP24!%20Hiring%20timelines%20and%20key%20instructions%20-%20Mail.pdf?alt=media&token=c06b54bf-0793-4ee8-8a56-d3f7f3e3fc12",
          "email": "shaikshoheb9k@gmail.com",
          "lisenceNumber": "Lis01913111",
          "name": "Shoheb",
          "number": "919347235528",
          "qualification": "Ear Nose ",
          "_id": {
            "$oid": "65f1f4289b995cda37e00c09"
          }
        },
        {
          "doctorLicenseURL": "https://firebasestorage.googleapis.com/v0/b/healthkard.appspot.com/o/Hospital%2FHH242811026%2FdoctorLicense%2FAccenture%20-%20VSP24!%20Hiring%20timelines%20and%20key%20instructions%20-%20Mail.pdf?alt=media&token=c06b54bf-0793-4ee8-8a56-d3f7f3e3fc12",
          "email": "shaikshoheb9k@gmail.com",
          "lisenceNumber": "Lis01913111",
          "name": "Shoheb",
          "number": "919347235528",
          "qualification": "Ear Nose ",
          "_id": {
            "$oid": "65f1f4289b995cda37e00c09"
          }
        },
        {
          "doctorLicenseURL": "https://firebasestorage.googleapis.com/v0/b/healthkard.appspot.com/o/Hospital%2FHH242811026%2FdoctorLicense%2FAccenture%20-%20VSP24!%20Hiring%20timelines%20and%20key%20instructions%20-%20Mail.pdf?alt=media&token=c06b54bf-0793-4ee8-8a56-d3f7f3e3fc12",
          "email": "shaikshoheb9k@gmail.com",
          "lisenceNumber": "Lis01913111",
          "name": "Shoheb",
          "number": "919347235528",
          "qualification": "Ear Nose ",
          "_id": {
            "$oid": "65f1f4289b995cda37e00c09"
          }
        },
      ];
  return (
    <div className='overflow-scroll h-[75vh]'>
        {data.map((doctorDetails,index)=>{
            return(
                <div className='mb-12 '>
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