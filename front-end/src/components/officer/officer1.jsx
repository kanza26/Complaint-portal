import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
export default class Officer1 extends Component {
  render() {
    return (
      <>
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
        <div className="min-h-screen flex justify-center items-center">
          <div className="bg-[#D9D9D9] font-Poppins py-9 px-8 sm:px-12 md:px-20 lg:px-28 xl:px-36 rounded-3xl shadow-lg text-center w-6/12 sm:w-10/12 md:w-8/12 lg:w-6/12">
            <h1 className='text-xl font-bold mt-6 mb-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Create an Account</h1>
            <label htmlFor="name" className="block text-lg mb-1 mt-3 text-left font-bold ">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-black-200 focus:border-black-500 sm:text-sm mb-6"
              placeholder="Enter your name"
            />

            <label htmlFor="email" className="block text-lg mb-1 mt-3 text-left font-bold ">
              Email Address:
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-black-200 focus:border-black-500 sm:text-sm mb-6"
              placeholder="Enter your email"
            />

            <label htmlFor="oid" className="block text-lg mb-1 mt-2 text-left font-bold">
              Organization ID:
            </label>
            <input
              type="text"
              id="oid"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-black-200 focus:border-black-500 sm:text-sm mb-12"
              placeholder="Enter your Organization ID"
            />

            <div className="mt-4">
              <button className="bg-[#6E9794] hover:bg-[#587f7c] text-white font-bold py-2 px-8 text-xl rounded-sm">
                Register
              </button>
            </div>
            <div className="mt-4 font-bold">
              Already have an account? <a className='text-blue-900' href="/">Sign In</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}