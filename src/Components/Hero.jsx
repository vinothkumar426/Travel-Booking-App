import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/packages');
  }
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Explore the World with GoTrip</h1>
        <p>Find amazing places at the best prices, and plan your next unforgettable journey.</p>
        <button className="hero-btn" onClick={handleClick}>Start Your Journey</button>
      </div>
    </section>
  );
};

export default Hero;
