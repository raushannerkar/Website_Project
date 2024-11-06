import React from 'react';
import './WebDev.css';
import { Link } from 'react-router-dom';
import gif3 from '../Assets/s1.webp';
import gif2 from '../Assets/s2.webp';
import gif1 from '../Assets/s3.jpg';
function AppDev() {
    return (
        <div className="web-development-page">
       <h1>SEO Optimization Services</h1>
        <p className="intro-text">At Xcentic, we help businesses boost their online visibility and improve search engine rankings through tailored SEO strategies. Explore our expert SEO services below to enhance your digital presence.</p>

        <div className="service-section">
            <div className="text-content">
                <h2>On-Page SEO</h2>
                <p>Our on-page SEO services ensure that your website is fully optimized for search engines. From keyword research and meta tags to content optimization and internal linking, we cover all the essential elements to improve your site's search engine ranking.</p>
            </div>
            <img src={gif1} alt="On-Page SEO" className="service-gif" />
        </div>

        <div className="service-section">
            <img src={gif2} alt="Technical SEO" className="service-gif" />
            <div className="text-content">
                <h2>Technical SEO</h2>
                <p>We optimize the backend of your website to ensure search engines can easily crawl and index your content. Our technical SEO services include site speed optimization, mobile responsiveness, structured data, and more to enhance your website's performance.</p>
            </div>
        </div>

        <div className="service-section">
            <div className="text-content">
                <h2>Off-Page SEO</h2>
                <p>Off-page SEO is essential for building your website's authority and trustworthiness. We specialize in link building, social media signals, and local SEO strategies to improve your online reputation and drive more organic traffic to your website.</p>
            </div>
            <img src={gif3} alt="Off-Page SEO" className="service-gif" />
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