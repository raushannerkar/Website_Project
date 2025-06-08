import React from 'react';
import ParticlesContainer from '../Components/ParticlesContainer';
import HeroSection from '../Components/HeroSection';
import TestimonialSlider from '../Components/TestimonialSlider';
import Footer from '../Components/Footer';
import AboutSection from '../Components/AboutSection';
import Contacts from '../Components/Contacts'
import Maps from '../Components/Maps'
import './Home.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Contact() {
  return (
      <div className='homepage'>
          
          <ParticlesContainer id="particles" />
          <Contacts />
          <Maps />
          <Footer />
          {/* Other components */}
      </div>
  );
}

export default Contact;