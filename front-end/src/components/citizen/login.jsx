import React, { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { useFormik } from 'formik';
import { emailstore } from '../../../store/store';
import { loginverify } from '../../helper/helper';
import toast, { Toaster } from 'react-hot-toast';
export default function LoginPage() {
  const navigate=useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit:async values=>{
      emailstore.setState({ email: values.email });
      console.log(emailstore.getState().email)
      console.log(values);
      let loginpromise=loginverify(values);
      toast.promise(loginpromise,{
        loading: 'loading..',
        success:<b>Successful login..!</b>,
        error:<b>Could not login</b>

      });
      loginpromise.then(()=>{navigate('/feature1')})
  },
  });
  return (
    <div className="application">
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
      <div className="flex flex-col items-center justify-center min-h-screen">
        <form className='bg-[#D9D9D9] rounded-lg w-[90%] md:w-[50%] max-w-[600px] h-auto my-20 mx-auto flex flex-col justify-around items-center p-6 opacity-75' onSubmit={formik.handleSubmit}>
          <h1 className='text-4xl font-bold text-center mb-10'>Login</h1>
          <div className='flex flex-col w-3/4' >
            <label htmlFor="email" className='font-Poppins font-bold text-left mb-2'>Email Address</label>
            <input type="email" onChange={formik.handleChange} value={formik.values.email}  name="email" className="w-full rounded border border-gray-400 py-2 px-3"></input>
          </div>
          <div className='flex flex-col w-3/4'>
            <label htmlFor="password" className='font-Poppins font-bold text-left mb-2'>Password</label>
            <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} className="w-full rounded border border-gray-400 py-2 px-3" />
          </div>
          <div className="mt-4 text-center">
            Forgot Password?<a href="#" className="text-blue-500 underline"> Reset Through Email</a>
          </div>
          <button type="submit" className="bg-[#6E9794] hover:bg-[#70aca8] text-white font-bold py-2 px-4 rounded w-1/2 md:w-1/2 mt-4">Login</button>
          <div className="mt-4 text-center">
            Don't Have An Account? <Link to='/registerpage' className='text-blue-500'>Register</Link>
          </div>
        </form>
        
      </div>
      <Toaster/>
    </div>
  );
}



