import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Login.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminEmail = "admin@sparkclean.com";
    const adminPassword = "admin123";
    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("adminAuthed", "true");
      alert("Admin login successful");
      navigate("/admindashboard");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <form className="form" onSubmit={handleSubmit}>
          <p id="heading">Admin Login</p>
          <div className="field">
            <input
              autoComplete="off"
              placeholder="admin email-id"
              className="input-field"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <input
              placeholder="password"
              className="input-field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AdminLogin;
