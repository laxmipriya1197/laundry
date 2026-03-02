import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesOverview.css';

const ServicesOverview = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      icon: '🏠',
      title: 'Home Cleaning',
      description: 'Professional deep cleaning for your entire home. We make it sparkle!'
    },
    {
      id: 2,
      icon: '👔',
      title: 'Laundry Pickup & Delivery',
      description: 'Convenient pickup and delivery service. Clean clothes delivered to your door.'
    },
    {
      id: 3,
      icon: '✨',
      title: 'Deep Cleaning',
      description: 'Thorough cleaning service for special occasions or regular maintenance.'
    },
    {
      id: 4,
      icon: '🧺',
      title: 'Ironing / Sofa Cleaning',
      description: 'Professional ironing services and sofa cleaning to keep your home fresh.'
    }
  ];

  const handleClick = () => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      alert('Please register to book a service');
      navigate('/register');
      return;
    }
    navigate('/book');
  };

  return (
    <section id="services" className="services-overview">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">Choose from our range of professional cleaning services</p>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-name">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-button" onClick={handleClick}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

