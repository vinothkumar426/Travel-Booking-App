// components/LoginModal.jsx
import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import '../Styles/LoginModal.css';

const LoginModal = ({ onClose, onLoginSuccess }) => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOtp = () => {
    if (mobile.length === 10) {
      setStep(2);
    } else {
      alert('Enter a valid 10-digit mobile number');
    }
  };

  const handleVerifyOtp = () => {
    if (otp === '1234') {
      onLoginSuccess();
      onClose();
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>
            <FaTimes size={24} />
        </button>

        {step === 1 ? (
          <>
            <h3>Login with Mobile</h3>
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <button onClick={handleSendOtp}>Send OTP</button>
          </>
        ) : (
          <>
            <h3>Enter OTP</h3>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerifyOtp}>Verify OTP</button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
