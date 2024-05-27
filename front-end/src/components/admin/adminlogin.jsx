import React from 'react'

export default function AdminLogin(){
  return (
    <>

      <div className='bg-black text-white mx-auto py-5 flex justify-center items-center font-extrabold font-Poppins w-full sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl sm:justify-center relative'>
        <div>
          Complaint Management System
        </div>
      </div>

      <div className='bg-[#D9D9D9] w-1/4 min-w-fit flex flex-col justify-center items-center rounded-lg shadow-lg px-5 py-10 mx-auto my-auto mt-10 '>
  <div className='text-2xl font-bold mb-8'>Login</div>
  <div className='mb-2'>
    <label className='mr-2'>Email Address</label>
    <div>
    <input type='text' className='rounded-lg p-0 border-2 border-gray-400'></input>
    </div>
  </div>
  <div className='mb-6'>
    <label className='mr-2'>Password</label>
    <div>
      <input type='password' className='rounded-lg p-0 border-2 border-gray-400'></input>
    </div>
  </div>
  <button className='bg-[#6E9794] hover:bg-blue-700 text-white font-bold py-1 px-5 rounded'>Login</button>
</div>



      <div className='bg-[#1E2720] w-full text-[#FFFFFF] fixed bottom-0 flex justify-center items-center font-Poppins text-xl'>All Rights reserved</div>
    
    </>
  );
}
