// TestimonialSlider.js
import React from 'react';
import Slider from 'react-slick';
import './TestimonialSlider.css';
import photo1 from '../Assets/Screenshot 2024-11-05 183219.png';
import photo2 from '../Assets/Screenshot 2024-11-05 183251.png';
import photo3 from '../Assets/Screenshot 2024-11-05 183414.png';
import photo4 from '../Assets/Screenshot 2024-11-05 183330.png';

// Sample data for clients (replace with actual data)
const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        number: '123-456-7890',
        photo: photo1,
        feedback: 'Amazing service, highly recommend!',
    },
    {
        id: 2,
        name: 'Jane Smith',
        number: '234-567-8901',
        photo: photo2,
        feedback: 'Exceeded my expectations!',
    },
    {
        id: 3,
        name: 'Michael Brown',
        number: '345-678-9012',
        photo: photo3,
        feedback: 'Professional and efficient!',
    },
    {
        id: 4,
        name: 'Michael James',
        number: '812-678-9012',
        photo: photo4,
        feedback: 'This is the best service!',
    },

];

function TestimonialSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="testimonial-slider">
            <h2>What Our Clients Say</h2>
            <Slider {...settings}>
                {testimonials.map((client) => (
                    <div key={client.id} className="testimonial-card">
                        <img src={client.photo} alt={client.name} className="client-photo" />
                        <div className="testimonial-details">
                            <h3>{client.name}</h3>
                            <p className="client-number">{client.number}</p>
                            <p className="client-feedback">"{client.feedback}"</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default TestimonialSlider;
