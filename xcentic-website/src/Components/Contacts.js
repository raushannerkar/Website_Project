import React from 'react';
import './Contacts.css';

function ContactUs() {
    return (
        <section className="contact-section">
            <div className="contact-header">
                <h1>Get in Touch</h1>
                <p>We would love to hear from you! Reach out with any questions, inquiries, or project ideas.</p>
            </div>
            <form className="contact-form">
                <div className="form-group">
                    <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                    <input type="tel" name="phone" placeholder="Your Number" />
                </div>
                <div className="form-group">
                    <input type ="text" placeholder="Your Message" rows="5" required />
                </div>
                <button type="submit" className="contact-submit">Send Message</button>
            </form>
        </section>
    );
}

export default ContactUs;
