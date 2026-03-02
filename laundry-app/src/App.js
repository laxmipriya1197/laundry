import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import ServicesPage from "./ServicesPage";
import BookService from "./BookService";
import MyBookings from "./MyBookings";
import AdminDashboard from "./AdminDashboard";
import AdminLogin from "./AdminLogin";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/book" element={<BookService />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />


      </Routes>
   
  );
}

export default App;
