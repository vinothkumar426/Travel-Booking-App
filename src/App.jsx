import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Destinations from './Components/Destinations';
import About from './Components/About';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import Packages from './Components/Packages'; // Additional page
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import BookingForm from './Components/BookingForm';
import PaymentPage from './Components/PaymentPage';
import ThankYouPage from './Components/ThankYouPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Destinations />
              <About />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        {/* You can add more pages like /contact, /booking here */}
      </Routes>
    </>
  );
}

export default App;
