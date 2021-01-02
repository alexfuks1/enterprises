import React, { useState } from "react";
import github from '../media/github.svg';
import facebook from '../media/facebook-circular-logo.svg';
import linkedin from '../media/linkedin.svg';

const ServiceModal = params => {
    let provider = params.provider;
    console.log(provider);
    return (
        <div className="servie-modal">
            <div className="servie-modal-container">
                <div className="service-modal-wrapper">
                    <div className="x">
                        <div className="x-header">
                            <h2>{provider.name}</h2>
                            <img src={provider.img} alt=""/>
                            <h2>{provider.role}</h2>
                        </div>
                        <div className="social">
                            <img src={facebook} alt="" />
                            <img src={linkedin} alt="" />
                            <img src={github} alt="" />
                        </div> 
                    </div>
                    <div className="y">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceModal;