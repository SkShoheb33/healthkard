import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './client/Home';
import HospitalDashboard from './hospital/HospitalDashboard';
import Form1 from './hospital/components_register/Form1';
import Form2 from './hospital/components_register/Form2';
import HospitalRegister from './hospital/HospitalRegister';
import Form3 from './hospital/components_register/Form3';
import HospitalCredentails from './hospital/HospitalCredentails';
import SignUp from './hospital/components/SignUp';
import Login from './hospital/components/Login';
import Dashboard from './hospital/components_dashboard/Dashboard';
import Profile from './hospital/components_dashboard/Profile';
import SuccessPopup from './hospital/components_register/SuccessPopup';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/hospital' element={<HospitalDashboard/>}>
          <Route index path='dashboard' element={<Dashboard/>}></Route>
          <Route index path='' element={<Dashboard/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
        </Route>
        <Route path='/auth' element={<HospitalCredentails/>}>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='login' element={<Login/>}/>
        </Route>
        <Route path='/hospitalRegister' element={<HospitalRegister/>}>
          <Route index path='hospitalDetails' element={<Form1/>}></Route>
          <Route path='doctorDetails' element={<Form2/>}></Route>
          <Route path='mediaDetails' element={<Form3/>}></Route>
          <Route path='success' element={<SuccessPopup/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
