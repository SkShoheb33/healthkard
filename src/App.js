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
import Techniqal from './techniqal/Techniqal';
import Pending from './techniqal/components/Pending';
import HospitalDetails from './techniqal/components/HospitalDetails';
import DoctorDetails from './techniqal/components/DoctorDetails';
import MediaDetails from './techniqal/components/MediaDetails';
import EditHospitalDetails from './techniqal/components/EditHospitalDetails';
import DenyHospital from './techniqal/components/DenyHospital';
import Approved from './techniqal/components/Approved';
import UsersInfo from './techniqal/components/UsersInfo';
import HospitalEditPersonal from './hospital/components_dashboard/HospitalEditPersonal'
import HospitalHospitalDetails from './hospital/components_dashboard/HospitalHospitalDetails'
import HospitailDoctorDetails from './hospital/components_dashboard/HospitailDoctorDetails'
import HospitalMediaDetails from './hospital/components_dashboard/HospitalMediaDetails'
import TechnicalLogin from './techniqal/credentails.js/TechnicalLogin';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/hospital' element={<HospitalDashboard/>}>
          <Route index path='dashboard' element={<Dashboard/>}></Route>
          <Route index path='' element={<Dashboard/>}></Route>
          <Route path='profile' element={<Profile/>}>
            <Route path='hospitalDetails' element={<HospitalHospitalDetails/>}></Route>
            <Route path='doctorDetails' element={<HospitailDoctorDetails/>}></Route>
            <Route path='mediaDetails' element={<HospitalMediaDetails/>}></Route>
            <Route path='edit' element={<HospitalEditPersonal/>}></Route>
          </Route>
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
        <Route path='/techniqal' element={<Techniqal/>}>
          <Route path='login' element={<TechnicalLogin/>}></Route>
          <Route path='pending' element={<Pending/>}>
            <Route path='hospitalDetails' element={<HospitalDetails/>}></Route>
            <Route path='doctorDetails' element={<DoctorDetails/>}></Route>
            <Route path='mediaDetails' element={<MediaDetails/>}></Route>
            <Route path='edit' element={<EditHospitalDetails/>}></Route>
            <Route path='deny' element={<DenyHospital/>}></Route>
          </Route>
          <Route path='approved' element={<Approved/>}>
            <Route path='hospitalDetails'  element={<HospitalDetails/>}></Route>
            <Route path='doctorDetails' element={<DoctorDetails/>}></Route>
            <Route path='mediaDetails' element={<MediaDetails/>}></Route>
            <Route path='edit' element={<EditHospitalDetails/>}></Route>
            <Route path='deny' element={<DenyHospital/>}></Route>
          </Route>
          <Route path='users' element={<UsersInfo/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
