import React from 'react'

function Form3() {
  return (
    <>
    
    <div className='text-4xl mt-7 font-medium'>Media Details</div>
    <div className='flex flex-col gap-4 mt-7 md:w-3/4 shadow-md p-8'>
      
      <div className='text-gray-400 text-center text-xl'>Hospital Logo will be displayed during searching and locating  </div>
      <div className='blue text-white h-10 flex  justify-center items-center rounded-md'>Upload Hospital Logo</div>  
      <div className='text-gray-400 text-center mt-4 text-xl'>Hospital image will be used as a thumbnail in the banner  </div>
      <div className='blue text-white h-10 flex justify-center items-center rounded-md'>Upload Hospital Image</div>  
      <div className='text-gray-400 text-center mt-4 text-xl'>Hospital video will autoplay in the banner   </div>
      <div className='blue text-white h-10 flex justify-center items-center rounded-md'>Upload Hospital Video</div>  
      <div className='text-gray-400 text-center mt-4 text-xl'>Doctor photo will be displayed in the description</div>
      <div className='blue text-white h-10 flex  justify-center items-center rounded-md'>Upload Doctor Photo</div> 
      <textarea className='border mt-4 p-4' placeholder='Give a brief description about your hospital in 4 lines '  rows={5}></textarea> 

    </div>
    </>
  )
}

export default Form3