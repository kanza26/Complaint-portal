import React from 'react';
import { Link } from 'react-router-dom';
export default function AdminDashboard() {
  return (
    <>
     
      {/* Sidebar */}
      <div className='bg-[#6E9794] font-Poppins text-white mx-auto py-3   flex justify-center items-center font-extrabold w-full sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl sm:top-0  sm:sticky sm:justify-center sm:w-screen'>Admin Dashboard</div>
      <div className='bg-[#6E9794] w-[20%] fixed h-screen top-0 flex flex-col justify-center items-center min-w-fit sm:w-screen sm:h-1/4 sm:min-h-fit  sm:top-10 sm:sticky'>
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
      <div className='bg-[#E3FEF7] h-screen w-screen flex flex-col justify-center items-center mx-auto  min-w-fit sm:w-screen'>
        <div className='text-black font-Poppins text-3xl mb-10 mt-5 font-bold sm:text-lg'>Create a new Officer</div>
        <div className='text-black font-Poppins text-lg mb-2 sm:text-sm'>
          <label htmlFor='assignID' className='mr-2'>Assign ID:</label>
          <input type='text' id='assignID' className='px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-red-600' />
        </div>
        <div className='text-black font-Poppins text-lg mb-2 sm:text-sm'>
          <label htmlFor='password' className='mr-2'>Password:</label>
          <input type='password' id='password' className='px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-red-600' />
        </div>
        <div>
          <button className='bg-[#D9D9D9] text-black font-semibold px-6 py-2 m-5 rounded-md shadow-md hover:bg-[#817f7f] transition-colors'>Create</button>
        </div>
      </div>
    </>
  );
}
