import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useSignout } from '../hooks/useSignout'
import { IoMdCart, IoMdSettings } from 'react-icons/io'
import { FaSignOutAlt, FaSignInAlt } from 'react-icons/fa'
import './organisms.css'
import SideNavigation from './sidenavigation'

const Navigation = () => {

  const { signout } = useSignout()
  const { user } = useAuthContext()

  const handleSignout = () => {
    signout()
    navigate('/')
  }

  let navigate = useNavigate()
  const toSignin = () => {
    navigate('signin')
  }

  const checkSignin = () => {
    !user ? navigate('/signin') : navigate('/profile')
  }

  const displayCartItems = () => {
    navigate('/cart-items')
  }

  return (
    <section className='navigation'>
      <div className='navigation__content'>
        <p onClick={() => navigate('/')}>Sharp Witted</p>
        <div className='navigation__content-search'>
          <input type='search' placeholder='Search' />
        </div>
      </div>
      <div className='navigation__buttons'>
        <li onClick={displayCartItems}><p><IoMdCart />Cart</p></li>
        <li onClick={() => checkSignin()}><p><IoMdSettings />Settings</p></li>
        {!user && (
          <li onClick={() => toSignin()}><p><FaSignInAlt />SignIn</p></li>
        )}
        {user && (
          <li onClick={handleSignout}><p><FaSignOutAlt />Logout</p></li>
        )}
      </div>
      <div className='mobile-container'>
        <SideNavigation />
      </div>
    </section>
  )
}

export default Navigation