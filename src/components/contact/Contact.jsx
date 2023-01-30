import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form =useRef(); 
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qg0vmg2', 'template_gxva8xn', form.current, 'pDib_XSUP38SxAONN')

        e.target.reset();
      };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2 className='heading'>Contact Me</h2>
            <div className='container contact__container'>
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>haikyu5123@gmail.com</h5>
                        <a href="mailto:haikyu5123@gmail.com" target='_blank' rel="noreferrer">Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsMessenger className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>Soyeon Kim</h5>
                        <a href="https://m.me/profile.php?id=100001908471483" target='_blank' rel="noreferrer">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="text" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit'className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact