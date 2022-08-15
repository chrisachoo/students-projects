import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { SignIn, SignUp } from './components/pages'
import './App.css'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
