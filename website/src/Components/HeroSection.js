import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Empowering Your Digital Presence</h1>
                <p className="hero-subtitle">
                    Xcentic specializes in innovative solutions to boost your brand and digital presence.
                </p>
                <div className="services-container">
                    <Link to="/services/digital-marketing" className="service-card">
                        <h3>Digital Marketing</h3>
                        <p>Reach and engage with your audience through targeted strategies.</p>
                    </Link>
                    <Link to="/services/web-development" className="service-card">
                        <h3>Web Development</h3>
                        <p>Create modern, responsive websites that elevate your brand.</p>
                    </Link>
                    <Link to="/services/seo-optimization" className="service-card">
                        <h3>SEO Optimization</h3>
                        <p>Improve your search rankings and attract more visitors.</p>
                    </Link>
                    <Link to="/services/content-creation" className="service-card">
                        <h3>Social Media Management</h3>
                        <p>Manage and grow your social presence with our expertise.</p>
                    </Link>
                    <Link to="/services/content-creation" className="service-card">
                        <h3>Content Creation</h3>
                        <p>Engaging content that resonates with your audience.</p>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
