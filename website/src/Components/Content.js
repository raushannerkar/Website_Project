import React from 'react';
import './WebDev.css';
import { Link } from 'react-router-dom';
import gif3 from '../Assets/c1.webp';
import gif2 from '../Assets/c2.webp';
import gif1 from '../Assets/c3.webp';
function AppDev() {
    return (
        <div className="web-development-page">
        <h1>Content Creation Services</h1>
        <p className="intro-text">At Xcentic, we specialize in crafting compelling and engaging content that resonates with your audience. Explore our tailored content creation services designed to elevate your brand’s message.</p>

        <div className="service-section">
            <div className="text-content">
                <h2>Custom Content Creation</h2>
                <p>Our expert team creates high-quality, original content that speaks to your target audience. From blog posts and articles to website copy and product descriptions, we ensure your content reflects your brand's voice and drives engagement.</p>
            </div>
            <img src={gif1} alt="Custom Content Creation" className="service-gif" />
        </div>

        <div className="service-section">
            <img src={gif2} alt="Video Production" className="service-gif" />
            <div className="text-content">
                <h2>Video Production</h2>
                <p>Bring your brand to life with engaging videos that captivate and inform. Our video production services cover everything from scripting and filming to editing, ensuring that your videos tell your brand’s story in a creative and impactful way.</p>
            </div>
        </div>

        <div className="service-section">
            <div className="text-content">
                <h2>Graphic Design & Visual Content</h2>
                <p>Stand out with stunning visuals created by our graphic design experts. We create everything from infographics and social media graphics to brochures and branding materials, all designed to elevate your brand’s identity and capture attention.</p>
            </div>
            <img src={gif3} alt="Graphic Design" className="service-gif" />
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