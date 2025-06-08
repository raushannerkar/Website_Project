import React from 'react';
import ParticlesContainer from '../Components/ParticlesContainer';
import Footer from '../Components/Footer';
import './Home.css'; 
import WebDev from '../Components/WebDev';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function WebDevelopment() {
  return (
      <div className='homepage'>
          <ParticlesContainer id="particles" />
          <WebDev />
          <Footer />
          {/* Other components */}
      </div>
  );
}

export default WebDevelopment;