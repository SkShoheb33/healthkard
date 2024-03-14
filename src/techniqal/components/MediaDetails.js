import React from 'react'

function MediaDetails() {
  const data = {
    "desc": "Shoheb Shaik",
    "doctorImageURL": "https://firebasestorage.googleapis.com/v0/b/healthkard.appspot.com/o/Hospital%2FHH242811026%2FdoctorImage%2Fmypic.jpg?alt=media&token=11e45eba-be48-49d4-8502-1c86a6d494ae",
    "hospitalImageURL": "https://firebasestorage.googleapis.com/v0/b/healthkard.appspot.com/o/Hospital%2FHH242811026%2FhospitalImage%2Fmypic.jpg?alt=media&token=23979163-a2b4-41b6-bae7-7f115c543e8a",
    "logoURL": "https://firebasestorage.googleapis.com/v0/b/healthkard.appspot.com/o/Hospital%2FHH242811026%2Flogo%2Fmypic.jpg?alt=media&token=3aaa6d25-3e03-4e56-96eb-95a303e56c47",
    "videoURL": "https://firebasestorage.googleapis.com/v0/b/healthkard.appspot.com/o/Hospital%2FHH242811026%2Fvideo%2Fsmall.mp4?alt=media&token=3942c059-674f-4886-922f-39729f777931",
    "achievements": []
  }
  return (
    <div className='h-[75vh] overflow-scroll'>
        <div className='text-md mb-10'><span className='font-bold'>Description : </span> {data.desc}</div>
        <div className='flex flex-wrap gap-5 justify-between '>
            <img className='w-1/4' src={data.logoURL} alt='logo'/>
            <img className='w-1/4' src={data.hospitalImageURL} alt='logo'/>
            <img className='w-1/4' src={data.doctorImageURL} alt='logo'/>
            {data.videoURL&&<video className='w-full' src={data.videoURL} controls/>}
        </div>
    </div>
  )
}

export default MediaDetails