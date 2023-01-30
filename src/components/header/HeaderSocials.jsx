import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/soyeon-kim-727147251/" target='_blank'><FaLinkedinIn/></a>
        <a href="https://github.com/ssoyeonisgood" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/soyeonisgood/" target='_blank'><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials