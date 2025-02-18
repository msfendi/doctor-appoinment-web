import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppoinment from './pages/MyAppoinment'
import Appoinment from './pages/Appoinment'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors:speciality' element={<Doctors/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/appoinment:docId' element={<Appoinment/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/my-appoinments' element={<MyAppoinment/>} />
      </Routes>
    </div>
  )
}

export default App