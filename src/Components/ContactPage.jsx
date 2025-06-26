import React from 'react';
import '../Styles/ContactPage.css';

const ContactPage = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Fill out the form below or reach us via the contact details.</p>

        <div className="contact-wrapper">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea rows="5" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-details">
            <h4>Reach Us At</h4>
            <p><strong>Email:</strong> support@gotrip.com</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Address:</strong> 123 Travel Street, Adventure City, Earth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
