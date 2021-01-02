import React, { useState } from "react";
import avatar from '../media/avatar.png';
import em from '../media/em.png';
import snapcall from '../media/snapcall.jpg';
import high from '../media/hicom.jpeg';
import { Link } from 'react-router-dom';
import ServiceModal from '../components/ServiceModal';
import alex from '../media/alex.jpg';
import tom from '../media/tom.png';
import info from '../media/info.svg';

const AboutUs = () => {
    let gang = [
        { name: "Alex", role: "Full stack engineer", img: alex, description: "2 years experince with development PWA Web Apps" },
        { name: "Paul", role: "Photographer", img: tom, description: "specialize in product placement 3.5 years of experience" },
        { name: "John", role: "Graphic Designer", img: avatar, description: "wordpress, and video editing 10 years of experience" },
        { name: "Mouad", role: "Logo designer", img: avatar, description: "brand builder, brand visual identity 5 years of experience" },
    ]
    let connections = [
        { name: "Snap Call Media", title: "Videography, Media productions, video editing", img: snapcall },
        { name: "Highcomm", title: "Telecommunication Services", img: high },
        { name: "Effective Marketing", title: "Online marketing Services", img: em }
    ]
    let breadcrumbs = [

    ];
    const [service, toggleService] = useState(false);
    return (
        <div className="about-us">
            <div className="about-us-container">
                <div className="about-us-container-wrapper">
                    <div className="about-us-header">
                        <h1>ABOUT US</h1>
                    </div>
                    <div className="about-us-breadcrumbs">
                        <Link to="/">HOME</Link> / <Link to="/aboutus">ABOUT US</Link>
                    </div>
                </div>
                <div className="about-us-content">
                    <div className="about-x">
                        <h2><span className="log"><strong>Logic Enterprises</strong></span><br /></h2>
                        <h2>We provide comprehensive web and commerce solutions with emphasis on thinking outside the box. </h2>
                        <h2>Our goal is to provide you all of your brand’s needs under one roof, that includes every step in the way.</h2>
                        <h2>From the creation and strategy design to the product or service development, and all the way to the online exposure and analytics.</h2>


                    </div>
                    <div className="about-y">
                        <h2 className="strong"><strong>Company mission statement</strong></h2>
                        <h2>Logic Enterprises inspires businesses and individual talents to achieve their full potential, through the art of creativity and innovation.</h2>
                        <h2 className="strong"><strong>Company vision statement</strong></h2>
                        <h2>economic growth to our clientele, by providing logic solutions to any business challenges. </h2>
                        <h2 className="strong-one"><strong>Logic Enterprises is here for you!</strong></h2>
                    </div>
                </div>
            </div>
            <div className="team">
                <div className="team-container">
                    <div className="team-container-header">
                        <h1>Meet our top service providers</h1>
                    </div>
                    <div className="team-container-content-leader">
                        <h3>SAGI EREZ</h3>
                        <div className="leader-avatar">
                            <img src={avatar} alt="" />
                        </div>
                        <h3>CEO</h3>
                    </div>
                    <div className="team-container-content">
                        {gang.map((element, index) => {
                            return (
                                <div key={index} className="team-card" onClick={() => toggleService(element)}>
                                    <div key={index} className="team-card-wrapper">
                                        <h4>{element.name}</h4>
                                        <img src={element.img} alt="" />
                                        <h4>{element.role}</h4>
                                        <div className="team-card-wrapper-masc">
                                            <div className="card-wrapper-masc">
                                                <h5>More Info</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {service ? 
                            <ServiceModal provider={service} /> 
                        : null}
                    </div>
                </div>
            </div>
            <div className="company">
                <div className="company-container">
                    <div className="company-container-header">
                        <h1>Meet our top connections</h1>
                    </div>
                    <div className="company-container-content">
                        {connections.map((el, i) => {
                            return (
                                <div key={i} className="company-card">
                                    <div key={i} className="company-card-wrapper">
                                        <h3>{el.name}</h3>
                                        <div className="image-box">
                                            <img src={el.img} alt="" />
                                        </div>
                                        <h3>{el.title}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;
