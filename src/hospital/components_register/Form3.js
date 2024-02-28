import React from 'react'

function Form3() {
  return (
    <div className='h-full overflow-scroll noscroll'>
    
    <div className='text-4xl mt-7 font-medium '>Media Details</div>
    <div className='flex flex-col gap-4 mt-7 md:w-3/4 p-8'>
      
      <div className='text-gray-400 text-center text-xl'>Hospital Logo will be displayed during searching and locating  </div>
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

      <div className='text-gray-400 text-center mt-4 text-xl'>Hospital image will be used as a thumbnail in the banner  </div>
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

      <div className='text-gray-400 text-center mt-4 text-xl'>Hospital video will autoplay in the banner   </div>
      
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

      <div className='text-gray-400 text-center mt-4 text-xl'>Doctor photo will be displayed in the description</div>
      
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

      <textarea className='border mt-4 p-4' placeholder='Give a brief description about your hospital in 4 lines '  rows={5}></textarea> 

    </div>
    </div>
  )
}

export default Form3