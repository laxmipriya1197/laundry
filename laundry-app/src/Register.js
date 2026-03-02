import { db } from "./FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      await addDoc(collection(db, "users"), {
        email: email,
        password: password,
        createdAt: new Date(),
      });

      alert("Registration successful");
      localStorage.setItem("registered", "true");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="main">
     
      <h1 className="app-title">
        Welcome to <span>Spark Cleaning & Laundry Service</span>
      </h1>

    
      <form className="form" onSubmit={handleRegister}>
        <h2 style={{ textAlign: "center" }}>Register</h2>

        <input
          placeholder="Enter your email"
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="*********"
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
