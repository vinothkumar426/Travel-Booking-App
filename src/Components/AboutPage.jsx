import React from 'react';
import '../Styles/AboutPage.css';

const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        <h2>About GoTrip</h2>
        <p>
          GoTrip is your trusted partner in planning unforgettable travel experiences. Whether you're looking for adventure,
          relaxation, or cultural immersion, we offer handpicked destinations and customized travel packages to meet your needs.
        </p>
        <div className="about-highlights">
          <div className="highlight-box">
            <h3>Our Mission</h3>
            <p>
              To make travel accessible, enjoyable, and stress-free for everyone, by offering reliable service and expert guidance.
            </p>
          </div>
          <div className="highlight-box">
          <h3>Why Choose Us?</h3>
          <ul className="highlight-list">
          <li><span>✓</span> Tailored Packages</li>
          <li><span>✓</span> Affordable Prices</li>
          <li><span>✓</span> 24/7 Customer Support</li>
          <li><span>✓</span> Experienced Travel Advisors</li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
