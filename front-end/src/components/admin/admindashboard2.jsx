import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
export default function AdminDashboard2() {
    const [state,setstate]=useState(false);

    function ToggleState(){
        setstate(prevState => !prevState);
        console.log('called')
    }
  return (
    <>
     
      {/* Sidebar */}
      <div className='bg-[#6E9794] font-Poppins text-white mx-auto py-3   flex justify-center items-center font-extrabold w-full sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl sm:top-0  sm:sticky sm:justify-center sm:w-screen'>Admin Dashboard
      <button onClick={ToggleState} className='absolute left-2 md:hidden xl:hidden lg:hidden 2xl:hidden '><FontAwesomeIcon icon={faBars} className='m-1/2' /></button></div>
      <div className={`bg-[#6E9794] w-[20%] fixed h-screen top-0 flex flex-col justify-center items-center min-w-fit ${state?'sm:visible  w-[20%] top-10 ' : 'sm:hidden'} ease-in-out duration-700 transition-opacity `}> 
  <div className='mb-4 sm:mb-2 w-full'> {/* Added class w-full */}
    <Link className='bg-[#D9D9D9] p-4 text-center shadow-md text-black font-bold  sm:px-8 hover:bg-gray-200 transition-colors block w-full'>Create Officer</Link> {/* Added class block w-full */}
  </div>
  <div className='mb-4 sm:mb-2 w-full'> {/* Added class w-full */}
    <Link className='bg-[#D9D9D9] p-4 text-center shadow-md text-black font-bold  sm:px-8 hover:bg-gray-200 transition-colors block w-full'>View All Officers</Link> {/* Added class block w-full */}
  </div>
  <div className='mb-4 sm:mb-2 w-full'> {/* Added class w-full */}
    <Link className='bg-[#D9D9D9] p-4 text-center shadow-md text-black font-bold  sm:px-8 hover:bg-gray-200 transition-colors block w-full'>View All Users</Link> {/* Added class block w-full */}
  </div>
</div>

      
      {/* Main Content */}
      <div className='bg-[#E3FEF7] h-screen w-screen flex flex-col items-center  mx-auto my-auto  min-w-fit sm:w-screen'>
       <div className='m-5'>
        <label className=' font-Poppins font-extrabold text-3xl text-[#6E9794]'>All Officers</label>
       </div>
       {/* Each officer div*/}
       <div className='bg-white font-Poppins  w-1/4 flex flex-row min-h-fit min-w-fit m-2 '>
        
        <FontAwesomeIcon  icon={faUser} className='h-full w-10' />
        <div className='flex flex-col ml-5  mx-10'>
            <p className='font-bold text-lg'>Officer abc</p>
            <p className='text-sm'>Email@gmail.com</p>
            <p>Resolved Complaints:50</p>
            
        </div>
        <button className='bg-[#D9D9D9] rounded-full text-sm px-5 font-bold hover:bg-slate-400 h-8 m-2 my-auto sm:px-2'>Delete</button>
       </div>
       
       
      </div>
      
    </>
  );
}
