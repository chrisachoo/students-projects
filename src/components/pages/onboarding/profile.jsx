import { useState } from 'react'
import Personal from './personal'
import Address from '../create/address'
import { useAuthContext } from '../../hooks/useAuthContext'
import { Input } from '../..'
import address from '../create/address'

const Profile = () => {
  const { user } = useAuthContext()
  const address = {
    strName: '6 Kraft Street',
    suburb: 'Roodepan',
    city: 'Kimberley',
    country: 'South Africa'
  }

  // if ('zipCode' in address === true) {
  //   alert(`The specified key exists in the object.`)
  // } else {
  //   alert(`The specified key doesn't exist in the object.`)
  // }

  return (
    <section className='section__padding profile'>
      <div className='profile__information'>
        <Personal />
        <Address />
        {!'zipCode' in address && (<Input label={`Full Address`}
          placeholder={`6 Kraft Street, Roodepan, Kimberley, South Africa`}
          type={`text`}
          name={`address`}
        />)}
      </div>
    </section>
  )
}

export default Profile