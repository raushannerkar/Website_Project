import React from 'react';
import ParticlesContainer from '../Components/ParticlesContainer';
import HeroSection from '../Components/HeroSection';
import TestimonialSlider from '../Components/TestimonialSlider';
import Footer from '../Components/Footer';
import AboutSection from '../Components/AboutSection';
import './Home.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home() {
    return (
        <div className='homepage'>
            
            <ParticlesContainer id="particles" />
            <HeroSection />
            <AboutSection />
            <TestimonialSlider />
            <Footer />
            {/* Other components */}
        </div>
    );
}

export default Home;
