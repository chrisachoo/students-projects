import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { SignIn, SignUp, Profile, LandingPage, Products, Detail, Cart, Reset } from './components/pages'
import { Footer, Navigation } from './components'
import { Dashboard } from './components/admin/index'
import './App.css'

function App() {

  let location = useLocation()
  const [malls, setMalls] = useState([])

  useEffect(() => {
    fetch('https://e-mall-backend.herokuapp.com/mall/get-malls')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw res
      }).then(data => {
        setMalls(data)
      })
  }, [])

  const Home = () => (
    <React.Fragment>
      <LandingPage data={malls} />
      <Footer />
    </React.Fragment>
  )

  return (
    <div className='app'>
      {
        location.pathname !== '/signin' && location.pathname !== '/signup' && 
        location.pathname !== '/admin/dashboard' && location.pathname !== '/reset-password' && <Navigation />
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product-details' element={<Detail />} />
        <Route path='/cart-items' element={<Cart />} />
        <Route path='/reset-password' element={<Reset />} />

        <Route path='/admin/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
