import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import DoctorDeatailsForm from './DoctorDeatailsForm';


function Form2() {
  // State to manage the list of doctor forms
  const [doctorList, setDoctorList] = useState([{}]);

  // Function to add another doctor form
  const addAnotherDoctor = () => {
    // Create a copy of the current doctorList array
    const updatedList = [...doctorList, {}];
    // Update the state with the new list
    setDoctorList(updatedList);
  };

  return (
    <div className='h-full overflow-scroll noscroll md:w-4/5'>
      {/* Render each doctor details form */}
      <div className='text-4xl mt-7 font-medium'>Doctor Details</div>
      {doctorList.map((form, index) => (
        <DoctorDeatailsForm key={index} />
      ))}
      {/* Button to add another doctor form */}
      <div onClick={addAnotherDoctor} className='flex items-center gap-2  text-2xl my-4 hover:cursor-pointer'>
        <IoIosAddCircleOutline />
        Add Another Doctor
      </div>
    </div>
  );
}

export default Form2;
