import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {MdLanguage} from 'react-icons/md'
import {AiFillFolderOpen} from 'react-icons/ai'


const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2 className='heading'>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Education</h5>
                            <small>Curtin University</small>
                        </article>
                    
                        <article className='about__card'>
                            <MdLanguage className='about__icon'/>
                            <h5>Language</h5>
                            <small>Korean & English</small>
                        </article>
                    
                        <article className='about__card'>
                            <AiFillFolderOpen className='about__icon'/>
                            <h5>Side Projects</h5>
                            <small>10+ completed</small>
                        </article>
                    </div>
                    <p className='about__introduce'>
                    Hello! My name is Soyeon Kim.
                    I am currently a second year student at Curtin University studying Software Engineering.
                    </p>
                    <p className='about__introduce'>
                    I've only been learning coding for a year, but in the meantime I've learned Python, C, and data structures and algorithms. 
                    I completed various assignments based on them and got a score of 85.50.
                    </p>
                    <p className='about__introduce'>
                    During the vacation from last October, I learned JavaScript and React through self-study and created various projects. 
                    However, I realized that there is a limit to study coding by myself. 
                    Therefore, I really want to learn and experience more by getting some real world experience.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's talk</a>
                </div>
            </div>

        </section>
    )
}

export default About