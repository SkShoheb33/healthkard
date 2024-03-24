import React, { useState } from 'react'
// import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import OTPInput from "otp-input-react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios'
import serverURL from '../../server-config'
function Login() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [isOtpSent,setIsOtpSent] = useState(false);
    const [email,setEmail] = useState("");
    const [emailError,setEmailError] = useState(false);
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
    const isAlreadyPresentInDatabase = async (email) => {
        try {
            console.log(`${serverURL}/checkMail/${email}`);
            const response = await axios.get(`${serverURL}/checkMail/${email}`);
            console.log(response.data);
            localStorage.setItem('hospitalId',response.data.hospitalId);
            return response.data.isverified === "2";
        } catch (error) {
            console.error("Error checking email in database:", error);
            return false; // Return false in case of error
        }
    };
    const sendOTP = async() => {
        if(sending)return;
        setSending(true);
        const isPresent = await isAlreadyPresentInDatabase(email);
        console.log(isPresent,email);
        if(!isPresent){
            toast.error("email doesn't exist.")
            navigate('../signup')
            return;
        }
        if (email === '') {
            setEmailError(true);
            return;
        }
        
        axios.post(`${serverURL}/sendOTP`, { to: email, subject: "Verification code from HealthKard login", otp: generateOtp() })
            .then((response) => {
                setIsOtpSent(true);
                setSending(false);
            })
            .catch((error) => {
                setSending(false);
            });
    }
    const verifyOTP = ()=>{
        setSending(true);
        console.log(otp,email)
        console.log(userEnteredOtp,otp)
        if(userEnteredOtp === otp){
            toast.success("Logged in successfully");
            navigate('/hospital/dashboard/')
            setSending(false);
        }else{
            toast.error("Please enter correct otp!");
            console.log("Wrong otp entered");
        }
    }
  return (
    <div div className='bg-[rgba(0,0,0,0.5)] relative h-[100vh] w-full flex justify-center items-center'>
        <ToastContainer />
        <div className='bg-white  shadow-md flex flex-col gap-6 w-2/3 lg:w-1/3 p-6 border rounded-md'>
            <div className='text-xl font-bold flex justify-between'>
                <div className=''>Login</div>
                <Link to='../'>
                    <RxCross2 className='hover:bg-gray-200 hover:cursor-pointer rounded-full p-1 text-3xl' />
                </Link>
            </div>
            {!isOtpSent&&<div className="relative w-full min-w-[200px] h-10">
                <input value={email} onChange={(e)=>{setEmail(e.target.value); setEmailError(false)}} autoFocus className="border- peer w-full h-full bg-transparent text-green-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-green-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-green-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />

                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-green-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-green-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-green-gray-200 peer-focus:before:!border-gray-900 after:border-green-gray-200 peer-focus:after:!border-gray-900">Enter Email here</label>
                {emailError&&<div className=' text-xs text-red-500 mb-2'>*Please enter email address</div>}
            </div>}
            {isOtpSent && <div className='flex flex-col gap-8'>
                <div className='text-sm '>Enter OTP received to <span className='font-semibold'>{email}</span></div>            
                <OTPInput value={userEnteredOtp} onChange={setUserEnteresOtp} autoFocus OTPLength={4} otpType="number" disabled={false} placeholder='____'  inputClassName='border-2 border-black rounded-md  ' className=' mx-auto flex justify-center w-full'/>
                <div className='text-sm'>Haven't received <span className='text-blue font-semibold hover:cursor-pointer'>Resend ?</span></div>
            </div>}
            {!isOtpSent&&<div onClick={sendOTP}  className='hover:cursor-pointer flex justify-center items-center gap-2 green text-white text-center rounded-md p-2'>
                 <ClipLoader
                        color={"#fff"}
                        loading={sending}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"/>
                Send OTP</div>}
            {isOtpSent && <div onClick={verifyOTP}  className='hover:cursor-pointer green text-white text-center rounded-md p-2'>
                 <ClipLoader
                        color={"#fff"}
                        loading={sending}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"/>
                Login</div>}
            <div className='text-sm'>New User? <Link to='../signup' className='text-blue'>Sign Up</Link></div>
            {/*<div className='flex w-full items-center justify-center gap-2'>
                <div className='bg-black w-1/3 border'></div>
                    or
                <div className='bg-black w-1/3 border'></div>
                
            </div>
            <div className='flex items-center justify-center gap-3 rounded-md border shadow-md p-2'>
                <FcGoogle/>
                <div className=''>Sign in with Google</div>
            </div>*/}

        </div>
    </div>
  )
}

export default Login