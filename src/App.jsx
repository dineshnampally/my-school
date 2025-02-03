import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Components/Home'
import Events from './Components/Events'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Admin from './Components/Admin'
import AdminSignin from './Components/AdminSignin'
import Error from './Components/Error'
import ProtectedRoute from './ProtectedRoute'
import Announcements from './Components/Announcements'
import Footer from './Components/Footer'

const App = () => {
  const location= useLocation()
  const validRoutes = ['/', '/events', '/aboutus', '/announcements', '/adminsignin', '/admin'];
  const [authenticated,setAuthenticated]=useState(false)

  return (
    <>
      {/* hide nav bar when wrong route browsed*/}
      { validRoutes.includes(location.pathname) && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/announcements' element={<Announcements/>}/>
        <Route path='/adminsignin' element={<AdminSignin/>}/>
        {/* protected route*/}
        <Route path='/admin' element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App