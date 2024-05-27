import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TypewriterEffectDemo from './components/homepage/homepage1';
import HomePage2 from './components/homepage/homepage2';
import AdminLogin from './components/admin/adminlogin';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TypewriterEffectDemo />} />
        <Route path='/homepage2' element={<HomePage2 />} />
        <Route path='/adminlogin' element={<AdminLogin/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

