import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      number: '1',
      title: 'Choose your service',
      description: 'Select from our range of cleaning and laundry services'
    },
    {
      id: 2,
      number: '2',
      title: 'Select date & time',
      description: 'Pick a convenient date and time slot for your service'
    },
    {
      id: 3,
      number: '3',
      title: 'We pick up / clean',
      description: 'Our professional team arrives and handles everything'
    },
    {
      id: 4,
      number: '4',
      title: 'Get doorstep delivery',
      description: 'Receive your cleaned items or enjoy your sparkling home'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <h2 className="how-it-works-title">How It Works</h2>
        <p className="how-it-works-subtitle">Simple steps to get your cleaning done</p>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.id} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

