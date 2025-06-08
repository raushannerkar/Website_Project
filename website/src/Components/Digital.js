import React from 'react';
import './WebDev.css';
import { Link } from 'react-router-dom';
import gif1 from '../Assets/m1.webp';
import gif2 from '../Assets/m2.webp';
import gif3 from '../Assets/m3.webp';
function AppDev() {
    return (
        <div className="web-development-page">
        <h1>Digital Marketing Services</h1>
        <p className="intro-text">At Xcentic, we drive your brand's digital presence to new heights with innovative and results-oriented marketing strategies. Discover our specialized digital marketing services below.</p>

        <div className="service-section">
            <div className="text-content">
                <h2>Social Media Marketing</h2>
                <p>Our team crafts targeted social media campaigns that engage audiences and build brand loyalty. From content creation to community management, we leverage social platforms to grow your brand and boost visibility.</p>
            </div>
            <img src={gif1} alt="Social Media Marketing" className="service-gif" />
        </div>

        <div className="service-section">
            <img src={gif2} alt="SEO and SEM Services" className="service-gif" />
            <div className="text-content">
                <h2>SEO and SEM Strategies</h2>
                <p>Increase your brand’s online presence and search engine rankings with our comprehensive SEO and SEM services. We apply advanced keyword research, on-page and off-page SEO, and paid search strategies to drive more traffic and conversions.</p>
            </div>
        </div>

        <div className="service-section">
            <div className="text-content">
                <h2>Content Marketing</h2>
                <p>Engage and inform your audience with high-quality, relevant content. Our content marketing services include blog posts, infographics, videos, and more to position your brand as an authority in your industry.</p>
            </div>
            <img src={gif3} alt="Content Marketing" className="service-gif" />
        </div>


            <div className="contact-button-container">
                <Link to="/contact" className="contact-button">
                    Contact Us
                </Link>
            </div>
        </div>
    );
}

export default AppDev;