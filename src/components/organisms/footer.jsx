import './organisms.css'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer__container'>
                <div className='footer__container-content'>
                    <p className='name'>Help</p>
                    <li><a href='#'>Payments & Shipping</a></li>
                    <li><a href='#'>Cancellation & Return</a></li>
                    <li><a href='#'>Sitemap</a></li>
                </div>
                <div className='footer__container-content'>
                    <p className='name'>Sharp Witted</p>
                    <li><a href='#'>Contact Us</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Careers</a></li>
                </div>
                <div className='footer__container-content'>
                    <p className='name'>Misc</p>
                    <li><a href='#'>Online Shopping</a></li>
                    <li><a href='#'>Gift Card</a></li>
                    <li><a href='#'>Sitemap</a></li>
                </div>
            </div>
        </section>
    )
}

export default Footer