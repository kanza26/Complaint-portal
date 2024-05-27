import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { useFormik } from 'formik';
import { validate } from '../../validation/validate';
import { registerUser } from '../../helper/helper';
import toast, { Toaster } from 'react-hot-toast';
import { converttobase64 } from '../../helper/convert';
export default function RegisterPage() {
  const [profilePicture,setProfilePicture]=useState('')
  const navigate=useNavigate();
  


  const handleFileChange = async (event) => {
    const picture = await converttobase64(event.target.files[0]);
    setProfilePicture(picture);
    
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      mobileno: '',
      profile: ''
    },
    validate,
    onSubmit:async values=>{
      values=Object.assign(values,{profile:profilePicture})
      console.log(values);
      let regpromise=registerUser(values);
      toast.promise(regpromise,{
        loading: 'Creating..',
        success:<b>Registered Successfully..!</b>,
        error:<b>Could not register</b>

      });
      regpromise.then(()=>{navigate('/citizenlogin')})


  },
  });

  return (
    <form
    className='bg-[#D9D9D9] h-[90%] min-h-fit  rounded-lg w-[40%] md:w-[50%] sm:w-[90%] max-w-[600px] md:h-auto my-20 mx-auto flex flex-grow flex-col
     justify-around items-center p-2 opacity-75'
    
    onSubmit={formik.handleSubmit}
  >
    <div className="application min-h-fit h-3/4">
      <Helmet>
        <style>{`
            body {
              background: linear-gradient(45deg, #263E39, #32514D, #3E647F, #4C7690, #5A8AA2);
              background-size: 300% 300%;
              animation: gradientAnimation 4s ease infinite;
            }

            @keyframes gradientAnimation {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
      </Helmet>
    
     
        <h1 className='text-4xl font-bold text-center mb-10'>Create An Account</h1>

        <div className='flex flex-col w-3/4'>
          <label htmlFor="name" className='font-Poppins font-bold text-left mb-2'>
            Name
          </label>
          <input type="text"  onChange={formik.handleChange} value={formik.values.name} name="name" className="w-full rounded border border-gray-400 py-2 px-3"></input>
        </div>
        {formik.errors.name ? <div className='text-left w-3/4 text-red-500 font-Poppins'>{formik.errors.name}</div> : null}


        <div className='flex flex-col w-3/4'>
          <label htmlFor="email" className='font-Poppins font-bold text-left mb-2'>
            Email Address
          </label>
          <input type="email" onChange={formik.handleChange} value={formik.values.email}  name="email" className="w-full rounded border border-gray-400 py-2 px-3"></input>
        </div>
        {formik.errors.email ? <div className='text-left w-3/4 text-red-500 font-Poppins'>{formik.errors.email}</div> : null}


        <div className='flex flex-col w-3/4'>
          <label htmlFor="password" className='font-Poppins font-bold text-left mb-2'>
            Password
          </label>
          <input type='password' onChange={formik.handleChange} value={formik.values.password}  name="password" className="w-full rounded border border-gray-400 py-2 px-3"></input>
        </div>
        {formik.errors.password ? <div className='text-left w-3/4 text-red-500 font-Poppins'>{formik.errors.password}</div> : null}


        <div className='flex flex-col w-3/4'>
          <label htmlFor="mobileno" className='font-Poppins font-bold text-left mb-2'>
            Mobile Number
          </label>
          <input type="number" onChange={formik.handleChange} value={formik.values.mobileno}  name="mobileno" className="w-full rounded border border-gray-400 py-2 px-3"></input>
        </div>
        {formik.errors.mobileno ? <div className='text-left w-3/4 text-red-500 font-Poppins'>{formik.errors.mobileno}</div> : null}



        <div className='flex flex-col w-3/4'>
          <label htmlFor="profile" className='font-Poppins font-bold text-left mb-2'>
            Set Your Profile Picture
          </label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
            <img src={(profilePicture)} alt="Profile" className="w-20 h-20 mx-auto mt-2" />
        </div>
        
        <button type='submit' className="bg-[#6E9794] hover:bg-[#70aca8] text-white font-bold py-2 px-4 rounded w-1/2 md:w-1/2 mt-4">
          Register
        </button>
        <div className="mt-4 text-center">
          Already Have An Account? <a href="#" className='text-blue-600 underline'>Sign In</a>
        </div>
        </div>
        <Toaster />
      </form>
   
    
  );
}

