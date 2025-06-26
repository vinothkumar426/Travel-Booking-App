import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/PaymentPage.css'; // Import CSS file

const PaymentPage = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Payment Successful!");
    navigate("/thankyou"); // Redirect to  thank-you
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2>Payment Gateway</h2>
        <p>Select a Payment Method:</p>
        <div className="payment-options">
          <button onClick={handlePayment}>Pay with UPI</button>
          <button onClick={handlePayment}>Pay with Card</button>
          <button onClick={handlePayment}>Pay with Net Banking</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
