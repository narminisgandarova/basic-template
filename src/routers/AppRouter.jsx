import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Service from '../pages/Service'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Header from '../components/Header'
import Footer from '../components/Footer'
const AppRouter = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/service' element={<Service/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/*' element={<NotFound/>}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default AppRouter