import React from 'react'
import './style.css'
import profile from '../../assets/profile.png'
import nodatafound from '../../assets/datanotfound.gif'

function Table(props) {
  
  return (
    <div className='lg:w-3/5 w-full h-[80vh] overflow-y-scroll noscroll lg:p-2 '>
      <div className='w-full lg:text-[14px] text-md h-full'>
        
        {props.data.map((row,index)=>{
          return(
            <div key={index} className={index%2===0?'tr h-[6vh] hover:bg-[#00BFA8] items-center hover:font-bold hover:text-white hover:scale-[102%] hover:shadow-xl  cursor-pointer flex rounded ':'h-[6vh] hover:bg-[#00BFA8] items-center hover:font-bold hover:text-white hover:scale-[102%] hover:shadow-xl  cursor-pointer flex rounded '}>
              <div className='flex items-center justify-center h-[4vh] w-1/3  lg:w-1/6'><img className='aspect-square h-full ' src={profile} alt=""/></div>
              <div className='w-1/3 lg:w-1/6 text-center items-center flex'>{row.id}</div>
              <div className='w-1/3 lg:w-1/6 text-center items-center flex'>{row.name}</div>
              <div className='w-1/6 text-center items-center hidden lg:flex justify-center'>{row.gender}</div>
              <div className='w-1/6 text-center items-center hidden lg:flex justify-center'>{row.age}</div>
              <div className='w-1/6 text-center items-center hidden md:flex'>{row.phNumber}</div>
            </div>
          )
        })}
        {
          props.data.length === 0 &&<div className='flex justify-center items-center h-full'>
            <img src={nodatafound} width='400px' alt='no data found'/>
          </div>
        }
      </div>
    </div>
  )
}

export default Table



// <tr>
//           {props.columns.map((column,index)=>{
//             return(
//               <th key={index}>{column}</th>
//             )
//           })}
//         </tr>