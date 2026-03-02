import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

 
  useEffect(() => {
    const isAdminAuthed = localStorage.getItem("adminAuthed") === "true";
    if (!isAdminAuthed) {
      alert("Please login as admin");
      navigate("/admin");
      return;
    }
    getBookings();
  }, [navigate]);

  
  const getBookings = async () => {
    const bookingRef = collection(db, "bookings");
    const data = await getDocs(bookingRef);

    const bookingList = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setBookings(bookingList);
    setLoading(false);
  };

  
  const updateStatus = async (id, status) => {
    const bookingDoc = doc(db, "bookings", id);
    await updateDoc(bookingDoc, { status });

    alert("Status updated");
    getBookings(); 
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h2>Admin Dashboard</h2>

        {loading && <p>Loading bookings...</p>}

        {!loading &&
          bookings.map((booking) => (
            <div
              key={booking.id}
              style={{
                border: "1px solid #ccc",
                marginBottom: "15px",
                padding: "10px",
              }}
            >
              <p><b>Service:</b> {booking.service}</p>
              <p><b>Name:</b> {booking.name}</p>
              <p><b>Mobile:</b> {booking.mobile}</p>
              <p><b>Date:</b> {booking.date}</p>
              <p><b>Time:</b> {booking.time}</p>
              <p><b>Status:</b> {booking.status}</p>

              <button onClick={() => updateStatus(booking.id, "Pending")}>
                Pending
              </button>
              <button onClick={() => updateStatus(booking.id, "Confirmed")}>
                Confirm
              </button>
              <button onClick={() => updateStatus(booking.id, "Completed")}>
                Complete
              </button>
            </div>
          ))}
      </div>

      <Footer />
    </>
  );
};

export default AdminDashboard;
