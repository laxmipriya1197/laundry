import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './ServicesPage.css';

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      name: 'Home Cleaning',
      price: '₹499',
      originalPrice: '₹599',
      description: 'Professional deep cleaning for your entire home. We make it sparkle!',
      icon: '🏠',
      badge: 'Best Seller',
      discount: '17% OFF',
      isPopular: true
    },
    {
      id: 2,
      name: 'Laundry Pickup & Delivery',
      price: '₹699',
      description: 'Convenient pickup and delivery service. Clean clothes delivered to your door.',
      icon: '👔',
      badge: 'Popular',
      isPopular: true
    },
    {
      id: 3,
      name: 'Deep Cleaning',
      price: '₹899',
      description: 'Thorough cleaning service for special occasions or regular maintenance.',
      icon: '✨'
    },
    {
      id: 4,
      name: 'Ironing Service',
      price: '₹299',
      originalPrice: '₹399',
      description: 'Professional ironing services to keep your clothes crisp and neat.',
      icon: '🧺',
      discount: '25% OFF'
    },
    {
      id: 5,
      name: 'Sofa Cleaning',
      price: '₹599',
      description: 'Expert sofa cleaning to keep your furniture fresh and clean.',
      icon: '🛋️'
    }
  ];

  const handleBookNow = (serviceName) => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      alert('Please register to book a service');
      navigate('/register');
      return;
    }
    navigate('/book', { state: { serviceName } });
  };

  return (
    <div className="services-page">
      <Navbar />
      <div className="services-page-content">
        <div className="services-page-header">
          <h1 className="services-page-title">Our Services</h1>
          <p className="services-page-subtitle">Choose the service that fits your needs</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className={`service-card ${service.isPopular ? 'popular-service' : ''}`}>
              {service.badge && (
                <div className="service-badge">{service.badge}</div>
              )}
              {service.discount && (
                <div className="discount-badge">{service.discount}</div>
              )}
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-name">{service.name}</h3>
              <div className="service-price-container">
                {service.originalPrice && (
                  <span className="original-price">{service.originalPrice}</span>
                )}
                <span className="service-price">{service.price}</span>
              </div>
              <p className="service-description">{service.description}</p>
              <button 
                className="service-button"
                onClick={() => handleBookNow(service.name)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;

