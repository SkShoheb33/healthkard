import React, { useEffect, useState } from 'react';
import './style.css';
import { NavLink, useLocation } from 'react-router-dom';

function ProgressBox() {
  const location = useLocation();
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    switch (location.pathname) {
      case '/hospitalRegister/hospitalDetails':
        setActiveStep(1);
        break;
      case '/hospitalRegister/doctorDetails':
        setActiveStep(2);
        break;
      case '/hospitalRegister/mediaDetails':
        setActiveStep(3);
        break;
      default:
        setActiveStep(1);
        break;
    }
  }, [location.pathname]);

  return (
    <div className='w-full md:w-2/3 flex flex-col gap-4 shadow-md rounded-md py-4 pb-6 h-fit'>
      <div className='text-2xl font-semibold border-b-2 p-4'>Create your Hospital page</div>
      <NavLink to='hospitalDetails' className='flex p-1 items-center justify-between hover:cursor-pointer' activeClassName='active-step'>
        <div className={`shadow-lg rounded-full border p-2 text-xs w-[20px] h-[20px] flex justify-center items-center mx-auto ${activeStep === 1 ? 'green text-white' : ''}`}>1</div>
        <div className='flex flex-col w-4/5 pr-3'>
          <div className='text-xl'>Hospital Information</div>
          <div className='text-xs'>Hospital Name, address, Contact no, Pincode ....... owner details.</div>
        </div>
      </NavLink>
      <NavLink to='doctorDetails' className='flex items-center justify-between hover:cursor-pointer' activeClassName='active-step'>
        <div className={`shadow-lg rounded-full border p-2 text-xs w-[20px] h-[20px] flex justify-center items-center mx-auto ${activeStep === 2 ? 'green text-white' : ''}`}>2</div>
        <div className='flex flex-col w-4/5 pr-3'>
          <div className='text-xl'>Doctor Details</div>
          <div className='text-xs'>Description about Hospital, Doctors, posters etc..</div>
        </div>
      </NavLink>
      <NavLink to='mediaDetails' className='flex items-center justify-between hover:cursor-pointer' activeClassName='active-step'>
        <div className={`shadow-lg rounded-full border p-2 text-xs w-[20px] h-[20px] flex justify-center items-center mx-auto ${activeStep === 3 ? 'green text-white' : ''}`}>3</div>
        <div className='flex flex-col w-4/5 pr-3'>
          <div className='text-xl'>Media Details</div>
          <div className='text-xs'>Description about Hospital, Doctors, posters etc..</div>
        </div>
      </NavLink>
    </div>
  );
}

export default ProgressBox;
