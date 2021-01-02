import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio-container">
                <div className="portfolio-header">
                    <h1>Portfolio</h1>
                </div>
                <div className="portfolio-breadcrumbs">
                    <Link to="/">HOME</Link> / <Link to="/portfolio">PORTFOLIO</Link>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;