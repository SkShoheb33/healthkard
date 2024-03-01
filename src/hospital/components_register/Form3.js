import React, { useState } from 'react'
import addImage from '../../assets/addimage.png'
function Form3() {

    const [selectedImage, setSelectedImage] = useState(null);

    // Function to handle file selection
    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        // Check if a file was selected
        if (file) {
            // Check if the selected file is an image
            if (file.type.startsWith('image/')) {
                setSelectedImage(file);
            } else {
                // Display an error message if the selected file is not an image
                alert('Please select an image file (e.g., JPG, PNG)');
            }
        }
    };



  return (
    <div className='h-full overflow-scroll noscroll'>
    
    <div className='text-2xl lg:text-4xl mt-7 font-medium '>Media Details</div>
    <div className='flex flex-col gap-4 mt-7 md:w-3/4 lg:p-8'>
      
      <div className='text-gray-400 text-center text-md lg:text-xl'>Hospital Logo will be displayed during searching and locating  </div>
      {/*<div className='blue text-white h-10 flex  justify-center items-center rounded-md'>Upload Hospital Logo</div>*/}  
      
      <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 b-blue border-dashed rounded-lg cursor-pointer hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-blue " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p className="mb-2 text-sm text-blue"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-blue">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
          </label>
      </div> 

      <div className='text-gray-400 text-center mt-4 text-md lg:text-xl'>Hospital image will be used as a thumbnail in the banner  </div>
      {/*<div className='blue text-white h-10 flex justify-center items-center rounded-md'>Upload Hospital Image</div> */} 
      
      <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 b-blue border-dashed rounded-lg cursor-pointer hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-blue " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p className="mb-2 text-sm text-blue"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-blue">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
          </label>
      </div> 

      <div className='text-gray-400 text-center mt-4 text-md lg:text-xl'>Hospital video will autoplay in the banner   </div>
      
      <div className="flex items-center justify-center w-full">
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 b-blue border-dashed rounded-lg cursor-pointer hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-blue " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p className="mb-2 text-sm text-blue"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-blue">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
      </label>
      </div> 

      <div className='text-gray-400 text-center mt-4 text-md lg:text-xl'>Doctor photo will be displayed in the description</div>
      
      <div className="flex items-center justify-center w-full">
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 b-blue border-dashed rounded-lg cursor-pointer hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-blue " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p className="mb-2 text-sm text-blue"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-blue">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
      </label>
      </div> 
      <div className='text-gray-400 text-center mt-4 text-md lg:text-xl'>Add more achievments</div>

      <div className='flex flex-wrap b-blue p-4 rounded-lg'>
            <div className="rounded-md border border-black bg-gray-50 p-4 shadow-md w-36">
                <label htmlFor="upload" className="flex flex-col items-center gap-2 cursor-pointer">
                    {!selectedImage && <img src={addImage} alt={addImage} width="40px" />}
                    {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt={selectedImage} width="40px" />}
                    <span className="text-gray-600 font-medium text-sm">Upload Image</span>
                </label>
                <input id="upload" type="file" accept="image/*" className="hidden" onChange={handleImageSelect} />
            </div>
        </div>
      <textarea className='border mt-4 p-4' placeholder='Give a brief description about your hospital in 4 lines '  rows={5}></textarea> 

    </div>
    </div>
  )
}

export default Form3