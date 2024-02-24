import React from 'react'
import './style.css'
import profile from '../../assets/profile.png'

function Table(props) {
  
  return (
    <div className='md:w-3/5 w-full h-[70vh] md:h-[80vh] overflow-y-scroll noscroll md:p-2 '>
      <div className='w-full md:text-[14px] text-md'>
        
        {props.data && props.data.map((row,index)=>{
          return(
            <div key={index} className={index%2===0?'tr h-[6vh] hover:bg-[#00BFA8] items-center hover:font-bold hover:text-white hover:scale-[102%] hover:shadow-xl  cursor-pointer flex rounded ':'h-[6vh] hover:bg-[#00BFA8] items-center hover:font-bold hover:text-white hover:scale-[102%] hover:shadow-xl  cursor-pointer flex rounded '}>
              <div className='flex items-center justify-center h-[4vh] w-1/3  md:w-1/6'><img className='aspect-square h-full ' src={profile} alt=""/></div>
              <div className='w-1/3 md:w-1/6 text-center items-center flex'>{row.id}</div>
              <div className='w-1/3 md:w-1/6 text-center items-center flex'>{row.name}</div>
              <div className='w-1/6 text-center items-center hidden md:flex justify-center'>{row.gender}</div>
              <div className='w-1/6 text-center items-center hidden md:flex justify-center'>{row.age}</div>
              <div className='w-1/6 text-center items-center hidden md:flex'>{row.phNumber}</div>
            </div>
          )
        })}
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