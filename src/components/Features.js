import React, { useState } from "react";
import strategy from '../media/strategy.svg';
import marketing from '../media/growth.svg';
import webdesign from '../media/webdesign.svg';
import security from '../media/security.svg';
import support from '../media/support.svg';
import useWindowSize from '../components/useWindowSize';
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const BuildYourStrategy = () => {
    return (
        <div className="strategy">
            <div className="strategy-container">
                <div className="title-strategy">
                    <h2>Re-brand</h2>
                </div>
                <div className="body-strategy">
                    <p>Use our comprehensive strategies to determine what are the</p>
                    <p>necessary steps to upgrade your business. Follow simple steps</p>
                    <p>without spending too much time and energy on planning and </p>
                    <p>executing. Adapt current trends without taking major risks, and increase immediately your revenue. </p>
                </div>
            </div>
            <div className="strategy-container">
                <div className="title-strategy">
                    <h2>Analys</h2>
                </div>
                <div className="body-strategy">
                    <p>Understand exactly what are your business strengths, weaknesses, </p>
                    <p>opportunities, and threats. Conduct comprehensive research of your </p>
                    <p>brand and service in comparison to the other brands in the same field. Be aware of the existence of your brand online, get the best analytic report to launch an effective campaign. </p>
                    <p>field. Be aware of the existence of your brand online, get the best analytic report to launch an effective campaign. </p>
                </div>
            </div>
            <div className="strategy-container">
                <div className="title-strategy">
                    <h2>Differentiate</h2>
                </div>
                <div className="body-strategy">
                    <p>As you get a better understanding about your brand recognition and </p>
                    <p>availability, it is easier to emphasize the business abilities to perform </p>
                    <p>well and get the relative advantage over the market. In addition, we</p>
                    <p>will provide you the ability to stand out and become a leader in your field as we find the right nitches and target audience for you.</p>
                </div>
            </div>
            <div className="strategy-container">
                <div className="title-strategy">
                    <h2>Engage</h2>
                </div>
                <div className="body-strategy">
                    <p>Get the right amount of exposure that will bring more attention to your </p>
                    <p>brand, as you create a long-term relationship with the consumer and </p>
                    <p>get advantage of providing a service for many years</p>
                </div>
            </div>
        </div>
    )
}
const DeisgnYourSite = () => {
    return (
        <div className="design-your-site">
            <div className="design-your-site-wrapper">
                <div className="title-design-your-site">
                    <h2>Customize</h2>
                </div>
                <div className="body-design-your-site">
                    <p>Build your own dream website, customize it exactly to present all of </p>
                    <p>your company information with the look that emphasize your business</p>
                    <p>success the most. Build more than one platform to expand your brand</p>
                    <p>recognition and get the most out of business.</p>
                </div>
            </div>
            <div className="design-your-site-wrapper">
                <div className="title-design-your-site">
                    <h2>Create</h2>
                </div>
                <div className="body-design-your-site">
                    <p>Find your favorite appearance from our large variety of themes and media </p>
                    <p>sources. Choose your desired colors palette, icons, stock videos, edited </p>
                    <p>photos, GIFs, animations, and styles.</p>
                </div>
            </div>
            <div className="design-your-site-wrapper">
                <div className="title-design-your-site">
                    <h2>Differentiate</h2>
                </div>
                <div className="body-design-your-site">
                    <p>Present answers to all of your customer’s needs with simple access to </p>
                    <p>your services. Become the lead in your field with powerful exposure that </p>
                    <p>makes your brand stand out between all the other online competition.</p>
                </div>
            </div>
            <div className="design-your-site-wrapper">
                <div className="title-design-your-site">
                    <h2>Capture Attention</h2>
                </div>
                <div className="body-design-your-site">
                    <p>Design a modern look using our necessary tools available. Create </p>
                    <p>new logos, use new styles of video content, create media productions </p>
                    <p>that give you the advantage in the online scene. Present your online </p>
                    <p>platform as your business card to the world and gain endless opportunities </p>
                </div>
            </div>
        </div>
    )
}
const MarketAndSell = () => {
    return (
        <div className="mark-and-sell">
            <div className="mark-and-sell-wrapper">
                <div className="title-mark-and-sell">
                    <h2>Boost sales</h2>
                </div>
                <div className="body-mark-and-sell">
                    <p>Boost sales with confidence, get directly to your target audience and increase</p>
                    <p>your business exposure immediately. Place your products in one of our ready to sell </p>
                    <p>Ecommerce stores to dramatically expand the number of daily transactions. </p>
                </div>
            </div>
            <div className="mark-and-sell-wrapper">
                <div className="title-mark-and-sell">
                    <h2>Market effectively</h2>
                </div>
                <div className="body-mark-and-sell">
                    <p>Sale more with less effort, build automated systems to save labor and business </p>
                    <p>expenses. Narrow down your target audience with our useful tools to have a more </p>
                    <p>each transaction. Increase your brand's future value and attract more recurring sales with logic systems. </p>
                </div>
            </div>
            <div className="mark-and-sell-wrapper">
                <div className="title-mark-and-sell">
                    <h2>Differentiate</h2>
                </div>
                <div className="body-mark-and-sell">
                    <p>Stand out above your competitors with our data tracking system and effective A-B/A-C </p>
                    <p>marketing strategy. Take advantage of our unique customer persona evaluation to asset </p>
                    <p>the business needs and become a leader in your field. Maintain your brand awareness </p>
                    <p>to establish a rapport with other businesses as they recognize you as a business partner with affiliation power.  </p>
                </div>
            </div>
            <div className="mark-and-sell-wrapper">
                <div className="title-mark-and-sell">
                    <h2>Increase exposure</h2>
                </div>
                <div className="body-mark-and-sell">
                    <p>Expand your brand awareness with measurable steps and applying proven methods for </p>
                    <p>success. Engage more potential clients with a comprehensive marketing system to </p>
                    <p>engage the best people at the right time. Get support for analytics and marketing </p>
                    <p>campaigns, including Google adword, Instagram, Facebook, and other online marketplace platforms available . </p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}
const LongTermSuccess = () => {
    return (
        <div className="long-term-succes">
            <div className="long-term-succes-wrapper">
                <div className="title-long-term-succes">
                    <h2>Organize</h2>
                </div>
                <div className="body-long-term-succes">
                    <p>Follow every step with monthly analytics Get a full data report and gain essential advantage over your competitors, without spending time and energy  </p>
                </div>
            </div>
            <div className="long-term-succes-wrapper">
                <div className="title-long-term-succes">
                    <h2>Track</h2>
                </div>
                <div className="body-long-term-succes">
                    <p>Monitor and maintain business success with monthly analytics reports and constant customer engagement. Track business progress and gain competitive advantage</p>
                </div>
            </div>
            <div className="long-term-succes-wrapper">
                <div className="title-long-term-succes">
                    <h2>Automate</h2>
                </div>
                <div className="body-long-term-succes">
                    <p>Place all of the business functions under a well planned automated</p>
                    <p>system that combine the future strategic planning with everyday </p>
                    <p>needs. Free yourself to upscale your current business or develop new</p>
                    <p>ideas as all of the necessary work is supervised by our monthly maintenance team. </p>
                </div>
            </div>
            <div className="long-term-succes-wrapper">
                <div className="title-long-term-succes">
                    <h2>Establish long-term relationship</h2>
                </div>
                <div className="body-long-term-succes">
                    <p>Build a strong relationship with existing customers. Gain customer trust and</p>
                    <p>attention with an automated email system and monthly newsletters. Thrive </p>
                    <p>with no liabilities as customer relations, data analytic, marketing, sales, and</p>
                    <p>productions. Enjoy watching your brand grow as the system is set for a long term success.</p>
                </div>
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
    let innerWidth = useWindowSize();
    let subfeatures = [
        { header: "Retail stores", header1: "Startup companies", header2: "Professionals", box: "", headerflip: "", boxflip: "Rebrand your product or service , reach more clientele, expand your market, find new streams of revenue, build your online brand, find more than one stream of revenue." },
        { header: "Existing businesses", header1: "Service providers", header2: "Influencers", box: "", headerflip: "", boxflip: "Design a website that fulfills your customer’s needs, improve your brand appearance, differentiate yourself from competitors, increase public awareness. " },
        { header: "Service providers", header1: "Startup companies", header2: "Ecommerce businesses", box: "", headerflip: "", boxflip: "Boost sales, get more clients, increase online presence, increase brand awareness, and get more followers, increase company ROI." },
        { header: "Artists", header1: "Influencers", header2: "Online stores", header3: "Startup companies", box: "", headerflip: "", boxflip: "Maintain long-term success, organize your data, take advantage of media productions, get all your online business needs in one place" }
    ]
    return (
        <div>
            <div className="features">
                <div className="features-container">
                    <div className="features-header">
                        <h1>FEATURES</h1>
                    </div>
                    <div className="features-breadcrubms">
                        <Link to="/">HOME</Link> / <Link to="/features">FEATURES</Link>
                    </div>
                    <div className="features-wrapper">
                        <div className="x">
                            {features.map((el, i) => {
                                return (
                                    <div key={i} className="x-item" onClick={() => setIndex(i)}>
                                        <div className="image-circle">
                                            <img src={el.img} />
                                        </div>
                                        <h5>{el.title}</h5>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="y">
                            {featuresComps.map((element, index) => {
                                if (index === tabindex) {
                                    return (
                                        <div key={index} className="y-item">
                                            {element}
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className="features-sub-one">
                    <div className="features-sub-one-container">
                        <h2>WHO BENEFITS LOGIC ENTERPRISES SERVICES ? </h2>
                    </div>
                    <div className="features-sub-one-content">
                        {subfeatures.map((elm,idx)=>{
                            return(
                                <div key={idx} className="features-sub-one-cart">
                                    <div className="card">
                                        <h3>{elm.header}</h3>
                                        <h3>{elm.header1}</h3>
                                        <h3>{elm.header2}</h3>
                                        <h3>{elm.header3}</h3>
                                        <div className="card-masc">
                                            <div className="card-masc-wrapper">
                                                <h3>{elm.headerflip}</h3>
                                                <p>{elm.boxflip}</p>
                                            </div>
                                        </div>

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
export default Features;
