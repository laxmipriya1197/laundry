import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: '✅',
      title: 'Verified Staff',
      description: 'All our staff members are verified and background checked'
    },
    {
      id: 2,
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Competitive prices without compromising on quality'
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Fast Service',
      description: 'Quick turnaround time to meet your busy schedule'
    },
    {
      id: 4,
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock customer support for your convenience'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="why-choose-us-container">
        <h2 className="why-choose-us-title">Why Choose Us</h2>
        <p className="why-choose-us-subtitle">Experience the difference with our professional service</p>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

