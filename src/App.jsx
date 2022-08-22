import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { SignIn, SignUp, Profile, LandingPage } from './components/pages'
import { Footer, Navigation } from './components'
import './App.css'

function App() {

  let location = useLocation()

  const Home = () => (
    <React.Fragment>
      <LandingPage />
      <Footer />
    </React.Fragment>
  )

  return (
    <div className='app'>
      {
        location.pathname !== '/signin' && location.pathname !== '/signup' && <Navigation />
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
