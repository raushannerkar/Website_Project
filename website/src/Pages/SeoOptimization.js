import React from 'react';
import ParticlesContainer from '../Components/ParticlesContainer';
import Footer from '../Components/Footer';
import './Home.css'; 
import Seo from '../Components/Seo';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function AppDevelopment() {
  return (
      <div className='homepage'>
          <ParticlesContainer id="particles" />
          <Seo />
          <Footer />
          {/* Other components */}
      </div>
  );
}

export default AppDevelopment;