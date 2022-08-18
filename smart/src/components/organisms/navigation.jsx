import { useState } from 'react'
import { IoMdCart, IoMdSettings } from 'react-icons/io'
import { FaSignOutAlt } from 'react-icons/fa'
import './organisms.css'

const Navigation = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <section className='navigation'>
      <div className='navigation__content'>
        <p>Lifestyle Store</p>
        <div className='navigation__content-search'>
          <input type='search' placeholder='Search' />
        </div>
      </div>
      <div className='navigation__buttons'>
        <li><p><IoMdCart/>Cart</p></li>
        <li><p><IoMdSettings/>Settings</p></li>
        <li><p><FaSignOutAlt/>Logout</p></li>
      </div>
    </section>
  )
}

export default Navigation