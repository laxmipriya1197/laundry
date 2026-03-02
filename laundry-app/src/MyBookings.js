import React, { useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './FirebaseConfig';
import Navbar from './Navbar';
import Footer from './Footer';
import './MyBookings.css';
import { signOut } from 'firebase/auth';
import { auth } from './FirebaseConfig';
import { useNavigate } from 'react-router-dom';

const MyBookings = () => {

  
  const [phoneNumber, setPhoneNumber] = useState('');

 
  const [bookings, setBookings] = useState([]);

 
  const [isLoading, setIsLoading] = useState(false);

 
  const [error, setError] = useState('');

  
  const userEmail = typeof window !== 'undefined' ? localStorage.getItem('userEmail') : null;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('userEmail');
      localStorage.removeItem('registered');
      alert('Logged out');
      navigate('/register');
    } catch (e) {
      alert('Failed to logout');
    }
  };

  const fetchBookings = async () => {

    
    if (!phoneNumber) {
      setError('Please enter your phone number');
      return;
    }

    setIsLoading(true);
    setError('');
    setBookings([]);

    try {
     
      const bookingsRef = collection(db, 'bookings');

      
      const q = query(bookingsRef, where('mobile', '==', phoneNumber));

    
      const snapshot = await getDocs(q);

      let bookingsArray = [];

      snapshot.forEach((doc) => {
        bookingsArray.push({
          id: doc.id,
          ...doc.data()
        });
      });

      if (bookingsArray.length === 0) {
        setError('No bookings found for this phone number');
      }

      setBookings(bookingsArray);

    } catch (error) {
      console.log(error);
      setError('Something went wrong. Please try again.');
    }

    setIsLoading(false);
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBookings();
  };

  
  const getStatusColor = (status) => {
    if (status === 'Confirmed') return 'green';
    if (status === 'Completed') return 'blue';
    return 'orange'; 
  };

  return (
    <div className="my-bookings-page">

      <Navbar />

      <div className="my-bookings-content">

        <h1>My Bookings</h1>
        <p>Enter your phone number to see your bookings</p>

        {userEmail && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <span>Hello {userEmail}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}

       
        <form onSubmit={handleSubmit} className="phone-search-form">
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <button type="submit">
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </form>

       
        {error && <p className="error-message">{error}</p>}

       
        {bookings.length > 0 && (
          <div className="bookings-list">

            <h2>Total Bookings: {bookings.length}</h2>

            {bookings.map((booking) => (
              <div key={booking.id} className="booking-card">

                <h3>{booking.service}</h3>

                <span
                  className="booking-status"
                  style={{ backgroundColor: getStatusColor(booking.status) }}
                >
                  {booking.status}
                </span>

                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Time:</strong> {booking.time}</p>
                <p><strong>Address:</strong> {booking.address}</p>

              </div>
            ))}

          </div>
        )}

      </div>

      <Footer />

    </div>
  );
};

export default MyBookings;
