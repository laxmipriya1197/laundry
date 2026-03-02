import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
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
    <section id="book" className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Ready to make your home sparkle?</h2>
        <p className="cta-description">Book our professional cleaning service today and experience the difference!</p>
        <button className="cta-button" onClick={handleClick}>
          Book Service
        </button>
      </div>
    </section>
  );
};

export default CTA;
