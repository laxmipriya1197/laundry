import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroBanner.css';

const HeroBanner = () => {
  const navigate = useNavigate();

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
    <section className="hero-banner">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Professional Cleaning & Laundry Services</h1>
        <p className="hero-description">
          Fast, affordable, and reliable service at your doorstep.
        </p>
        <button className="hero-button" onClick={handleClick}>
          Book Now
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;

