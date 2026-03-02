import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './FirebaseConfig';
import Navbar from './Navbar';
import Footer from './Footer';
import './BookService.css';

const BookService = () => {
  
  const location = useLocation();
  
  
  const navigate = useNavigate();
  
 
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    service: '',
    date: '',
    time: '',
    address: ''
  });

  
  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      alert('Please register to book a service');
      navigate('/register');
      return;
    }
    if (location.state && location.state.serviceName) {
      const serviceName = location.state.serviceName;
      setFormData(prevData => ({
        ...prevData,
        service: serviceName
      }));
    }
  }, [location.state, navigate]);

  
  const handleChange = (e) => {
    const fieldName = e.target.name;  
    const fieldValue = e.target.value; 
    
    setFormData({
      ...formData,
      [fieldName]: fieldValue 
    });
  };

  
  const formatTime = (time24) => {
    if (!time24) return '';
    
    const parts = time24.split(':');
    const hours = parseInt(parts[0]);
    const minutes = parts[1];
    
    
    let hour12 = hours % 12;
    if (hour12 === 0) hour12 = 12;
    
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    return `${hour12}:${minutes} ${ampm}`;
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    setIsSubmitting(true); 

    try {
     
      const timeFormatted = formatTime(formData.time);

      
      const bookingData = {
        name: formData.name,
        mobile: formData.mobile,
        service: formData.service,
        date: formData.date,
        time: timeFormatted,
        address: formData.address,
        status: 'Pending',
        createdAt: new Date().toISOString()
      };

     
      await addDoc(collection(db, 'bookings'), bookingData);
      
   
      alert('Booking submitted successfully!');
      
      
      navigate('/MyBookings');
      
    } catch (error) {
      
      alert('Failed to submit booking. Please try again.');
      setIsSubmitting(false); 
    }
  };

  return (
    <div className="book-service-page">
      <Navbar />
      <div className="book-service-content">
        <div className="book-service-header">
          <h1 className="book-service-title">Book Service</h1>
          <p className="book-service-subtitle">Fill in the details to book your service</p>
        </div>

        <div className="book-service-form-container">
          <form className="book-service-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="service">Service Type</label>
              <input
                type="text"
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                placeholder="Select a service"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                required
                className="form-textarea"
                rows="3"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Booking'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookService;

