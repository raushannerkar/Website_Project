import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import photo1 from '../Assets/Web_Development.png';
import photo2 from '../Assets/App_Development.png';
import photo3 from '../Assets/Digital_Marketting.png';
import photo4 from '../Assets/Legal_Services.jpg';
import photo5 from '../Assets/Content.png';
import photo6 from '../Assets/seooptimisation.png';
// Sample services data with image paths
const services = [
    {
        title: 'Web Development',
        path: '/services/web-development',
        image: photo1
    },
    {
        title: 'App Development',
        path: '/services/app-development',
        image: photo2
    },
    {
        title: 'Digital Marketing',
        path: '/services/digital-marketing',
        image: photo3
    },
    {
        title: 'Legal Services',
        path: '/services/legal-services',
        image: photo4
    },
    {
        title: 'Content Creation',
        path: '/services/content-creation',
        image: photo5
    },
    {
        title: 'SEO Optimization',
        path: '/services/seo-optimization',
        image: photo6
    },
];

function Services() {
    return (
        <div className="servicess-page">
            <div className="servicess-grid">
                {services.map((service, index) => (
                    <Link to={service.path} key={index} className="services-card">
                        <div className="services-content">
                            <h2>{service.title}</h2>
                        </div>
                        <div className="image-container" style={{ backgroundImage: `url(${service.image})` }} />
                    </Link>
                ))}
            </div>
        </div>
    );
}



export default Services;
