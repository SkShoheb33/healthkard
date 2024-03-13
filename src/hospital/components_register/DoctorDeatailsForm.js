import React, { useEffect, useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../../firebase-config';
import { RxCross2 } from 'react-icons/rx';
import PhoneInput from 'react-phone-input-2';

function DoctorDeatailsForm({index,doctor}) {
  const [doctorDetails, setDoctorDetails] = useState(doctor);
  // const [progress, setProgress] = useState(0);
  const [doctorPdfs, setDoctorPdfs] = useState(() => {
    let storedDoctorsPdfs = localStorage.getItem('doctorPdfs');
    return storedDoctorsPdfs ? JSON.parse(storedDoctorsPdfs) : [];
  });
  useEffect(() => {
    const storedDoctorList = JSON.parse(localStorage.getItem('doctorList')) || [];
    storedDoctorList[index] = doctorDetails;
    localStorage.setItem('doctorList', JSON.stringify(storedDoctorList));
  }, [doctorDetails, index]);

  const uploadImage = (selectedImage, field) => {
    if (selectedImage) {
        const imageRef = ref(storage, 'Hospital/'+localStorage.getItem('hospital_id')+'/' + field + '/' + selectedImage.name);
        const uploadTask = uploadBytesResumable(imageRef, selectedImage);
        
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Handle upload progress if needed
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                console.error('Error uploading image:', error);
            },
            () => {
                // Handle successful upload
                getDownloadURL(uploadTask.snapshot.ref).then((imageUrl) => {
                    // Update doctorDetails state with the image URL
                    setDoctorDetails((prevState) => ({
                        ...prevState,
                        [field + 'URL']: imageUrl,
                    }));
                    let temp =[...doctorPdfs];
                    temp[index] = selectedImage.name;
                    setDoctorPdfs(temp);
                    localStorage.setItem('doctorPdfs',JSON.stringify(temp));
                    console.log(temp);
                });
            }
        );
        
    } else {
        alert('Please select an image to upload.');
    }
};




  const deleteFile = () => {
    console.log(index);
    const fileRef = ref(storage, doctorDetails.doctorLicenseURL);
    const storedDoctorsPdfs = JSON.parse(localStorage.getItem('doctorPdfs')) || [];
    storedDoctorsPdfs[index] = null;
    localStorage.setItem('doctorPdfs', JSON.stringify(storedDoctorsPdfs));
    setDoctorPdfs(storedDoctorsPdfs);
    deleteObject(fileRef)
      .then(() => {
        setDoctorDetails({ ...doctorDetails, doctorLicenseURL: '' });
        console.log('File deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting file:', error);
      });
  };

  return (
    <div className='mt-6 mb-6'>
    
      <div className='w-full p-3  mt-10 flex flex-col gap-8'>
        <div className="w-full">
          <div className="relative w-full min-w-[200px] h-10">
            <input value={doctorDetails.name} autoFocus onChange={(e)=>setDoctorDetails({...doctorDetails,name:e.target.value})} className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-md p-5 rounded-[5px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Doctor Full Name
              </label>
          </div>
        </div>  
        <div className="w-full">
          <div className="relative w-full min-w-[200px] h-10">
            <input value={doctorDetails.email} onChange={(e)=>setDoctorDetails({...doctorDetails,email:e.target.value})} className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-md p-5 rounded-[5px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Doctor Email Address
              </label>
          </div>
        </div>  
        <div className="w-full">
          <div className="relative w-full min-w-[200px] h-10">
            <input value={doctorDetails.qualification} onChange={(e)=>setDoctorDetails({...doctorDetails,qualification:e.target.value})} className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-md p-5 rounded-[5px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Qulaification and Speacialist in
              </label>
          </div>
        </div>
        <div className="w-full">
          <div className="relative w-full min-w-[200px] h-10">
            <input value={doctorDetails.lisenceNumber} onChange={(e)=>setDoctorDetails({...doctorDetails,lisenceNumber:e.target.value})} className="border- peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-md p-5 rounded-[5px]  focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">License Number
              </label>
          </div>
        </div>
        {!doctorPdfs[index] && <label id="doctorLicenseBtn" htmlFor="doctorLicense" className="gap-2   doctorLicenseBtn hover:cursor-pointer blue text-white h-10 flex justify-center items-center rounded-md">
            <span>Upload License File</span>
            <input type="file"  id="doctorLicense" onChange={(e) => uploadImage(e.target.files[0], 'doctorLicense')}  accept=".pdf"/>
        </label>}
        {doctorPdfs[index] &&  <div className='flex gap-2 items-center bg-gray-200 w-fit p-1 rounded-md '>
                <div>{doctorPdfs[index]}</div>
                <RxCross2 onClick={()=>deleteFile()} className='hover:text-red-500 hover:cursor-pointer'/>
          </div>}
        <div className='w-full flex-col  flex items-center gap-2 md:gap-2'>
            <PhoneInput
                country={'in'}
                name="contactNumber"
                value={doctorDetails.number}
                onChange={(e)=>setDoctorDetails({...doctorDetails,number:e})}
              />
          </div>
      </div>
      <div className='border-gray-200 h-[1px] border-2 '></div>
    </div>
  )
}

export default DoctorDeatailsForm