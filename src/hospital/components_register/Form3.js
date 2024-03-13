import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { RiImageAddLine } from "react-icons/ri";
import {ref, uploadBytesResumable, getDownloadURL, deleteObject}  from 'firebase/storage'
import {storage} from '../../firebase-config';
function Form3() {
    const [mediaDetails, setMediaDetails] = useState(() => {
        const storedMediaDetails = localStorage.getItem('mediaDetails');
        return storedMediaDetails ? JSON.parse(storedMediaDetails) : {
            logoURL:"",
            hospitalImageURL:"",
            videoURL:"",
            doctorImageURL:"",
            achivements:[],
            desc:""
        }
      });
    const [images, setImages] = useState(() => {
        const storedImages = localStorage.getItem('images');
        return storedImages? JSON.parse(storedImages) : [null,null,null,null];
    });
    const [progress,setProgress] = useState(0);
    // use effects
    useEffect(() => {
        localStorage.setItem('mediaDetails', JSON.stringify(mediaDetails));
        localStorage.setItem('images',JSON.stringify(images));
    }, [mediaDetails,images]);
    // upload delete functions
    const uploadImage = (selectedImage, field, index) => {
        if (selectedImage) {
            let temp = [...images];
            temp[index] = selectedImage.name;
            setImages(temp);
            const imageRef = ref(storage, 'Hospital/'+localStorage.getItem('hospital_id')+'/' + field + '/' + selectedImage.name);
            const uploadTask = uploadBytesResumable(imageRef, selectedImage);
            uploadTask.on('state_changed',(snapshot) => {
                    setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                },
                (error) => {
                    console.error('Error uploading image:', error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((imageUrl) => {
                        if(index!==4)
                            setMediaDetails({ ...mediaDetails, [field + 'URL']: imageUrl });
                        else{
                            let temp = mediaDetails.achivements;
                            temp.push(imageUrl);
                            setMediaDetails({...mediaDetails,achivements:temp});
                        }
                        setProgress(0);
                    });
                }
            );
        } else {
            alert('Please select an image to upload.');
        }
    };
    const deleteFile = (filePath,key,index) => {
        const fileRef = ref(storage, filePath);
        if(index>=4){
            deleteObject(fileRef).then((result) => {
                let temp = mediaDetails.achivements;
                temp.splice(index-4,1);
                setMediaDetails({...mediaDetails,[key]:temp});
                console.log('File deleted successfully');
            }).catch((err) => {
                console.error('Error deleting file:', err);
            });
            return;
        }
        let temp = [...images];
        temp[index] = null;
        setImages(temp);
        // Delete the file
        deleteObject(fileRef)
            .then(() => {
                setMediaDetails({...mediaDetails,[key]:""});
                console.log('File deleted successfully');
            })
            .catch((error) => {
                console.error('Error deleting file:', error);
            });
    };
    
  return (
    <div className='relative h-full lg:w-4/5  mx-auto'>
        <div className='h-full overflow-scroll noscroll  flex flex-col items-center '>
            <div className='text-2xl lg:text-4xl mt-7 font-medium w-full '>Media Details</div>
            <div className='flex flex-col gap-4 mt-7 w-full shadow-md p-8'>
                <div className='text-gray-400 text-center text-xl'>Hospital Logo will be displayed during searching and locating</div>
                <label id='logoBtn' htmlFor="logo" className="relative hover:cursor-pointer blue text-white h-10 flex justify-center items-center rounded-md">
                    <span>Upload Logo</span>
                    <input type="file" id="logo" className="hidden" onChange={(e) => uploadImage(e.target.files[0], 'logo',0)} accept="image/*"/>
                </label>
                {images[0] && <div className='flex gap-2 items-center bg-gray-200 w-fit p-1 rounded-md '>
                    <div>{images[0]}</div>
                    <RxCross2 onClick={()=>deleteFile(mediaDetails.logoURL,"logoURL",0)} className='hover:text-red-500 hover:cursor-pointer'/>
                </div>}
                <div className='text-gray-400 text-center mt-4 text-xl'>Hospital image will be used as a thumbnail in the banner</div>
                <label id="hospitalImageBtn" htmlFor="hospitalImage" className="hover:cursor-pointer blue text-white h-10 flex justify-center items-center rounded-md">
                    <span>Upload Hospital Image</span>
                    <input type="file" id="hospitalImage" className="hidden" onChange={(e) => uploadImage(e.target.files[0], 'hospitalImage',1)} accept="image/*"/>
                </label>
                {images[1] && <div className='flex gap-2 items-center bg-gray-200 w-fit p-1 rounded-md '>
                    <div>{images[1]}</div>
                    <RxCross2 onClick={()=>deleteFile(mediaDetails.hospitalImageURL,"hospitalImageURL",1)} className='hover:text-red-500 hover:cursor-pointer'/>
                </div>}
                <div className='text-gray-400 text-center mt-4 text-xl'>Hospital video will autoplay in the banner (Optional)</div>
                <label id="videoBtn" htmlFor="video" className="hover:cursor-pointer blue text-white h-10 flex justify-center items-center rounded-md">
                    <span>Upload Video</span>
                    <input type="file" id="video" className="hidden" onChange={(e) => uploadImage(e.target.files[0], 'video',2)}  accept="video/*"/>
                </label>
                {images[2] && <div className='flex gap-2 items-center bg-gray-200 w-fit p-1 rounded-md '>
                    <div>{images[2]}</div>
                    <RxCross2 onClick={()=>deleteFile(mediaDetails.videoURL,"videoURL",2)} className='hover:text-red-500 hover:cursor-pointer'/>
                </div>}
                <div className='text-gray-400 text-center mt-4 text-xl'>Doctor photo will be displayed in the description (Optional)</div>
                <label id="doctorImageBtn" htmlFor="doctorImage" className="hover:cursor-pointer blue text-white h-10 flex justify-center items-center rounded-md">
                    <span>Upload Doctor Image</span>
                    <input type="file" id="doctorImage" className="hidden" onChange={(e) => uploadImage(e.target.files[0], 'doctorImage',3)}  accept="image/*"/>
                </label>
                {images[3] && <div className='flex gap-2 items-center bg-gray-200 w-fit p-1 rounded-md '>
                    <div>{images[3]}</div>
                    <RxCross2 onClick={()=>deleteFile(mediaDetails.doctorImageURL,"doctorImageURL",3)} className='hover:text-red-500 hover:cursor-pointer'/>
                </div>}
                <div className='text-gray-400 text-center mt-4 text-xl'>Add more photos to show public (Optional)</div>
                <div className='flex flex-wrap'>
                    {mediaDetails.achivements.map((achiv,index)=>{
                        return(
                            <div  key={index} className='hover:bg-[rgba(0,0,0,0.5)] relative w-1/5 mx-2 hover:cursor-pointer border border-black shadow-md flex flex-col gap-2 items-center justify-center p-2 rounded-md'>
                                {/*<RxCross2 onClick={()=>deleteFile(achiv,"achivements",(4+index))} className='absolute text-white top-4 right-4 hover:text-red-500 hover:bg-gray-900 p-1 text-2xl rounded-full hover:cursor-pointer'/>*/}
                                <img src={achiv} alt='achiv' />
                            </div>
                        )
                    })}
                    <label className='w-1/5 hover:cursor-pointer border border-black shadow-md flex flex-col gap-2 items-center justify-center p-2 rounded-md'>
                        <RiImageAddLine className='text-4xl'/>
                        <div className=''>Add Image</div>
                        <input className='hidden' type='file' accept='image/*'  onChange={(e) => uploadImage(e.target.files[0], 'achivements',4)}/>
                    </label>
                </div>
                <textarea value={mediaDetails.desc} className='border mt-4 p-4' placeholder='Give a brief description about your hospital in 4 lines '  rows={5} onChange={(e)=>setMediaDetails({...mediaDetails,desc:e.target.value})}></textarea> 
            </div>
            
        </div>
        {
            (progress>0 && progress<100) && <div className='fixed h-full left-0 w-full green top-0 bottom-0 flex-col gap-3 text-white flex justify-center items-center lg:text-2xl text-md'>
                <div className=''>Please Wait uploading the content</div>
                <div className=''>{Math.floor(progress)}%</div>
                <div className="loader"></div>
            </div>
        }
</div>  
  )
}

export default Form3