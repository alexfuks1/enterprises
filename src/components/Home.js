import React, { useEffect, useState } from "react";
import s1 from '../media/slider1.png';
import s2 from '../media/slider2.png';
import s3 from '../media/slider3.png';
import s11 from '../media/slider1-1.jpg';
import Sliders from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import sectwo from '../media/sectwo.png';
import secfour from '../media/secthree.png';
import secfive from '../media/secfive.png';
import secsix from '../media/sexsix.png';
import secseven from '../media/sexseven.png';
import play from '../media/play.svg';
import rightarrow from '../media/right-arrow.svg';
import user from '../media/1.png';
import user1 from '../media/2.png';
import user2 from '../media/3.png';
import user3 from '../media/4.png';
import user4 from '../media/5.png';
import user5 from '../media/6.png';
import user6 from '../media/7.png';
import user7 from '../media/8.png';
import security from '../media/security.svg';
import service from '../media/service.svg';
import companies from '../media/companies.svg';
import storage from '../media/storage.svg';
import media from '../media/media.svg';
import guarantee from '../media/guarantee.svg';
import plus from '../media/plus.svg';
import plushover from '../media/plushover.svg';
import strategy from '../media/strategy.png';
import web from '../media/web.png';
import market from '../media/market.png';
import success from '../media/success.png';
import sexsixsub from '../media/sexsixsub.png'
import sexseven from '../media/sexseven.png';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import useWindowSize from '../components/useWindowSize';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Zoom';
import Slider from "react-slick";
import emailjs from 'emailjs-com';
import ContactModal from './ContactModal';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const SectionTwoModal = params => {
    debugger;
    let tabindex = params.tabindex.index;
    let element = params.tabindex.element;
    let setTab = params.setTab;
    let subTab = [
        { body: "Simply get a comprehensive strategy from one of our business experts, clarify your purposes, articulate it and learn from existing difficulties, pivot and move on to the ideas that delight your customers. Set short and long term goals, use our online tools and automate your system to take your business to the next level.", img: strategy },
        { body: "Beautifully design and present your services to maximize online presence, with a fully customizable modern website that's designed specifically to add value and customer engagement. Use our graphic tools media team to create a special platform that answers all your customers' needs.Easily improve the site appearance using one of our themes to match your style, or connect your services to an existing site for a seamless brand experience.", img: web },
        { body: "Get all the marketing tools, integrations, and payment options you need to promote your business, sell products, and build raving fans. Set Social media platforms without spending time and energy with advanced e-commerce options available for any need. Get more out of your existing brand by maximizing the online exposure using our online marketing tools and customer service, gain new customers faster, and increase your ROI.", img: market },
        { body: "Use our powerful online features available to automate your business functions, while you can focus on growing and expanding new ideas. Enjoy the benefits of monthly maintenance including analytics, reports, social media content, video editing & post production, content writing, and social media advertising. Archive long term goals using our maintenance strategies to expand the streams of revenue for your business. When your website is thriving so does your income. Therefore, take advantage of other services such as PR and marketing, completion tracking, telecommunication system, automated progress emails system, customer engagement and more to ensure your business future success.", img: success }
    ]
    return (
        <div className="section-modal-box">
            <div className="section-modal">
                <Fade top cascade>
                    <div className="section-modal-container">
                        <div className="close-wrapper">
                            <img onClick={() => setTab(null)} src={plushover} alt="" />
                        </div>
                        <div className="section-modal-header">
                            <h5>{element.subtitle}</h5>
                        </div>
                        {subTab.map((tab, i) => {
                            if (tabindex == i) {
                                return (
                                    <div className="tab" key={i}>
                                        <div className="tab-container">
                                            <p>{tab.body}</p>
                                            <div className="image-box-masc">
                                                {/* <img src={tab.img} alt="" /> */}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </Fade>
            </div>
        </div>

    )
}

const MainSlider = () => {
    const [sliderindex, setSliderIndex] = useState(0);
    let innerWidth = useWindowSize()

    const slides = [
        { background: s1, description: 'Lorem ipsum' },
        { background: s2, description: 'Lorem ipsum' },
        { background: s3, description: 'Lorem ipsum' },
        { background: s11, description: 'Lorem ipsum' }

    ];
    return (
        <div className="main-slider">
            <div className="slider-container">
                <Sliders onSlideChange={event => setSliderIndex(event.slideIndex)} autoplay={2000}>
                    {slides.map((slide, index) => <div key={index}>
                        <img src={slide.background} alt="" />
                        <div>{slide.description}</div>
                    </div>)}
                </Sliders>
                <div className="masc-slider">
                    <div className="masc-slider-container">
                        <div className="wrapper">
                            <Fade left cascade duration={3000}>
                                <h1>POWER YOUR<br />{innerWidth > 999} ONLINE EMPIRE</h1>
                            </Fade>
                            <div className="content-slider">
                                <p>Create an online presence for your business to exceed your clientele expectations, and become a leader in your field.
                                Improve and redefine your online brand using our comprehensive strategies, and see first-hand the impact of growing online with Logic Enterprises will have on your business.
                                    </p>
                            </div>
                            <div className="form-get-started">
                                <div className="get-started-input">
                                    <input type="text" placeholder="Enter your email" />
                                </div>
                                <div className="get-started-btn">
                                    <h5>Get started free</h5>
                                    <Flash>
                                        <img src={plus} alt="" />
                                    </Flash>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const SectionTwo = () => {
    const [tabindex, setTab] = useState(null);
    let secTwoContLeft = [
        { subtitle: "Plan a strategy", img: plus },
        { subtitle: "Design your website", img: plus },
        { subtitle: "Market and sell", img: plus },
        { subtitle: "Maintain the business success", img: plus },
    ]
    return (
        <div className="section-two">
            <div className="section-two-container">
                <div className="cont-left">
                    <div className="wrapper">
                        <div className="cont-left-header">
                            <Fade>
                                <h1>Everything you need to run your online business under one roof</h1>
                            </Fade>
                        </div>
                        {secTwoContLeft ? secTwoContLeft.map((element, index) => {
                            return (
                                <Zoom cascade key={index}>
                                    <div key={index} className="item">
                                        <div className="item-header">
                                            <h2>{element.header}</h2>
                                        </div>
                                        <div className="item-title">
                                            <div onClick={() => setTab({ element, index })} className="item-title-wrapper">
                                                <img src={plushover} alt="" />
                                                <h3>{element.subtitle}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                            )
                        }) : null}
                        {tabindex ? <SectionTwoModal tabindex={tabindex} setTab={setTab} /> : null}
                        <div>
                            <p><Link to="/features"><strong>Explore our features</strong></Link></p>
                        </div>
                    </div>
                </div>
                <div className="cont-right">
                    <h1></h1>
                </div>
            </div>
        </div>
    )
}
const SectionFour = () => {
    const SectionFiveCont = [
        { title: "Comprehensive customization - the way you want it!", body: "Set up your online presence and customize it for your business needs exactly how you vision it. Effortlessly customize noumorouse of features, to ensure it matches your website is reflecting your mission statement and overall vision. Choose the colors you want with the appearance you like in all of your online platforms so you can build your perfect online empire fast and without any tech stress." },
        { title: "Total control over your content, pricing, and data", body: "Take full control over site content, design, pricing, seasonal promotions,  informative explanation of your product or service, customer’s analytic, and social media collaborations so you can increase your followers instantly and own 100% of your data. " },
        { title: "Seamless automation lets you work without worry", body: "Create your freedom and allow our automated system and dedicated strategic team to lead your business to new peaks without any stress. Get all your business data and information no matter where you are in the world.Benefit from the automatic system that you choose, and we will navigate for you throughout the process. Ensure your customers get a world-class service every time, so you're free to tackle your big picture goals. " },

    ];
    return (
        <div className="section-four">
            <div className="section-four-container">
                <Slide left>
                    <div className="cont-left">
                        <div className="cont-left-header">
                            <h1>Easy to set up and customize for your own needs</h1>
                        </div>
                        <img src={secfour} alt="" />
                    </div>
                </Slide>
                <div className="cont-right">
                    {SectionFiveCont.map((element, index) => {
                        return (
                            <div key={index} className="item">
                                <Zoom cascade>
                                    <div className="item-header">
                                        <h4>{element.title}</h4>
                                    </div>
                                    <div className="item-body">
                                        <p>{element.body}</p>
                                    </div>
                                </Zoom>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
const SectionSix = () => {
    const SectionSixLeft = [
        { title: "Responsive and personal email & phone support - we don’t go home until every question has been answered" },
        { title: "90% of questions answered in less than 5 hours" },
        { title: "Every employee from our CEO Greg to the newest hire spends time each week in customer support" }
    ]
    const SectionSixRight = [
        { title: "Comprehensive knowledge base, training site & live webinars to get you going - regardless of if you’re an expert or just starting out" },
        { title: "Active peer support from our 12,000 member Facebook group - filled with course creators just like you" },
        { title: "Drop-in coworking sessions at our Vancouver office" }
    ]
    const subContentLeft = [
        { title: "Security", img: security },
        { title: "Fast customer service", img: service },
        { title: "Cooperation with other companies", img: companies },
    ]
    const subContentRight = [
        { title: "Satisfaction guaranteed", img: guarantee },
        { title: "Media production", img: media },
        { title: "Storage services", img: storage },

    ]
    return (
        <div className="section-six">
            <div className="section-six-container">
                <div className="section-six-wrapper">
                    <div className="section-six-left">
                        <h1>Experience the best support in the industry</h1>
                    </div>
                    <div className="section-six-right">
                        <p>“I am very satisfied with the customer service team, they assisted me to increase my business productivity. I am so happy that I was finally able to organize my thoughts and business goals into one tailored plan, without being worried about any technical issues”</p>
                    </div>
                </div>
                <div className="section-six-content">
                    <img src={sexsixsub} alt="" />
                </div>
            </div>
            <div className="section-six-sub-container">
                <div className="right">
                    {subContentLeft.map((elLeft, i) => {
                        return (
                            <Slide bottom key={i}>
                                <div key={i} className="item-right">
                                    <div className="wrapper-right">
                                        <img src={elLeft.img} alt="" /><p>{elLeft.title}</p>
                                    </div>
                                </div>
                            </Slide>
                        )
                    })}
                </div>
                <div className="right">
                    {subContentRight.map((elRight, ix) => {
                        return (
                            <Slide top key={ix}>
                                <div key={ix} className="item-right">
                                    <div className="wrapper-right">
                                        <img src={elRight.img} alt="" /><p>{elRight.title}</p>
                                    </div>
                                </div>
                            </Slide>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
const SectionClips = () => {

    let content = [
        { title: user },
        { title: user },
        { title: user },
        { title: user },
        { title: user },
        { title: user },
        { title: user },
        { title: user },
    ]
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="section-clips">
            <div className="section-clips-container">
                <h1>Thousands of entrepreneurs trust Logic Enterprises to help them increase their business ROI and establish their business goals</h1>
            </div>
            <div className="section-clips-slider">
                {/* <Slider {...settings}>
                    {content.map((element, index) => {
                        return (
                            <div className="card-item" key={index}>
                                <div className="item">
                                    <img src={element.title} alt="" />
                                </div>
                            </div>
                        )
                    })}
                </Slider> */}
            </div>
        </div>
    )
}
const SuccessStory = () => {
    return (
        <div className="section-success-box">
            <div className="container">
                <div className="success-header">
                    <h1>Be our next success story</h1>
                </div>
                <div className="success-content">
                    <p>Get started creating your online empire with Logic Enterprises today and turn your expertise into a thriving business. Think outside the box, just like Samantha who transformed her Personal training expertise into a successfully dynamic online platform. With minimal effort she increased her business revenue by 200%  in the first six month.</p>
                </div>
            </div>
        </div>
    )
}
const SectionEghit = () => {
    const [sendEmailSuccess, setSendEmail] = useState(false);
    const [timer,setTimer] = useState(null);
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_bh01ick', 'template_ltwz01z', e.target, 'user_GIyiNCS9DDzdI0AHXqmjg')
            .then((result) => {
                console.log(result);
                setSendEmail(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    useEffect(()=>{
        setTimeout(() => {
            setTimer(true);
        }, 2000);
    },[0])
    return (
        <div className="section-eghit">
            <div className="section-eghit-container">
                <h1>Accomplish your online presence and business goals faster with Logic Enterprises</h1>
                <form className="contact-form" onSubmit={sendEmail}>
                    <input className="input-mail" type="email" placeholder="you@example.com" name="email" />
                    <input onClick={()=> setSendEmail(true)} className="btn-submit" type="submit" value="GET STARTED FREE" />
                </form>
            </div>
            {sendEmailSuccess ?
                <ContactModal timer={timer} />
                :
                null
            }
        </div>
    )
}


class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="home-container">
                    <MainSlider />
                    <SectionTwo />
                    <SectionFour />
                    <SectionSix />
                    <SectionClips />
                    <SuccessStory />
                    <SectionEghit />
                </div>
            </div>
        )
    }
}
export default Home;