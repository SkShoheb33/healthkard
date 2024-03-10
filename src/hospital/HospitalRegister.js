import React, { useState, useEffect } from 'react';
import Navbar from './components_register/Navbar';
import ProgressBox from './components_register/ProgressBox';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function HospitalRegister() {
  const location = useLocation();
  const navigate = useNavigate();
  const [prevBtn, setPrevBtn] = useState(false);
  const [nextBtn, setNextBtn] = useState(true);
  useEffect(()=>{
    let storedEmail = JSON.stringify(localStorage.getItem('email'));
    if(!storedEmail){
      navigate('/auth/signup');
    }
  },[]);
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
    const storedHospitalDetails = JSON.parse(localStorage.getItem('hospitalDetails'));
    const storedDoctorList = JSON.parse(localStorage.getItem('doctorList'));
    const storedMediaDetails = JSON.parse(localStorage.getItem('mediaDetails'));
    if(storedHospitalDetails.hospitalNumber &&
      storedHospitalDetails.from && storedHospitalDetails.gstNumber && storedHospitalDetails.hospitalGSTFile &&
      storedHospitalDetails.hospitalLegalName && storedHospitalDetails.hospitalLicense && 
      storedHospitalDetails.hospitalOwnerContactNumber && storedHospitalDetails.hospitalOwnerEmail &&
      storedHospitalDetails.hospitalOwnerFullName && storedHospitalDetails.hospitalTradeName &&
      storedHospitalDetails.licenseNumber && storedHospitalDetails.address.city && storedHospitalDetails.address.code &&
       storedHospitalDetails.address.country && storedHospitalDetails.address.landmark
       && storedHospitalDetails.address.state && storedHospitalDetails.address.street && 
      storedHospitalDetails.servicesOffered && storedHospitalDetails.to){
        for(let i = 0;i<storedDoctorList.length;i++){
          if(!(storedDoctorList[i].doctorLicenseURL && storedDoctorList[i].email &&
             storedDoctorList[i].lisenceNumber && storedDoctorList[i].name && storedDoctorList[i].number &&
             storedDoctorList[i].qualification)){
              notify();
              return;
          }
        }
        if(storedMediaDetails.desc && storedMediaDetails.doctorImageURL && storedMediaDetails.hospitalImageURL
          && storedMediaDetails.logoURL && storedMediaDetails.videoURL){
              axios.post('http://localhost:3002/saveHospitalData',{
                hospitalId:'HKHO2012',
                hospitalDetails:storedHospitalDetails,
                doctorList:storedDoctorList,
                mediaDetails:storedMediaDetails
              }).then((result) => {
                console.log(result);
                navigate('success');
                localStorage.clear();
              }).catch((err) => {
                notify();
              });
              setSaved(true);
              return;
          }
      }
      notify();
  }
  const notify = () => toast.error("Please fill all the fields",{transition: Bounce});

  return (
    <div>
    {!saved &&<div className='relative flex flex-col'>
        <ToastContainer pauseOnFocusLoss pauseOnHover draggable  />
        <Navbar />
        <div className='flex h-[90vh] flex-col gap-4   md:flex-row  pr-10 p-6'>
          <div className='hidden md:flex w-full lg:w-1/3 justify-end  '>
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
      
    </div>
  )
}

export default HospitalRegister;
