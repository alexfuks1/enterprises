import React, { useState } from "react";
import strategy from '../media/strategy.svg';
import marketing from '../media/growth.svg';
import webdesign from '../media/webdesign.svg';
import security from '../media/security.svg';
import support from '../media/support.svg';
import useWindowSize from '../components/useWindowSize';
import Slider from "react-slick";


const BuildYourStrategy = () => {
    return (
        <div className="strategy">
            <div className="title">
                <h1>Build your strategy</h1>
            </div>
            <div className="header-strategy">
                <h5>Easily re-brand your business and build a strategy that meet your business needs</h5>
            </div>
            <div className="strategy-content">
                <h5>Info: Use all of our available resources to transform your business into an online empire.</h5>
                <p>Enjoy complimentary access to our analytic sources and brand recognition team. Get a full report and multi-yearly business plan.</p>
                <p>Choose between three different strategies to maximize your strengths and increase productivity. </p>
                <h5>Keep your customers engaged with vast multimedia content. We can make you popular.</h5>
                <p>With our support, it is simple to launch an impressive website quickly, delight your clientele with a rich online presence,<br /> and create a powerful foundation for the most demanding online platforms.  </p>
            </div>
        </div>
    )
}
const DeisgnYourSite = () => {
    return (
        <div className="design-your-site">
            <div className="design-your-site-container">
                <div className="title">
                    <h1>Design your site</h1>
                </div>
                <div className="header-design-your-site">
                    <h5>Present your business strengths with themes designed for every possible strategy.

                    Find your favorite appearance from our large variety of themes and media sources.
                    Logic Enterprises experts are notorious for finding answers to all of your customer’s needs. Choose your favorite colors palette, icons, stock videos, edited photos, GIFs, animations, and styles.

                Make your business website your own with full customization power</h5>
                </div>
                <div className="content-design-your-site">
                    <h5>Info: Use all of our available resources to transform your business into an online empire.</h5>
                    <p>Enjoy complimentary access to our analytic sources and brand recognition team. Get a full report and multi-yearly business plan.</p>
                    <p>Choose between three different strategies to maximize your strengths and increase productivity. </p>
                    <h5>Keep your customers engaged with vast multimedia content. We can make you popular.</h5>
                    <p>With our support, it is simple to launch an impressive website quickly, delight your clientele with a rich online presence,<br /> and create a powerful foundation for the most demanding online platforms.  </p>
                </div>
            </div>
        </div>
    )
}
const MarketAndSell = () => {
    return (
        <div className="mark-and-sell">
            <div className="title">
                <h1> Market And Sell</h1>
            </div>
            <div className="header-mark-and-sell">
                <h5>
                    Market and sell your products and services with our Logic business approach
                </h5>
            </div>
            <div className="sub-header-mark-and-sell">
                <h5>
                    Boost sales with confidence
                </h5>
                <p>Get directly to your target audience </p>
                <p>Increase your business exposure</p>
                <p>Place your products in one of our ready to sell Ecommerce stores</p>
            </div>
            <div className="sub-header-mark-and-sell">
                <h5>
                    Sale more with less effort
                </h5>
                <p>Build automated system to save labor and business expenses</p>
                <p>Easy upsale and cross-sale to get the most of each transaction</p>
                <p>Increase your brand future value and attract more sales</p>
            </div>
            <div className="header-mark-and-sell">
                <h5>
                    Gain more clientele with our advanced marketing tools
                </h5>
            </div>
            <div className="sub-header-mark-and-sell">
                <h5>
                    Stand out above your competitors with our data tracking
                </h5>
                <p>Get directly to your target audience </p>
                <p>Get support for analytics and marketing campaigns, including Google adword, </p>
                <p>Instagram, Facebook, and other online marketplace platforms available </p>
            </div>
            <div className="sub-header-mark-and-sell">
                <h5>
                    Combine online tools with physical commerce to ensure success

                </h5>
                <p>Use human resources as a leverage for your online commerce platform</p>
            </div>
        </div>
    )
}
const LongTermSuccess = () => {
    return (
        <div className="long-term-succes">
            <div className="title">
                <h1>Long term success</h1>
            </div>
            <div className="header-long-term-succes">
                <h5>Monitor and maintain business success with monthly analytics reports and constant customer engagement</h5>
            </div>
            <div className="content-long-term-succes">
                <h5>Track business progress and gain competitive advantage</h5>
            </div>
            <div className="sub-header-mark-and-sell">
                <h5>
                    Follow every step with monthly analytics
                </h5>
                <p>Get a full data report and gain essential advantage over your competitors,</p>
                <p>without spending time and energy </p>
                <p>Increase your brand future value and attract more sales</p>
            </div>
            <div className="sub-header-mark-and-sell">
                <h5>
                    Build a strong relationship with existing customers
                </h5>
                <p>Gain customer trust and attention with automated email system and </p>
                <p>monthly newsletters </p>
            </div>
        </div>
    )
}
const Features = () => {
    const [tabindex, setIndex] = useState(0);
    let features = [
        { title: "BUILD YOUR STRATEGY", img: strategy },
        { title: "DESIGN YOUR SITE", img: webdesign },
        { title: "MARKET AND SELL", img: marketing },
        { title: "LONG TERM SUCCESS", img: support },
        { title: "SECURITY", img: security }
    ]
    let featuresComps = [
        <BuildYourStrategy />,
        <DeisgnYourSite />,
        <MarketAndSell />,
        <LongTermSuccess />
    ]
    let innerWidth = useWindowSize()
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
    };
    return (
        <div>
            {innerWidth > 999 ?
                <div className="features">
                    <div className="features-container">
                        <div className="features-hedaer">
                            {features.map((element, index) => {
                                return (
                                    <div onClick={() => setIndex(index)} key={index} className="item">
                                        <div className="item-wrapper">
                                            <h5 style={{ fontWeight: index === tabindex ? "bold" : "" }}>{element.title}</h5>
                                            <div className="item-wrapper-masc">
                                                <img src={element.img} alt="x" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="features-content">
                            {featuresComps ? featuresComps.map((el, i) => {
                                if (i === tabindex) {
                                    return (
                                        <div key={i} className="features-content-item">
                                            {el}
                                        </div>
                                    )
                                }
                            }) : null}
                        </div>
                    </div>
                </div>
                :
                <div className="features-mobile">
                    <div className="features-mobile-header">
                        <h1>FEATURES</h1>
                    </div>
                    <div className="features-mobile-container">
                        <Slider {...settings}>
                            {features.map((element, index) => {
                                return (
                                    <div onClick={() => setIndex(index)} key={index} className="item">
                                        <div className="item-wrapper">
                                            <h5 style={{ fontWeight: index === tabindex ? "bold" : "" }}>{element.title}</h5>
                                            <div className="item-wrapper-masc">
                                                <img src={element.img} alt="x" />
                                            </div>
                                            <div className="item-wrapper-masc-content">
                                                {featuresComps ? featuresComps.map((el, i) => {
                                                    if (i === index) {
                                                        return (
                                                            <div key={i} className="features-content-item-mob">
                                                                {el}
                                                            </div>
                                                        )
                                                    }
                                                }) : null}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            }
        </div>
    )
}
export default Features;
