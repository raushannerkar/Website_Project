import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);  // Scroll to the top of the page when location changes
    }, [location]);

    return null;  // This component does not render anything, just triggers the scroll
}

export default ScrollToTop;
