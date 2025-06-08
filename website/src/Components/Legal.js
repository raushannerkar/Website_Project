import React from 'react';
import './WebDev.css';
import { Link } from 'react-router-dom';
import gif1 from '../Assets/l1.jfif';
import gif2 from '../Assets/l2.jfif';
import gif3 from '../Assets/l3.jpg';
function AppDev() {
    return (
        <div className="web-development-page">
            <h1>Legal Services</h1>
            <p className="intro-text">At Xcentic, we provide professional legal services that ensure your business remains compliant, protected, and efficient. Explore our specialized legal services below.</p>

            <div className="service-section">
                <div className="text-content">
                    <h2>Contract Drafting and Review</h2>
                    <p>Our team of experts drafts, reviews, and negotiates contracts that safeguard your business interests. Whether it’s a simple agreement or complex commercial contracts, we ensure that your terms are clear, enforceable, and in line with the latest legal standards.</p>
                </div>
                <img src={gif1} alt="Contract Drafting" className="service-gif" />
            </div>

            <div className="service-section">
                <img src={gif3} alt="Corporate Law Services" className="service-gif" />
                <div className="text-content">
                    <h2>Corporate Law Services</h2>
                    <p>Our corporate law services help businesses navigate the complexities of formation, governance, and compliance. We assist in mergers, acquisitions, intellectual property rights, and employment matters to ensure your business operates smoothly and legally.</p>
                </div>
            </div>

            <div className="service-section">
                <div className="text-content">
                    <h2>Dispute Resolution</h2>
                    <p>We specialize in resolving legal disputes efficiently, whether through mediation, arbitration, or litigation. Our team is skilled at representing your interests and finding the best solution to avoid lengthy and costly court proceedings.</p>
                </div>
                <img src={gif2} alt="Dispute Resolution" className="service-gif" />
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