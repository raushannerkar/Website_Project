import React from 'react';
import './WebDev.css';
import { Link } from 'react-router-dom';
import gif1 from '../Assets/200 (1).webp';
import gif2 from '../Assets/200.webp';
import gif3 from '../Assets/300.webp';
function WebDev() {
    return (
        <div className="web-development-page">
            <h1>Web Development Services</h1>
            <p className="intro-text">At Xcentic, we bring your ideas to life through professional and high-performing web solutions. Explore our specialized services below.</p>

            <div className="service-section">
                <div className="text-content">
                    <h2>Custom Website Design</h2>
                    <p>Our team crafts tailored, visually stunning websites that reflect your brand identity and resonate with your target audience. We focus on user experience, responsive design, and impactful visuals to create a seamless and engaging online presence.</p>
                </div>
                <img src={gif1} alt="Custom Websites" className="service-gif" />
            </div>

            <div className="service-section">
                <img src={gif3} alt="E-Commerce Solutions" className="service-gif" />
                <div className="text-content">
                    <h2>E-Commerce Development</h2>
                    <p>Empower your business with our e-commerce solutions that prioritize performance, security, and customer experience. From product catalogs to secure payment gateways, we provide everything you need for a scalable online store.</p>
                </div>
            </div>

            <div className="service-section">
                <div className="text-content">
                    <h2>SEO and Performance Optimization</h2>
                    <p>Boost your visibility and improve load times with our expert SEO and performance optimization services. We employ the latest techniques in on-page SEO, schema markup, and site speed enhancement to help you rank higher and deliver a faster experience to users.</p>
                </div>
                <img src={gif2} alt="SEO Optimization" className="service-gif" />
            </div>
            <div className="contact-button-container">
                <Link to="/contact" className="contact-button">
                    Contact Us
                </Link>
            </div>
        </div>
    );
}

export default WebDev;