import React, { useEffect, useState } from "react";
import MainLogo from '../media/mainlogo.png';

const ContactModal = props => {
    useEffect(() => {
        console.log('mounted');
        return () => setTimeout(() => {
            
        }, 1000);
    }, [props.timer])
    return (
        <div className="contact-modal">
            <div className="contact-modal-container">
                <div className="contact-modal-wrapper-loader">
                    {!props.timer ?
                        <div className="circle-loader-logo">
                            <img className="logo-before" src={MainLogo} alt="" />
                            <div className="text-loader">
                                <h1>LOADING...</h1>
                            </div>
                        </div>
                        :
                        <div className="circle-loader-logo-after">
                            {/* <img src={MainLogo} alt="" /> */}
                            <img src={MainLogo} className="logo-after" alt="" />
                            <h1>THANKS</h1>
                            <h1>LOGIC ENTERPIECES</h1>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default ContactModal;