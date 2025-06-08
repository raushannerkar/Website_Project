import React from 'react';
import ParticlesContainer from '../Components/ParticlesContainer';
import Footer from '../Components/Footer';
import Service from '../Components/Service'
import './Home.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Services() {
  return (
      <div className='homepage'>
          
          <ParticlesContainer id="particles" />
          <Service />
          <Footer />
          {/* Other components */}
      </div>
  );
}

export default Services;