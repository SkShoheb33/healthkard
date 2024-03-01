import React, { useState, useEffect } from 'react';
import Navbar from './components_register/Navbar';
import ProgressBox from './components_register/ProgressBox';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import SuccessPopup from './components_register/SuccessPopup';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function HospitalRegister() {
  const location = useLocation();
  const navigate = useNavigate();
  const [prevBtn, setPrevBtn] = useState(false);
  const [nextBtn, setNextBtn] = useState(true);

  useEffect(() => {
    if(location.pathname === '/hospitalRegister/hospitalDetails' || location.pathname === '/hospitalRegister/hospitalDetails/'){
      setPrevBtn(false);
      setNextBtn(true);
    }else if(location.pathname === '/hospitalRegister/doctorDetails' || location.pathname === '/hospitalRegister/doctorDetails/'){
      setPrevBtn(true);
      setNextBtn(true);
    }else{
      setPrevBtn(true);
      setNextBtn(false);
    }
  }, [location.pathname]);

  const prev = () => {
    switch (location.pathname) {
      case '/hospitalRegister/doctorDetails':
        setPrevBtn(false);
        navigate('/hospitalRegister/hospitalDetails');
        break;
      case '/hospitalRegister/mediaDetails':
        setNextBtn(true);
        navigate('/hospitalRegister/doctorDetails');
        break;
      default:
        break;
    }
  };

  const next = () => {
    switch (location.pathname) {
      case '/hospitalRegister/hospitalDetails':
        setPrevBtn(true);
        navigate('/hospitalRegister/doctorDetails');
        break;
      case '/hospitalRegister/doctorDetails':
        setNextBtn(false);
        navigate('/hospitalRegister/mediaDetails');
        break;
      default:
        break;
    }
  };
  const [saved,setSaved] = useState(false);
  const save = ()=>{
    notify();
    // localStorage.removeItem('hospitalDetails');
    // localStorage.removeItem('doctorList');
    // return;
    navigate('success');
    setSaved(false);
  }
  const notify = () => toast.error("Please fill all the fields",{transition: Bounce});

  return (
    <>
    {!saved&&<div className='relative flex flex-col'>
        <ToastContainer pauseOnFocusLoss pauseOnHover draggable  />
        <Navbar />
        <div className='flex h-[90vh] flex-col  md:flex-row  pr-10 p-6'>
          <div className='hidden md:flex w-full md:w-1/3 '>
            <ProgressBox />
          </div>
          <div className='w-full md:w-2/3 pb-8 h-[75vh] overflow-scroll'>
            <Outlet/>
          </div>
          <div className='bg-white fixed font-bold  bottom-0 left-0 h-16 flex justify-between items-center  w-full '>
            {prevBtn && (
              <div
                onClick={prev}
                className='mx-16 b-blue border-2 rounded px-4 py-1 text-blue hover:text-white hover:cursor-pointer hover:bg-[#303486]'>
                Prev
              </div>
            )}
            {nextBtn && (
              <div
                onClick={next}
                className='mx-16 b-blue border-2 rounded px-4 py-1 text-blue hover:text-white hover:cursor-pointer hover:bg-[#303486]'>
                Next
              </div>
            )}
            {!nextBtn && (
              <div
                onClick={save}
                className='mx-16 b-blue border-2 rounded px-4 py-1 text-blue hover:text-white hover:cursor-pointer hover:bg-[#303486]'>
                Save
              </div>
            )}
          </div>
        </div>
        
      </div>}
      {saved && <Outlet/>}
    </>
  )
}

export default HospitalRegister;
