import axios from 'axios';
import React, { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';
import OTPInput from "otp-input-react";
import { useNavigate } from 'react-router-dom';
import serverURL from '../../server-config'
function TechnicalLogin() {
    const navigate = useNavigate();
    const [otp,setOtp] = useState(null);
    const [sending,setSending] = useState(false);
    const [isOtpSent,setIsOtpSent] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [userEnteredOtp,setUserEnteresOtp] = useState(null);
    // const serverURL = 'http://localhost:3002';
    const generateOtp = () => {
        let digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 4; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        setOtp(OTP);
        return OTP;
    }
    const sendOTP = async() => {
        
        if (!email.includes('@gmail.com')) {
            toast.error("Please enter valid email");
            return;
        }
        if(!(email==="shaikshoheb9k@gmail.com" || email.includes("akram"))){
            toast.error("Please enter correct email address");
            return;
        }
        if(password!=='Shaik@123'){
            toast.error("Please enter correct password");
            return;
        }
        setSending(true);
        axios.post(`${serverURL}/sendOTP`, { to: email, subject: "Verification code from HealthKard Admin", otp: generateOtp() })
            .then((response) => {
                setIsOtpSent(true);
                setSending(false);
            })
            .catch((error) => {
                console.error("Error sending OTP:", error);
            });
    }
    const verifyOTP = ()=>{
        setSending(true);
        console.log(otp,email)
        console.log(userEnteredOtp,otp)
        if(userEnteredOtp === otp){
            toast.success("Logged in successfully");
            localStorage.setItem('techniqal',true);
            navigate('/techniqal/pending')
        }else{
            toast.error("Please enter correct otp!");
            console.log("Wrong otp entered");
        }
        setSending(false);
    }
  return (
    <div className='absolute top-0 left-0 bg-white w-full h-[100vh] flex justify-center items-center'>
        <ToastContainer/>
        <div className='w-1/4 flex flex-col gap-4 border border-gray-200 p-6 rounded-md shadow-md'>
            <div className='text-2xl font-bold'>Login as Admin</div>
            {!isOtpSent && 
            <div className='flex flex-col gap-4'>
                <div className="relative w-full min-w-[200px] h-10">
                    <input autoFocus onChange={(e)=>setEmail(e.target.value)} value={email} name="email"  className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm p-5 rounded-[5px]  focus:border-gray-900" placeholder=" " />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Email
                    </label>
                </div>
                <div className="relative w-full min-w-[200px] h-10">
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} name="password" type='password'  className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm p-5 rounded-[5px]  focus:border-gray-900" placeholder=" " />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Password
                    </label>
                </div>
                <div onClick={sendOTP} className='blue flex items-center gap-2 justify-center w-full text-center p-2 text-white rounded-md cursor-pointer'>
                <ClipLoader
                    color={"#fff"}
                    loading={sending}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"/>
                    Send Otp 
                </div>
            </div>}
            {isOtpSent && 
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <div className=''>Enter Otp Here</div>
                    <OTPInput onChange={(e)=>setUserEnteresOtp(e)} value={userEnteredOtp} className='flex justify-center' autoFocus OTPLength={4} inputClassName='border b-blue' otpType="number" disabled={false} secure />
                </div>
                <div onClick={verifyOTP} className='blue flex items-center gap-2 justify-center w-full text-center p-2 text-white rounded-md cursor-pointer'>
                    Login
                </div>
            </div>}
        </div>
    </div>
  )
}

export default TechnicalLogin