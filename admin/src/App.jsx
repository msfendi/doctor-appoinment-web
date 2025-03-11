import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointements from './pages/Admin/AllAppointements';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';

const App = () => {

  const {authtoken} = useContext(AdminContext)

  return authtoken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointements />} />
          <Route path='/add-doctor' element={<AddDoctor />} />
          <Route path='/doctors-list' element={<DoctorsList />} />
        </Routes>
      </div>
    </div>
  ) :
    <>
      <Login />
      <ToastContainer />
    </>
}

export default App