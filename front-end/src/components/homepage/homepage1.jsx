import React from 'react';
import { TypewriterEffect } from "../ui/typewriter-effect";
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
export default function TypewriterEffectDemo() {
  const words = [
    {
      text: "Welcome ",
    },
    {
      text: "to",
    },
    {
      text: "Complaint",
    },
    {
      text: "Portal",
    },
  ];

  return (
    <>
      <div className='bg-black font-Poppins text-white mx-auto py-5 flex justify-center items-center font-extrabold w-full sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl sm:justify-center '>Complaint Management System</div>
      <div className='bg-[#6E9794]  mt-10 grid grid-cols-6 grid-rows-3 gap-3 grid-flow-col px-10  sm:grid-cols-1 md:mt-2 sm:grid-rows-3  sm:gap-0 sm:mt-0 lg:mt-2 '>
        <TypewriterEffect className='text-[#1E2720] my-auto font-extrabold text-left col-span-2 sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl  ' words={words}  />
        <div className=' col-span-2 font-Poppins font-semibold'>
        Streamline complaints, track resolutions, and boost customer satisfaction with our user-friendly Complaint Management System. Elevate your customer service process effortlessly!
        </div>
        <button className='text-white bg-[#1E2720] font-Poppins mt-2 h-10 w-56 font-extrabold hover:bg-black px-8 sm:my-0 sm:mt-1'>
  <Link to='/homepage2' className="text-white">See More</Link>
</button>
        <div className="col-start-4 col-span-2 row-start-1 row-span-2 sm:hidden ">
          <img src="complaints.jpg"  alt="pic" className=" object-cover h-full " />
        </div>
        <div className="col-start-5 col-span-2 row-start-2 row-span-2 sm:hidden ">
          <img src="complaints1.webp"  alt="pic" className="object-cover h-full" />
        </div>
        {/* <div className="col-start-5 col-span-1 row-start-1 row-span-1 sm:hidden md:hidden  ">
          <img src="pic32.webp"  alt="pic" className="object-cover h-full" />
        </div> */}
      </div>

      <div className='bg-[#D9D9D9] mt-20 w-full h-[40vh] grid gap-2 grid-cols-3 grid-flow-row text-3xl font-extrabold font-Poppins bottom-0 sm:gap-0 sm:mt-0 sm:text-sm xl:gap-0 lg:gap-0 md:gap-0 md:mt-0 md:text-sm   '>
        <div className='my-auto px-5 '>24/7 service</div>
        <div className='my-auto'>100+ citizens satisfied</div>
        <div className='my-auto'>More than 100 complaints solved</div>
      </div>
      
       <div className='bg-[#1E2720]  col-span-3  text-[#FFFFFF] flex justify-center items-center font-Poppins text-xl'><FontAwesomeIcon icon={faCopyright} />
        All Rights reserved</div>
      
    </>
  );
}