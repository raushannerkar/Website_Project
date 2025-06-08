import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import AboutSection from './Pages/About';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import WebDevelopment from './Pages/WebDevelopment';
import AppDevelopment from './Pages/AppDevelopment';
import ContentCreation from './Pages/ContentCreation';
import SeoOptimization from './Pages/SeoOptimization';
import DigitalMarketting from './Pages/DigitalMarketting';
import LegalServices from './Pages/LegalServices';
import ScrollToTop from './ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<AboutSection />} />
                    <Route path="/services/web-development" element={<WebDevelopment />} />
                    <Route path="/services/app-development" element={<AppDevelopment />} />
                    <Route path="/services/seo-optimization" element={<SeoOptimization />} />
                    <Route path="/services/content-creation" element={<ContentCreation />} />
                    <Route path="/services/digital-marketing" element={<DigitalMarketting />} />
                    <Route path="/services/legal-services" element={<LegalServices />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
