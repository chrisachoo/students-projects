import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { SignIn, SignUp, Profile } from './components/pages'
import './App.css'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
