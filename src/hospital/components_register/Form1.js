import React,{useEffect,useState} from 'react';
import {ref, uploadBytesResumable, getDownloadURL, deleteObject}  from 'firebase/storage'
import {auth, storage} from '../../firebase-config';
import { RxCross2 } from "react-icons/rx";
import OTPInput from "otp-input-react";
import PhoneInput from 'react-phone-input-2'
import ClipLoader from "react-spinners/ClipLoader";
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import UploadSplashScreen from '../components/UploadSplashScreen';
function Form1() {
  const [hospitalDetails, setHospitalDetails] = useState(() => {
    const storedHospitalDetails = localStorage.getItem('hospitalDetails');
    return storedHospitalDetails ? JSON.parse(storedHospitalDetails) : {
      daysAvailabilty: {
        M: true,
        T: true,
        W: true,
        Th: true,
        F: true,
        Sa: true,
        Su: true
    },
      from: '08:00',
      gstNumber: '',
      hospitalGSTFile: '',
      hospitalLegalName: '',
      hospitalLicense: '',
      hospitalNumber: '',
      hospitalOwnerContactNumber: '',
      hospitalOwnerEmail: '',
      hospitalOwnerFullName: '',
      hospitalTradeName: '',
      licenseNumber: '',
      address: {
        lat:'',
        lng:'',
        street:'',
        landmark:'',
        city:'',
        state:'',
        country:'',
        code:''
      },
      servicesOffered: '',
      to: '20:00'
      };
  });
  const [daysAvailabilty, setDaysAvailabilty] = useState(() => {
    const storedHospitalDetails = localStorage.getItem('hospitalDetails');
    return JSON.parse(storedHospitalDetails) && JSON.parse(storedHospitalDetails)['daysAvailabilty'] ? JSON.parse(storedHospitalDetails)['daysAvailabilty'] : 
      { M: true, T: true, W: true, Th: true, F: true, Sa: false, Su: false };
  });
  const [fileNames, setFileNames] = useState(() => {
    let storedFilesNames = localStorage.getItem('fileNames');
    return storedFilesNames ? JSON.parse(storedFilesNames) : [null, null];
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHospitalDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // use effect sections  
  useEffect(() => {
    const storedHospitalDetails = JSON.parse(localStorage.getItem('hospitalDetails'));
    if (storedHospitalDetails && storedHospitalDetails.daysAvailabilty) {
      setDaysAvailabilty(storedHospitalDetails.daysAvailabilty);
    }
  }, [hospitalDetails]); 

  useEffect(() => {
    const storedHospitalDetails = JSON.parse(localStorage.getItem('hospitalDetails'));
    if (storedHospitalDetails) {
      storedHospitalDetails.daysAvailabilty = daysAvailabilty;
      localStorage.setItem('hospitalDetails', JSON.stringify(storedHospitalDetails));
    }
  }, [daysAvailabilty]);

  useEffect(() => {
    localStorage.setItem('hospitalDetails', JSON.stringify(hospitalDetails));
  }, [hospitalDetails]);
  useEffect(()=>{
    document.getElementById('recaptcha1').style.display='none';
    document.getElementById('recaptcha2').style.display='none';
    const storedHospitalDetails = JSON.parse(localStorage.getItem('hospitalDetails'));
    
    if(storedHospitalDetails.hospitalNumber){
      setOtp1({otp:'',flag:false,verified:true})
    }
    if(storedHospitalDetails.hospitalOwnerContactNumber){
      setOtp2({otp:'',flag:false,verified:true})
    }
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setHospitalDetails({...hospitalDetails,address:{...hospitalDetails.address,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }});
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  },[]);
  const [progress,setProgress] = useState(0);
  // upload and delete
  const uploadPdf = (selectedPdf,field,index) => {
      if (selectedPdf) {
          // console.log(field+'/'+selectedPdf.name);
          const imageRef = ref(storage,'HealthKard/'+ field+'/'+selectedPdf.name);
          const uploadTask = uploadBytesResumable(imageRef, selectedPdf);
          uploadTask.on('state_changed',
          (snapshot) => {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                  setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                  return;
              },
              (error) => {
                  // Handle unsuccessful uploads
                  console.error('Error uploading image:', error);
              },
              () => {
                  // Handle successful uploads on complete
                  getDownloadURL(uploadTask.snapshot.ref).then((imageUrl) => {
                    setFileNames(prevFileNames => {
                        const temp = [...prevFileNames];
                        temp[index] = selectedPdf.name;
                        localStorage.setItem('fileNames', JSON.stringify(temp));
                        setProgress(0)
                        return temp;
                      });
                      setHospitalDetails((prevState) => ({
                        ...prevState,
                        [field]: imageUrl,
                      }));
                  });
              }
          );
      } else {
          alert('Please select an image to upload.');
      }
      setProgress(0);
  };
  const deleteFile = (filePath,index) => {
    const fileRef = ref(storage, filePath);
    // Delete the file
    deleteObject(fileRef)
        .then(() => {
            setFileNames(prevFileNames => {
                const temp = [...prevFileNames];
                temp[index] = null; 
                localStorage.setItem('fileNames', JSON.stringify(temp)); 
                return temp;
            });
            if(index===0)
              setHospitalDetails({...hospitalDetails,hospitalGSTFile:""});
            else
              setHospitalDetails({...hospitalDetails,hospitalLicense:""});

        })
        .catch((error) => {
            console.error('Error deleting file:', error);
        });
};

 // opt's section here
 const [ownerPhone,setOwnerPhone] = useState(null);
 const [hospitalPhone,setHospitalPhone] = useState(null);
 const [otp1,setOtp1] = useState({otp:'',flag:false,verified:false});
 const [otp2,setOtp2] = useState({otp:'',flag:false,verified:false});
 const [loading1,setLoading1] = useState(false); 
 const [loading2,setLoading2] = useState(false); 
 const [user1,setuser1] = useState(null);
 const [user2,setuser2] = useState(null);
  const handleSendOTP = async (u)=>{
    try{
      if(u===1){
        setLoading1(true);
        document.getElementById("recaptcha1").style.display = "block";
        const recaptcha1 = new RecaptchaVerifier(auth,"recaptcha1",{});
        const confirmation1 = await signInWithPhoneNumber(auth,'+'+hospitalPhone,recaptcha1);  
        console.log(confirmation1)
        if(confirmation1){
          document.getElementById('recaptcha1').style.display = "none";
          setOtp1({...otp1,flag:true});
          setuser1(confirmation1);
          setLoading1(false);
          return;
        }      
      }else{
        setLoading2(true)
        document.getElementById("recaptcha2").style.display = "block";
        const recaptcha2 = new RecaptchaVerifier(auth,"recaptcha2",{});
        const confirmation2 = await signInWithPhoneNumber(auth,'+'+ownerPhone,recaptcha2);
        if(confirmation2){
              document.getElementById('recaptcha2').style.display = "none";
              setOtp2({...otp2,flag:true});
              setuser2(confirmation2);
              setLoading2(false);
              return;
          }
      }
    }catch (error){
      console.log("Error while sending otp",error);
    }
  }
 const handleVerifyOTP = async(u)=>{
   try{
     if(u===1){
      setLoading1(true);
       await user1.confirm(otp1.otp);
       setOtp1({...otp1,flag:false,verified:true})
       setHospitalDetails((prevState) => ({
        ...prevState,
        hospitalNumber: hospitalPhone,
      }));
      setLoading1(false);
     }else{
      setLoading2(true);
       await user2.confirm(otp2.otp);
       setOtp2({...otp2,flag:false,verified:true})
       setHospitalDetails((prevState) => ({
      ...prevState,
      hospitalOwnerContactNumber: ownerPhone,
    }));
    setLoading2(false);
     }
     return;
   }catch(error){
      toast.error("Please re-enter the correct otp",{transition: Bounce});
     console.log("Error while verifying otp",error);
     setLoading1(false);
     setLoading2(false);
   }
 }


  return (
    <div className='relative  lg:w-4/5 mx-auto'>
      {progress!==0 && <UploadSplashScreen progress={progress}/>}
      <div className='text-2xl lg:text-4xl mt-7 font-medium'>Hospital Details</div>
      <div className='w-full p-2 flex flex-col mt-10 gap-8'>
        <div className="w-full">
          <div className="relative w-full min-w-[200px] h-10">
            <input name="hospitalLegalName" value={hospitalDetails.hospitalLegalName} onChange={handleInputChange} autoFocus className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-md p-5 rounded-[5px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-2 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Hospital Legal Name
              </label>
          </div>
        </div>  
        <div className="w-full">
          <div className="relative w-full min-w-[200px] h-10">
            <input name="hospitalTradeName" value={hospitalDetails.hospitalTradeName} onChange={handleInputChange} className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm p-5 rounded-[5px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Hospital Trade Name
              </label>
          </div>
        </div>  
        <div className="w-full">
          <div className="relative w-full min-w-[200px] h-10">
            <input name="gstNumber" value={hospitalDetails.gstNumber} onChange={handleInputChange} className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm p-5 rounded-[5px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">GST Number
              </label>
          </div>
        </div>
        {!fileNames[0] && <label htmlFor="hospitalGSTFile" id='hospitalGSTFileBtn' className="hover:cursor-pointer blue text-white h-10 flex justify-center items-center rounded-md">
          <span>Upload GST File</span>
          <input type="file" id="hospitalGSTFile" className="hidden" onChange={(e)=>uploadPdf(e.target.files[0],'hospitalGSTFile',0)} accept=".pdf"/>
        </label>}
        {fileNames[0] && <div className='flex gap-2 items-center bg-gray-200 w-fit p-1 rounded-md '>
            <div>{fileNames[0]}</div>
            <RxCross2 onClick={()=>deleteFile(hospitalDetails.hospitalGSTFile,0)} className='hover:text-red-500 hover:cursor-pointer'/>
        </div>}
        <div className="w-full">
          <div className="relative w-full min-w-[200px] h-10">
            <input name="licenseNumber" value={hospitalDetails.licenseNumber} onChange={handleInputChange} className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm p-5 rounded-[5px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">License Number
              </label>
          </div>
        </div>
        {!fileNames[1] && <label htmlFor="hospitalLicense" id='hospitalLicenseBtn' className="hover:cursor-pointer blue text-white h-10 flex justify-center items-center rounded-md">
          <span>Upload License File</span>
          <input type="file" id="hospitalLicense" className="hidden" onChange={(e)=>uploadPdf(e.target.files[0],'hospitalLicense',1)} accept=".pdf"/>
        </label>}
        {fileNames[1] && <div className='flex gap-2 items-center bg-gray-200 w-fit p-1 rounded-md '>
            <div>{fileNames[1]}</div>
            <RxCross2 onClick={()=>deleteFile(hospitalDetails.hospitalLicense,1)} className='hover:text-red-500 hover:cursor-pointer'/>
        </div>}
        <div className='flex flex-col gap-5 shadow-md p-2 lg:p-4 rounded-md'>
          <div className='text-xl lg:text-2xl font-semibold'>Please Enter hospital location details.</div>
          <div className="w-full flex flex-wrap gap-4 justify-between">
            <div className="relative w-5/12 min-w-[200px] h-10 ">
              <input name="street" value={hospitalDetails.address.street} onChange={(e)=>setHospitalDetails({...hospitalDetails,address:{...hospitalDetails.address,street:e.target.value}})} className="border peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter Street address
              </label>
            </div>
            <div className="relative w-5/12 min-w-[200px] h-10 ">
              <input name="landmark" value={hospitalDetails.address.landmark} onChange={(e)=>setHospitalDetails({...hospitalDetails,address:{...hospitalDetails.address,landmark:e.target.value}})} className="border peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter Land Mark
              </label>
            </div>
            <div className="relative w-5/12 min-w-[200px] h-10 ">
              <input name="city" value={hospitalDetails.address.city} onChange={(e)=>setHospitalDetails({...hospitalDetails,address:{...hospitalDetails.address,city:e.target.value}})} className="border peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter City
              </label>
            </div>
            <div className="relative w-5/12 min-w-[200px] h-10 ">
              <input name="state" value={hospitalDetails.address.state} onChange={(e)=>setHospitalDetails({...hospitalDetails,address:{...hospitalDetails.address,state:e.target.value}})} className="border peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter State
              </label>
            </div>
            <div className="relative w-5/12 min-w-[200px] h-10 ">
              <input name="country" value={hospitalDetails.address.country} onChange={(e)=>setHospitalDetails({...hospitalDetails,address:{...hospitalDetails.address,country:e.target.value}})} className="border peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter Country
              </label>
            </div>
            <div className="relative w-5/12 min-w-[200px] h-10 ">
              <input name="code" value={hospitalDetails.address.code} onChange={(e)=>setHospitalDetails({...hospitalDetails,address:{...hospitalDetails.address,code  :e.target.value}})} className="border peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter Postal code
              </label>
            </div>
          </div>  
        </div>
        <div className='w-full flex flex-col gap-4 p-2 lg:p-4 rounded shadow-md'>
          <div className='text-xl lg:text-2xl font-semibold'>Contact Number at Hospital</div>
          <div className='text-sm'>Your customer contact to this number</div>
          <div className='w-full flex items-center gap-1 lg:gap-6 flex-col justify-start '>
            <PhoneInput
                country={'in'}
                name="contactNumber"
                value={hospitalDetails.hospitalNumber}
                onChange={phone=>setHospitalPhone(phone)}
                disabled={otp1.verified}
              />
              {otp1.flag&&<OTPInput value={otp1.otp}  onChange={(e)=>setOtp1({otp:e,flag:true})} autoFocus OTPLength={6} inputClassName='border b-blue' otpType="number" disabled={false} secure />}
              
            {!otp1.flag && !otp1.verified && <div onClick={()=>handleSendOTP(1)} className='p-2 w-fit gap-3 flex justify-center items-center blue text-white rounded-md hover:cursor-pointer'>
            {<ClipLoader
                color={"#fff"}
                loading={loading1}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />}SEND OTP</div>}
            {otp1.flag && !otp1.verified && <div onClick={()=>handleVerifyOTP(1)} className='p-2 w-fit gap-3 flex justify-center items-center blue text-white rounded-md hover:cursor-pointer'>
            {<ClipLoader
                color={"#fff"}
                loading={loading1}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />}VERIFY</div>}
            {otp1.verified && <div className='p-2 w-fit gap-3 flex justify-center items-center text-green rounded-md hover:cursor-pointer text-xl font-bold'>Verified</div>}
            <div id="recaptcha1" className=''></div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-4 p-2 lg:p-4  rounded shadow-md'>
          <div className='text-xl lg:text-2xl font-semibold'>Hospital timings and services</div>
          <div className='flex items-center gap-2'>
            <div className='text-sm md:text-xl'>Availabe on</div>
            <div className='flex gap-1 m-1 p-1 md:gap-4'>
            {
              Object.keys(daysAvailabilty).map((data, index) => 
                <div onClick={()=>setDaysAvailabilty({...daysAvailabilty,[data]:!daysAvailabilty[data]})} key={index} className={`flex text-sm lg:text-md hover:cursor-pointer shadow-md h-[20px] lg:h-[30px] w-[20px] lg:w-[30px] p-3 rounded-full justify-center items-center ${daysAvailabilty[data] ? 'green text-white' : 'bg-white text-black'}`}>
                  {data}
                </div>
              )
            }
            </div>
          </div>
          <div className='flex flex-col mt-1 p-1 gap-1'>
            <div className='flex flex-col  gap-2 md:gap-8'>
              <div className='font-semibold'>Time (Optional)</div>
              <div className='flex gap-2 justify-between w-1/2'>
                <div className=''>From  </div>
                <div className=''>
                  <input name="from" value={hospitalDetails.from||"08:00"} onChange={handleInputChange} type='time'/>
                </div>
              </div>
              <div className='flex gap-2 justify-between w-1/2'>
                <div className=''>To  </div>
                <div className=''>
                  <input name="to"  value={hospitalDetails.to||"20:00"} onChange={handleInputChange} type='time'/>
                </div>
              </div>
            </div>
            <div className='text-green text-xs'>Note : This may vary according to the hospital</div>
          </div>
          <div className='flex flex-col gap-1 m-1 w-full'>
            <div className="relative w-full min-w-[200px] h-10">
              <input name="servicesOffered" value={hospitalDetails.servicesOffered} onChange={handleInputChange} className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-4 py-4.5 rounded-[7px]  focus:border-gray-900" placeholder="" />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Services offered
              </label>
            </div>
            <div className='text-green text-xs'>Note : Customer  can find services of your hospital based on this </div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-4  p-2 lg:p-4 rounded shadow-md'>
          <div className='text-xl lg:text-2xl font-semibold'>Hospital Owner Details</div>
          <div className='text-sm'>These will be used to share revenue related communications</div>
          <div className='w-full flex items-center gap-1 lg:gap-6 flex-col justify-start '>
            <PhoneInput
                country={'in'}
                name="hospitalOwnerContactNumber"
                value={hospitalDetails.hospitalOwnerContactNumber}
                inputProps={{disabled:!otp2.flag&&otp2.verified}}
                onChange={phone=>setOwnerPhone(phone)}
              />
              {otp2.flag&&<OTPInput value={otp2.otp} onChange={(otp)=>setOtp2({otp:otp,flag:true})} autoFocus OTPLength={6} inputClassName='border b-blue' otpType="number" disabled={false} secure />}

            {!otp2.flag  && !otp2.verified && <div onClick={()=>handleSendOTP(2)} className='p-2 w-fit gap-3 flex justify-center items-center blue text-white rounded-md hover:cursor-pointer'>
            {<ClipLoader
                color={"#fff"}
                loading={loading2}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />}SEND OTP</div>}
              
            {otp2.flag && !otp2.verified && <div onClick={()=>handleVerifyOTP(2)} className='p-2 w-fit gap-3 flex justify-center items-center blue text-white rounded-md hover:cursor-pointer'>
            {<ClipLoader
                color={"#fff"}
                loading={loading2}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />}VERIFY</div>}
            {otp2.verified && <div className='p-2 w-fit gap-3 flex justify-center items-center text-green rounded-md hover:cursor-pointer text-xl font-bold'>Verified</div>}
            <div id="recaptcha2" className=''></div>
          </div>
          <div className='flex-col  my-4 w-full md:flex-row  gap-4'>
            <div className="relative min-w-[200px] h-10">
              <input name="hospitalOwnerFullName" value={hospitalDetails.hospitalOwnerFullName} onChange={handleInputChange} className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-4 py-4.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Hospital owner Full Name
              </label>
            </div>
            <div className="relative min-w-[200px] mt-4 h-10">
              <input name="hospitalOwnerEmail" value={hospitalDetails.hospitalOwnerEmail} onChange={handleInputChange} className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Hospital Owner Email 
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form1