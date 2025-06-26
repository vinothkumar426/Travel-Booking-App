import React from 'react';
import '../Styles/Services.css';
import { FaHotel, FaPlane, FaMapMarkedAlt, FaUmbrellaBeach } from 'react-icons/fa';

const Services = () => {
  const services = [
    { icon: <FaHotel />, title: 'Hotel Booking', description: 'Find and book the best hotels worldwide at exclusive prices.' },
    { icon: <FaPlane />, title: 'Flight Booking', description: 'Book flights with top airlines and save more on travel.' },
    { icon: <FaMapMarkedAlt />, title: 'Tour Packages', description: 'Explore curated tours and travel packages tailored for you.' },
    { icon: <FaUmbrellaBeach />, title: 'Holiday Planning', description: 'Plan your perfect vacation with ease and fun.' },
  ];

  return (
    <section className="services-section">
      <h2>What We Offer</h2>
      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
