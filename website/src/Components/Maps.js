import React from 'react';
import './Maps.css';

function Contact() {
    return (
        <div className="contact-page">
            
            <div className="contact-form">
                
            </div>

            
            <div className="office-location">
                <h1>Our Office Location</h1>
                <p>Aakash Vihar Colony near SRM Modinagar</p>

              
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3517054049933!2d-122.40135148468167!3d37.78505197975747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b7a420b9%3A0x2e5f4d8cd7f53171!2sGoogleplex!5e0!3m2!1sen!2sus!4v1517169995611"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
