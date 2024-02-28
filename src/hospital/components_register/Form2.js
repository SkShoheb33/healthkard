import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import DoctorDetailsForm from './DoctorDeatailsForm';

function Form2() {
  const [doctorList, setDoctorList] = useState(() => {
    const storedDoctorList = localStorage.getItem('doctorList');
    return storedDoctorList ? JSON.parse(storedDoctorList) : [{}];
  });

  const addAnotherDoctor = () => {
    const updatedList = [...doctorList, {}];
    setDoctorList(updatedList);
  };

  
  return (
    <div className='h-full overflow-scroll noscroll md:w-4/5'>
      <div className='text-4xl mt-7 font-medium'>Doctor Details</div>
      {doctorList.map((doctor, index) => (
        <DoctorDetailsForm key={index} index={index} doctor={doctor} />
      ))}
      <div onClick={addAnotherDoctor} className='flex items-center gap-2  text-2xl my-4 hover:cursor-pointer'>
        <IoIosAddCircleOutline />
        Add Another Doctor
      </div>
    </div>
  );
}

export default Form2;
