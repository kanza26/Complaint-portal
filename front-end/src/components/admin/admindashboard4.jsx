import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function AdminDashboard4() {
    const [state,setstate]=useState(false);

    function ToggleState(){
        setstate(prevState => !prevState);
        console.log('called')
    }
  return (
    <>
     
      {/* Sidebar */}
      <div className='bg-[#6E9794] font-Poppins text-white py-3   flex justify-center items-center font-extrabold w-full sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl sm:top-0  sm:sticky sm:justify-center sm:w-screen'>Admin Dashboard
      <button onClick={ToggleState} className='absolute left-2 md:hidden xl:hidden lg:hidden 2xl:hidden '><FontAwesomeIcon icon={faBars} className='m-1/2' /></button>
      </div>
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
      <div className='bg-[#E3FEF7] h-full w-screen flex flex-col items-center min-h-fit  mx-auto my-auto  min-w-fit sm:w-screen'>
       <div className=' bg-black py-12 w-full flex justify-center  items-end'>
        <div className=' w-32 object-bottom left-auto mb-[-100px]'><img className='bg-red-200 rounded-full h-32 w-44 ' src='pic32.webp'></img></div>
       </div>
      <div className='mt-[10%] font-mono px-20 py-10 mx-auto sm:mt-[25%] text-left font-semibold text-2xl my-5'>
        <p>citizen name:abc</p>
        <p>citizen Email:abc</p>
        <p>citizen Phone Number:abc</p>
      </div>
      <span className='font-poppins font-extrabold text-lg mt-10'>All Complaints </span>
     
      <div className='m-2 bg-[#6E9794] px-10 py-10 mx-auto font-Poppins'>
        <p>complaint ID:abc</p>
        <p>complaint Subject:abc</p>
        <p>complaint Description:abc</p>
        <p>Pick Location:abc</p>
        <div><img src="pic32.webp" className='h-32 w-60 mt-[2%] shadow-2xl box-border'></img></div>
      </div>
       
      </div>
      
    </>
  );
}