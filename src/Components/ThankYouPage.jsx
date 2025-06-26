import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/ThankYouPage.css';

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <h2>🎉 Thank You!</h2>
        <p>Your booking has been confirmed.</p>
        <p>We’ll contact you soon with more details.</p>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    </div>
  );
};

export default ThankYouPage;
