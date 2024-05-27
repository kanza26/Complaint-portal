import React from 'react';
import { Link } from 'react-router-dom';
export default function Officer6() {
  return (
    <>
     
      {/* Sidebar */}
      <div className='bg-[#6E9794] font-Poppins text-white mx-auto py-3   flex justify-center items-center font-extrabold w-full sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl sm:top-0  sm:sticky sm:justify-center sm:w-screen md:ml-28'>Officer Dashboard</div>
      <div className='bg-[#6E9794] w-[20%] fixed h-screen top-0 flex flex-col justify-center items-center min-w-fit sm:w-screen sm:h-1/4 sm:min-h-fit  sm:top-10 sm:sticky'>
  <div className='mb-4 sm:mb-2 w-full'> {/* Added class w-full */}
    <Link className='bg-[#D9D9D9] p-4 text-center shadow-md text-black font-bold  sm:px-8 hover:bg-gray-200 transition-colors block w-full'>View Pending Complaints</Link> {/* Added class block w-full */}
  </div>
  <div className='mb-4 sm:mb-2 w-full'> {/* Added class w-full */}
    <Link className='bg-[#D9D9D9] p-4 text-center shadow-md text-black font-bold  sm:px-8 hover:bg-gray-200 transition-colors block w-full'>View Feedback</Link> {/* Added class block w-full */}
  </div>
  
</div>

      
      {/* Main Content */}
      <div className='bg-[#E3FEF7] h-screen w-screen  flex flex-col justify-center items-center   min-w-fit md:ml-32'>
      <div className="flex flex-col mx-auto w-[75%] sm:w-screen">
                            <p className="font-Poppinsfont-bold text-[#6E9794] mx-auto font-bold sm:text-2xl text-3xl my-2">Complaint#001: </p>
                            
                            <div className=' flex flex-col w-[65%] h-[30%] mx-auto text-xl sm:text-sm '>
                                <div className=' flex flex-col text-black font-Poppins gap-10 sm:gap-6 '>
                                <p>
                                    <b>User Email:</b> user@gmail.com
                                </p>
                                <p>
                                    <b>Complaint Subject: </b> Road Accident On University Road
                                </p>
                                <p>
                                    <b>User Feedback:</b> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt laboriosam illum dolorem accusantium perferendis, ipsa numquam similique aperiam in dolorum debitis reiciendis sed deleniti doloribus officia quae animi suscipit quasi explicabo. Sapiente eum voluptatum dolore nostrum repudiandae nobis ad repellat quasi, et laudantium animi obcaecati quibusdam saepe beatae labore dignissimos?
                                </p>
                        
        </div>
        </div>

        </div>
      </div>
    </>
  );
}