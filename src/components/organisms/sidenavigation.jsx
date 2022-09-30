import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useSignout } from '../hooks/useSignout'
import { RiCloseFill, RiMenu2Fill } from 'react-icons/ri'
import { IoMdCart, IoMdSettings } from 'react-icons/io'
import { FaSignOutAlt, FaSignInAlt } from 'react-icons/fa'
import './organisms.css'

const SideNavigation = () => {

  const [toggle, setToggle] = useState()
  const { signout } = useSignout()
  const { user } = useAuthContext()

  const handleSignout = () => {
    signout()
  }

  let navigate = useNavigate()
  const toSignin = () => {
    navigate('signin')
  }

  const checkSignin = () => {
    !user ? navigate('/signin') : navigate('/profile')
  }

  return (
    <nav>
      {toggle
        ? <RiCloseFill style={{display: 'none'}} color='#eee' size={20} onClick={() => setToggle(false)} />
        : <RiMenu2Fill onClick={() => setToggle(true)} />
      }
      {toggle && (
        <div className='sidenav' style={{ width: setToggle ? '250px' : '0' }}>
          <span className='closebtn' onClick={() => setToggle(false)}><RiCloseFill/></span>
          <li ><p><IoMdCart />Cart</p></li>
          <li onClick={() => checkSignin()}><p><IoMdSettings />Profile</p></li>
          {!user && (
            <li onClick={() => toSignin()}><p><FaSignInAlt />SignIn</p></li>
          )}
          {user && (
            <li onClick={handleSignout}><p><FaSignOutAlt />Logout</p></li>
          )}
        </div>
      )}
    </nav>
  )
}

export default SideNavigation