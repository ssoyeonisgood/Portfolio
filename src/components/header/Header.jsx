import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/Me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Soyeon Kim</h1>
                <h5 className="text-brown">Student Software Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" className="photo"/>
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>

        </header>
    )
}

export default Header