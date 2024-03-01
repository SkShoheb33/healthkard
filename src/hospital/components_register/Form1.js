import React,{useEffect,useState} from 'react'
import { MdCancel } from "react-icons/md";

function Form1() {
  const [hospitalDetails, setHospitalDetails] = useState(() => {
    const storedHospitalDetails = localStorage.getItem('hospitalDetails');
    return storedHospitalDetails ? JSON.parse(storedHospitalDetails) : {};
  });

  const [daysAvailabilty, setDaysAvailabilty] = useState(() => {
    const storedHospitalDetails = localStorage.getItem('hospitalDetails');
    return storedHospitalDetails ? JSON.parse(storedHospitalDetails)['daysAvailabilty'] : { M: true, T: true, W: true, Th: true, F: true, Sa: false, Su: false };
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHospitalDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const storedHospitalDetails = JSON.parse(localStorage.getItem('hospitalDetails'));
    if (storedHospitalDetails && storedHospitalDetails.daysAvailabilty) {
      setDaysAvailabilty(storedHospitalDetails.daysAvailabilty);
    }
  }, [hospitalDetails]); // Include hospitalDetails in the dependency array

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


  const [gstFile, setGstFile] = useState(null);
  const [licenseFile, setLicenseFile] = useState(null);
  const handleGstFileSelect = (event) => {
    setGstFile(event.target.files[0]);
    console.log(event.target.files[0])
  };
  const handleLicenseFileSelect = (event) => {
    setLicenseFile(event.target.files[0]);
    console.log(event.target.files[0])
  };

  // Function to handle file upload
  // const handleUpload = () => {
  //   if (selectedFile) {
  //     // You can perform file upload logic here, such as sending the file to a server
  //     console.log('Uploading file:', selectedFile);
  //   } else {
  //     alert('Please select a file to upload.');
  //   }
  // };
  return (
    <div className=' md:w-4/5'>
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
        <label htmlFor="fileInput" className="hover:cursor-pointer blue text-white h-10 flex justify-center items-center rounded-md">
          <span>Upload GST File</span>
          <input type="file" id="fileInput" className="hidden" onChange={handleGstFileSelect} accept=".pdf"/>
        </label>
        {gstFile && <div className='text-xs border w-fit p-2 rounded-md bg-gray-200 flex gap-2 items-center'>{gstFile.name} <MdCancel className='hover:text-red-500 text-lg'/></div>}

        <div className="w-full">
          <div className="relative w-full min-w-[200px] h-10">
            <input name="licenseNumber" value={hospitalDetails.licenseNumber} onChange={handleInputChange} className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm p-5 rounded-[5px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">License Number
              </label>
          </div>
        </div>
        <label htmlFor="fileInput" className="hover:cursor-pointer blue text-white h-10 flex justify-center items-center rounded-md">
          <span>Upload License File</span>
          <input type="file" id="fileInput" className="hidden" onChange={handleLicenseFileSelect} accept=".pdf"/>
        </label>
        {licenseFile && <div className='text-xs border w-fit p-2 rounded-md bg-gray-200 flex gap-2 items-center'>{licenseFile.name} <MdCancel className='hover:text-red-500 text-lg'/></div>}
        <div className='flex flex-col gap-5 shadow-md p-2 lg:p-4 rounded-md'>
          <div className='text-xl lg:text-2xl font-semibold'>Please place the pin accurately at your outlet’s location on the map</div>
          <div className="w-full">
            <div className="relative w-full min-w-[200px] h-10">
              <input name="pinOrCity" value={hospitalDetails.pinOrCity} onChange={handleInputChange} className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter pin or city
              </label>
            </div>
          </div>  
          <div className='h-[300px] w-full bg-gray-200 justify-center items-center flex'>
              maps here
          </div>
        </div>
        <div className='w-full flex flex-col gap-4 p-2 lg:p-4 rounded shadow-md'>
          <div className='text-xl lg:text-2xl font-semibold'>Contact Number at Hospital</div>
          <div className='text-sm'>Your customer contact to this number</div>
          <div className='w-full flex items-center gap-1 lg:gap-6'>
            <div className='p-2 rounded-md'>+91</div>
            <div className="relative w-1/2 min-w-[200px] h-10">
              <input name="contactNumber" value={hospitalDetails.contactNumber} onChange={handleInputChange} className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter mobile number
              </label>
            </div>
            <div className='p-1 w-1/6 flex justify-center items-center blue text-white rounded-md'>Verify</div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-4 p-2 lg:p-4  rounded shadow-md'>
          <div className='text-xl lg:text-2xl font-semibold'>Hospital timings and services</div>
          <div className='flex items-center gap-2'>
            <div className='text-sm md:text-xl'>Availabe on</div>
            <div className='flex gap-1 m-1 p-1 md:gap-4'>
            {
              Object.keys(daysAvailabilty).map((data, index) => (
                
                <div onClick={()=>setDaysAvailabilty({...daysAvailabilty,[data]:!daysAvailabilty[data]})} key={index} className={`flex text-sm lg:text-md hover:cursor-pointer shadow-md h-[20px] lg:h-[30px] w-[20px] lg:w-[30px] p-3 text-white rounded-full justify-center items-center ${daysAvailabilty[data] ? 'green ' : 'bg-white text-black'}`}>
                  {data}
                </div>
              ))
            }
            
            </div>
          </div>
          <div className='flex flex-col mt-1 p-1 gap-1'>
            <div className='flex flex-col  gap-2 md:gap-8'>
              <div className='font-semibold'>Time</div>
              <div className='flex gap-2 justify-between w-1/2'>
                <div className=''>From  </div>
                <div className=''>
                  <input name="from" value={hospitalDetails.from} onChange={handleInputChange} type='time'/>
                </div>
              </div>
              <div className='flex gap-2 justify-between w-1/2'>
                <div className=''>To  </div>
                <div className=''>
                  <input name="to" value={hospitalDetails.to} onChange={handleInputChange} type='time'/>
                </div>
              </div>
            </div>
            <div className='text-green text-xs'>Note : This may vary according to the hospital</div>
          </div>
          <div className='flex flex-col gap-1 m-1 w-full'>
            <div className="relative w-full min-w-[200px] h-10">
              <input name="servicesOffered" value={hospitalDetails.servicesOffered} onChange={handleInputChange} className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-4 py-4.5 rounded-[7px]  focus:border-gray-900" placeholder="                                 
              Heart Ear Eyes etc ... " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Services offered
              </label>
            </div>
            <div className='text-green text-xs'>Note : Customer  can find services of your hospital based on this </div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-4  p-2 lg:p-4 rounded shadow-md'>
          <div className='text-xl lg:text-2xl font-semibold'>Hospital Owner Details</div>
          <div className='text-sm'>These will be used to share revenue related communications</div>
          <div className='w-full flex items-center gap-2 md:gap-6'>
            <div className='p-2'>+91</div>
            <div className="relative w-1/2 min-w-[200px] h-10">
              <input name="hospitalOwnerContactNumber" value={hospitalDetails.hospitalOwnerContactNumber} onChange={handleInputChange} className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-4 py-4.5 rounded-[7px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[12px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter mobile number
              </label>
            </div>
            <div className='p-1 w-1/6 flex justify-center items-center blue text-white rounded-md'>Verify</div>
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