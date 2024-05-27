import React from 'react';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
export default function HomePage2() {
  return (
    <>
    
      <div className='bg-black text-white mx-auto py-5 flex justify-center items-center font-extrabold font-Poppins w-full sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl sm:justify-center relative'>
        <div>
          Complaint Management System
        </div>
      </div>
      
      
      <div className='flex justify-center h-1/2 w-1/4 ml-[35%] mt-20 font-extrabold min-w-fit font-Poppins text-4xl text-white mx-auto'>
        <p>Who are you?</p>
      </div>

      <div className='flex bg-[#1E2720] text-white hover:bg-green-900 font-Poppins justify-center h-1/2 w-1/4 ml-[35%] mt-5 rounded-sm shadow-xl mx-auto min-w-fit'>
        <button>
          <Link to='/citizenlogin'>Citizen</Link>
        </button>
      </div>
      <div className='flex bg-[#1E2720] text-white hover:bg-green-900 font-Poppins justify-center h-1/2 w-1/4 ml-[35%] mt-5 rounded-sm shadow-xl mx-auto min-w-fit'>
        <button>Officer</button>
      </div>
      <div className='flex bg-[#1E2720] text-white hover:bg-green-900 font-Poppins justify-center h-1/2 w-1/4 ml-[35%] mt-5 rounded-sm shadow-xl mx-auto min-w-fit'>
        <button>Administrator</button>
      </div>
      
      <div className='bg-[#1E2720] w-full text-[#FFFFFF] fixed bottom-0 flex justify-center items-center font-Poppins text-xl'>
        <FontAwesomeIcon icon={faCopyright} />
        All Rights reserved</div>
    </>
  );
}
