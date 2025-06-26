import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import emailjs from 'emailjs-com';
import 'react-datepicker/dist/react-datepicker.css';
import '../Styles/BookingForm.css';

const BookingForm = () => {
  const navigate = useNavigate();

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    travelers: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    const formattedDates = `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: `New Booking for ${formData.destination}`,
      message: `
        Name: ${formData.name}
        Email: ${formData.email}
        Destination: ${formData.destination}
        Travel Dates: ${formattedDates}
        Number of Travelers: ${formData.travelers}
      `
    };

    emailjs.send(
      'service_kks4lt7',        // ✅ Your EmailJS Service ID
      'template_nu1951j',       // ✅ Your EmailJS Template ID
      templateParams,
      'F6vXdNlV-pFS1knHg'       // ✅ Your EmailJS Public Key
    ).then(() => {
      navigate('/payment'); // Redirect on success
    }).catch((error) => {
      console.error('EmailJS Error:', error);
      alert("Failed to send booking email. Please try again.");
    });
  };

  return (
    <section className="booking-form-section">
      <div className="booking-form-container">
        <h2>Book Your Trip</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            onChange={handleChange}
          />

          <label>Destination</label>
          <input
            type="text"
            name="destination"
            placeholder="Destination you want to visit"
            required
            onChange={handleChange}
          />

          <label>Travel Dates</label>
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            placeholderText="Select travel date range"
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            className="datepicker-input"
            required
          />

          <label>Number of Travelers</label>
          <input
            type="number"
            name="travelers"
            placeholder="e.g., 2"
            min="1"
            required
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">Submit Booking</button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
