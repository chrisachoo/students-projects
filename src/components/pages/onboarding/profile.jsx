import { useState } from 'react'
import Personal from './personal'
import Address from '../create/address'

const Profile = () => {

    const [active, setIsActive] = useState('personalDetails')

    return (
        <section className='section__padding profile'>
            <div className='profile__left'>
                <h2>Customer Information</h2>
                <ul onClick={() => setIsActive('personalDetails')}><p>Personal Details</p></ul>
                <ul onClick={() => setIsActive('addressBook')}><p>Address Book</p></ul>
            </div>
            <div className='profile__right'>
                {active === 'personalDetails' && <Personal />}
                {active === 'addressBook' && <Address />}
            </div>
        </section>
    )
}

export default Profile