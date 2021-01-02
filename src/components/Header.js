import React, { useState } from 'react';
import useWindowSize from '../components/useWindowSize';
import menu from '../media/menu.svg';
import facebookwhite from '../media/facebookwhite.svg';
import facebookorange from '../media/facebookorange.svg';
import instawhite from '../media/instawhite.svg';
import instaorange from '../media/instaorange.svg';
import gmailwhite from '../media/gmailwhite.svg';
import gmailorange from '../media/gmailorange.svg';
import whatsappwhite from '../media/whatsappwhite.svg';
import whatsapporange from '../media/whatsapporange.svg';
import mainlogo from '../media/mainlogo.png';
import home from '../media/home.svg';
import phonemob from '../media/phone-mob.svg';
import whatsapp from '../media/whatsapp.svg';
import bid from '../media/auction.svg';
import quote from '../media/quote.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Header = () => {
    const [toggle, toggleMobMenu] = useState(false);
    const [toggleQuote, setToggleQuote] = useState(false);
    let innerWidth = useWindowSize()
    let contactIcons = [
        { imgdefault: facebookwhite, imghover: facebookorange },
        { imgdefault: instawhite, imghover: instaorange },
        { imgdefault: whatsappwhite, imghover: whatsapporange, link: "https://wa.me/17027688773" },
        { imgdefault: gmailwhite, imghover: gmailorange }
    ]
    return (
        <div>
            {innerWidth > 999 ?
                <div className="header">
                    <div className="header-container">
                        <div className="logo">
                            <img src={mainlogo} alt="" />
                            <h1><Link to="/">LOGIG ENTERPIECES</Link></h1>
                        </div>
                        <div className="title">
                            <h1><Link to="/features">FEATURES</Link></h1>
                        </div>
                        <div className="title">
                            <h1><Link to="/portfolio">PORTFOLIO</Link></h1>
                        </div>
                        <div className="title">
                            <h1><Link to="/aboutus">ABOUT US</Link></h1>
                        </div>
                        <div className="title">
                            <h1><Link to="/contact">CONTACT</Link></h1>
                        </div>
                        <div className="get-started">
                            <div className="get-started-wrapper">
                                <h1>GET STARTED FREE</h1>
                            </div>
                        </div>
                    </div>
                    <div className="header-mobile">

                    </div>
                </div>
                :
                <div className="header-mob">
                    <div className="header-mob-container">
                        <div className="wrapper">
                            <div className="wrapper-mob-box">
                                <Link to="/" onClick={() => setToggleQuote(!toggleQuote)}>
                                    <img src={bid} alt='' />
                                </Link>
                                <p>QUOTE</p>
                            </div>
                            <div className="wrapper-mob-box">
                                <Link to="/" onClick={() => toggleMobMenu(false)}>
                                    <img src={whatsapp} alt='' />
                                </Link>
                                <p>WHATSAPP</p>
                            </div>
                            <div className="wrapper-mob-box-circle">
                                <div className={toggle ? "wrapper-mob-box-circle-logo-open" : "wrapper-mob-box-circle-logo"} onClick={() => toggleMobMenu(!toggle)}>
                                    <img src={mainlogo} alt="" />
                                </div>
                                <p>MENU</p>
                            </div>
                            <div className="wrapper-mob-box">
                                <Link to="/" onClick={() => toggleMobMenu(false)}>
                                    <img src={phonemob} alt='' />
                                </Link>
                                <p>CONTACT</p>
                            </div>
                            <div className="wrapper-mob-box">
                                <Link to="/" onClick={() => toggleMobMenu(false)}>
                                    <img src={home} alt='' />
                                </Link>
                                <p>HOME</p>
                            </div>
                        </div>
                    </div>
                    <div className={toggle ? "mob-menu" : "mob-menu-close"}>
                        <div className="mob-menu-container">
                            <div className="mob-menu-container-content">
                                <div className="mob-menu-links">
                                    <Link onClick={() => toggleMobMenu(false)} to="/">LOGIG ENTERPIECES</Link>
                                    <Link onClick={() => toggleMobMenu(false)} to="/features">FEATURES</Link>
                                    <Link onClick={() => toggleMobMenu(false)} to="/portfolio">PORTFOLIO</Link>
                                    <Link onClick={() => toggleMobMenu(false)} to="/aboutus">ABOUT US</Link>
                                    <Link onClick={() => toggleMobMenu(false)} to="/contact">CONTACT</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {toggleQuote ?
                        <div className="quote">
                            <div className="quote-container">
                                <div className="quote-wrapper">
                                    <div className="quote-header">
                                        <h1>Quote request</h1>
                                    </div>
                                    <div className="quote-circle">
                                        <img src={quote} alt="" />
                                    </div>
                                    <div className="quote-sub-title">
                                        <p>Please fill in your full name and the services you would like to receive, and we will get back to you with a quote and a price list for the required service.</p>
                                    </div>
                                    <div className="quote-form">
                                        <div className="input-quote">
                                            <input type="text" placeholder="Full name" />
                                        </div>
                                        <div className="input-quote">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                        <select>
                                            <option value="Web design">Web design</option>
                                            <option value="Digital marketing">Digital marketing</option>
                                            <option value="Media productions">Media productions</option>
                                            <option value="Comprehensive solutions">Comprehensive solutions</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <button>Send Request</button>
                                    </div>
                                </div>
                            </div>
                            {/* <img src={quote} alt=""/> */}
                        </div>
                        : null}
                </div>
            }
        </div>
    )
}
export default Header;