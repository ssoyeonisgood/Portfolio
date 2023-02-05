import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {GrInstagram} from 'react-icons/gr'
import {FiLinkedin} from 'react-icons/fi'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Soyeon Kim</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className='footer__socials'>
                <a href="https://www.facebook.com/profile.php?id=100001908471483"><FiFacebook/></a>
                <a href="https://www.instagram.com/soyeonisgood/"><GrInstagram/></a>
                <a href="https://www.linkedin.com/in/soyeon-kim-727147251/"><FiLinkedin/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Soyeon's Portfolio</small>
            </div>
        </footer>
    )
}

export default Footer