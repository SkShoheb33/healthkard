import React, {  useState } from 'react';
// import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import OTPInput from "otp-input-react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';

function SignUp() {
    const navigate = useNavigate();
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [hospitalError, setHospitalError] = useState(false);
    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState("");
    const [hospitalName, setHospitalName] = useState("");
    const [userEnteredOtp,setUserEnteresOtp] = useState(null);
    const [sending,setSending] = useState(false);
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
        if (hospitalName === '') {
            setHospitalError(true);
            return;
        }
        
        if (email === '') {
            setEmailError(true);
            return;
        }
        localStorage.setItem('hospitalName',hospitalName);
        setSending(true);
        axios.post('http://localhost:3002/sendOTP', { to: email, subject: "Verification code from HealthKard", otp: generateOtp() })
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
            navigate('/hospitalRegister/hospitalDetails/')
            localStorage.setItem('email',email);
        }else{
            console.log("Wrong otp entered");
        }
        setSending(false);
    }

    return (
        <div className='bg-[rgba(0,0,0,0.5)] relative h-[100vh] w-full flex justify-center items-center'>
            <div className='bg-white shadow-md flex flex-col gap-6 w-2/3 lg:w-1/3 p-6 border rounded-md'>
                <div className='text-xl font-bold flex justify-between'>
                    <div>Sign Up</div>
                    <Link to='../'>
                        <RxCross2 className='hover:bg-gray-200 hover:cursor-pointer rounded-full p-1 text-3xl' />
                    </Link>
                </div>
                {!isOtpSent && (
                    <div className='w-full flex flex-col gap-6'>
                        <div className="relative w-full min-w-[200px] h-10">
                            <input autoFocus onChange={(e) => { setHospitalName(e.target.value); setHospitalError(false) }} className="border-2 peer w-full h-full bg-transparent text-green-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-green-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-green-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />
                            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-green-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-green-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-green-gray-200 peer-focus:before:!border-gray-900 after:border-green-gray-200 peer-focus:after:!border-gray-900">Name of Hospital</label>
                            {hospitalError && <div className='text-xs text-red-500 mb-2'>*Please enter hospital name</div>}
                        </div>
                        <div className="relative w-full min-w-[200px] h-10">
                            <input onChange={(e) => { setEmail(e.target.value); setEmailError(false) }} className="border-2 peer w-full h-full bg-transparent text-green-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-green-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-green-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />
                            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-green-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-green-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-green-gray-200 peer-focus:before:!border-gray-900 after:border-green-gray-200 peer-focus:after:!border-gray-900">Email</label>
                            {emailError && <div className='text-xs text-red-500 mb-2'>*Please enter email address</div>}
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-500">I agree to the <a className="font-bold text-blue" href='https://firebasestorage.googleapis.com/v0/b/healthkard.appspot.com/o/HealthKard%2FHealthkard%20Hospital%20TCs.pdf?alt=media&token=e807125d-6ffa-4d4c-b2d5-41ac0cd66c27' target='__blank'> terms and conditions</a> of HealthKard</label>
                        </div>
                    </div>
                )}
                {isOtpSent && (
                    <div className='flex gap-4 flex-col'>
                        <div className=''>Enter OTP</div>
                        <OTPInput value={userEnteredOtp} onChange={setUserEnteresOtp} autoFocus OTPLength={4} otpType="number" disabled={false} inputClassName='border-2 border-black rounded-md ' className='w-full flex justify-between' />
                        <div className='text-sm px-2'>Enter OTP received at <div className='font-bold'>{email}</div></div>
                    </div>
                )}
                {!isOtpSent && <div onClick={sendOTP} className='hover:cursor-pointer flex gap-2 items-center justify-center green text-white text-center rounded-md p-2'>
                    <ClipLoader
                        color={"#fff"}
                        loading={sending}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"/>
                    Send Otp
                </div>}
                {isOtpSent && <div onClick={verifyOTP} className='hover:cursor-pointer flex gap-2 items-center justify-center green text-white text-center rounded-md p-2'>
                    <ClipLoader
                        color={"#fff"}
                        loading={sending}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"/>
                    Verify & Sign Up
                </div>}
                {/*<div className='flex w-full items-center justify-center gap-2'>
                    <div className='bg-black w-1/3 border'></div>
                    or
                    <div className='bg-black w-1/3 border'></div>
                </div>
                <div className='flex items-center justify-center gap-3 rounded-md border shadow-md p-2'>
                    <FcGoogle />
                    <div className=''>Sign in with Google</div>
                </div>*/}
            </div>
        </div>
    );
}

export default SignUp;
