import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './FirebaseConfig';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const userEmail = typeof window !== 'undefined' ? localStorage.getItem('userEmail') : null;
  const isAdmin = typeof window !== 'undefined' ? localStorage.getItem('adminAuthed') === 'true' : false;

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const handleUserLogout = async () => {
    try {
      await signOut(auth);
    } catch {}
    localStorage.removeItem('userEmail');
    localStorage.removeItem('registered');
    navigate('/register');
    setOpen(false);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('adminAuthed');
    navigate('/admin');
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">SPARK CLEAN</span>
        </Link>

        <button className="navbar-toggle" onClick={toggleMenu}>
          {open ? '✕' : '☰'}
        </button>

      
        <div className={`navbar-menu ${open ? 'open' : ''}`}>
          <button className="navbar-close" onClick={closeMenu}></button>

        
          <Link to="/" className="navbar-link" onClick={closeMenu}>Home</Link>
          <Link to="/services" className="navbar-link" onClick={closeMenu}>Services</Link>
          <Link to="/book" className="navbar-link" onClick={closeMenu}>Book Service</Link>
          <Link to="/mybookings" className="navbar-link" onClick={closeMenu}>My Bookings</Link>
          <Link to="/admindashboard" className="navbar-link" onClick={closeMenu}>AdminDashboard</Link>

         
          <div className="navbar-buttons">
            {userEmail ? (
              <>
                <span className="navbar-user">Hello {userEmail}</span>
                <button className="btn-login" onClick={handleUserLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/register" className="btn-login" onClick={closeMenu}>Register</Link>
                <Link to="/login" className="btn-login" onClick={closeMenu}>User Login</Link>
              </>
            )}
            {isAdmin ? (
              <button className="btn-login btn-admin" onClick={handleAdminLogout}>Admin Logout</button>
            ) : (
              <Link to="/admin" className="btn-login btn-admin" onClick={closeMenu}>Admin Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;