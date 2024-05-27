import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
import HomePage2 from './components/homepage/homepage2.jsx';
import TypewriterEffectDemo from './components/homepage/homepage1.jsx'
import AdminLogin from './components/admin/adminlogin.jsx';
import AdminDashboard from './components/admin/admindashboard.jsx';
import Officer1 from './components/officer/officer1.jsx';
import Officer2 from './components/officer/officer2.jsx';
import Officer6 from './components/officer/officer6.jsx';
import AdminDashboard2 from './components/admin/admindashboard2.jsx';
import AdminDashboard3 from './components/admin/admindashboard3.jsx';
import AdminDashboard4 from './components/admin/admindashboard4.jsx';
import Officer3 from './components/officer/officer3.jsx';
import Officer5 from './components/officer/officer5.jsx';
import Officer4 from './components/officer/officer4.jsx';
import LoginPage from './components/citizen/login.jsx';
import RegisterPage from './components/citizen/register-page.jsx';
import Update_Profile from './components/citizen/update-profile.jsx';
import Feature1 from './components/citizen/user-dashboard-feature1.jsx';
import Feature2 from './components/citizen/user-dashboard-feature-2.jsx';
import Feature3 from './components/citizen/user-dashboard-feature-3.jsx';
import Feedback from './components/citizen/user-feedback.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter >
  <Routes>


  <Route path='/citizenlogin' element={<LoginPage/>}/>
  <Route path='/registerpage' element={<RegisterPage/>}/>
  <Route path='/updateprofile' element={<Update_Profile/>}/>
  <Route path='/feature1' element={<Feature1/>}/>
  <Route path='/feature2' element={<Feature2/>}/>
  <Route path='/feature3' element={<Feature3/>}/>
  <Route path='/feedback' element={<Feedback/>}/>

  <Route path='/' element={<TypewriterEffectDemo/>}/>
  <Route path='/homepage2' element={<HomePage2/>}/>
  <Route path='/adminlogin' element={<AdminLogin/>}/>
  <Route path='/admindashboard' element={<AdminDashboard/>}/>
  <Route path='/admindashboard2' element={<AdminDashboard2/>}/>
  <Route path='/admindashboard3' element={<AdminDashboard3/>}/>
  <Route path='/admindashboard4' element={<AdminDashboard4/>}/>

  <Route path='/officer1' element={<Officer1/>}/>
  <Route path='/officer2' element={<Officer2/>}/>
  <Route path='/officer3' element={<Officer3/>}/>
  <Route path='/officer4' element={<Officer4/>}/>
  <Route path='/officer5' element={<Officer5/>}/>
  <Route path='/officer6' element={<Officer6/>}/>
  
 
  

  </Routes>
</BrowserRouter>
  
)
