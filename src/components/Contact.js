import React, { useState } from "react";
import facebookwhite from '../media/facebookwhite.svg';
import facebookorange from '../media/facebookorange.svg';
import instawhite from '../media/instawhite.svg';
import instaorange from '../media/instaorange.svg';
import gmailwhite from '../media/gmailwhite.svg';
import gmailorange from '../media/gmailorange.svg';
import whatsappwhite from '../media/whatsappwhite.svg';
import whatsapporange from '../media/whatsapporange.svg';
import mainlogo from '../media/mainlogo.png';
import emailjs from 'emailjs-com';
// import ContactModal from './ContactModal';
import { Link } from 'react-router-dom';
import ServiceModal from '../components/ServiceModal';

const Contact = () => {
    const [toggleModal, setToggleModal] = useState(false);
    function sendEmail(e) {
        e.preventDefault(true);
        emailjs.sendForm('service_pojc51b', 'template_g5ya4sw', e.target, 'user_GIyiNCS9DDzdI0AHXqmjg')
            .then((result) => {
                setToggleModal(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    let contactIcons = [
        { imgdefault: facebookwhite, imghover: facebookorange },
        { imgdefault: instawhite, imghover: instaorange },
        { imgdefault: whatsappwhite, imghover: whatsapporange, link: "https://wa.me/17027688773" },
        { imgdefault: gmailwhite, imghover: gmailorange }
    ]
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h1>Contact</h1>
                </div>
                <div className="contact-breadcrumbs">
                    <Link to="/">HOME</Link> / <Link to="/contact">CONTACT</Link>
                </div>
                <div className='contact-content-container'>
                    <div className="wrapper-x">
                        <div className="wrapper-x-left">
                            <div className="wrapper-x-left-content">
                                <div className="wrapper-x-left-title">
                                    <h2>ADRESS</h2>
                                    <p>1. St. George Street, St. Augustine</p>
                                </div>
                                <div className="wrapper-x-left-title">
                                    <h2>PHONE</h2>
                                    <p>⁦+1 (702) 768-8773⁩</p>
                                </div>
                                <div className="wrapper-x-left-title">
                                    <h2>GENERAL SUPPORT</h2>
                                    <p>info@logicandco.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper-x-right">
                            <div className="form-header">
                                <h2>let's be in touch</h2>
                            </div>
                            <form className="form-box" onSubmit={sendEmail}>
                                <div className="text-box">
                                    <input type="text" placeholder="Full name" name="fullname" />
                                </div>
                                <div className="text-box">
                                    <input type="mail" placeholder="example@gmail.com" name="email" />
                                </div>
                                <div className="text-box">
                                    <input type="number" placeholder="Phone" name="phone" />
                                </div>
                                <div className="textarea-box">
                                    <textarea placeholder="Message..." name="content" />
                                </div>
                                <input className="btn-box" type="submit" value="SEND" />
                            </form>
                        </div>
                    </div>
                    <div className="wrapper-y">
                        {contactIcons.map((element, index) => {
                            return (
                                <div key={index} className="social-item" >
                                    <a href={element.link}>
                                        <img src={element.imgdefault} alt="" />
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* {toggleModal ? <ContactModal toggleModal={toggleModal}/>:null} */}
        </div>
    )
}
export default Contact;
