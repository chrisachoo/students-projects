import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { SignIn, SignUp, Profile, LandingPage } from './components/pages'
import { Footer, Navigation } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <div className='app'>
      {
        location.pathname !== '/signin' && location.pathname !== '/signup' && <Navigation />
      }
      <Routes>
        <Route path='/' component={<LandingPage/>} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      {
        location.pathname !== '/signin' && location.pathname !== '/signup' && <Footer />
      }
    </div>
  )
}

export default App
