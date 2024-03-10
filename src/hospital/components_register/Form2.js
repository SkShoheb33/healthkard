import React, { useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import DoctorDetailsForm from './DoctorDeatailsForm';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../../firebase-config';
import { RxCross2 } from 'react-icons/rx';
import PhoneInput from 'react-phone-input-2';

function Form2() {
  const [doctorList, setDoctorList] = useState(() => {
    const storedDoctorList = localStorage.getItem('doctorList');
    return storedDoctorList ? JSON.parse(storedDoctorList) : [
      {
        name:"",
        email:"",
        qualification:"",
        lisenceNumber:"",
        doctorLicenseURL:"",
        number:"",
      }
    ];
  });


  // add doctor
  const addAnotherDoctor = () => {
    const updatedList = [...doctorList, {
      name:"",
      email:"",
      qualification:"",
      lisenceNumber:"",
      doctorLicenseURL:"",
      number:"",
    }];
    setDoctorList(updatedList);
  };
  
  return (
    <div className='h-full overflow-scroll noscroll lg:w-4/5  mx-auto'>
      <div className='text-2xl lg:text-4xl mt-7 font-medium'>Doctor Details</div>
      {doctorList.map((doctor, index) => (
        <DoctorDetailsForm key={index} index={index} doctor={doctor} />
      ))}
      <div onClick={addAnotherDoctor} className='flex items-center gap-2  text-xl lg:text-2xl my-4 hover:cursor-pointer'>
        <IoIosAddCircleOutline />
        <div className=''>Add Another Doctor</div>
      </div>
    </div>
  );
}

export default Form2;
