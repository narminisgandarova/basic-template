import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Service from '../pages/Service'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Store from '../pages/Store'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Project from '../pages/Project'
const AppRouter = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/service' element={<Service/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/*' element={<NotFound/>}></Route>
    <Route path='/store' element={<Store/>}></Route>
    <Route path='/project' element={<Project/>}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default AppRouter