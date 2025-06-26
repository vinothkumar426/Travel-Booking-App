import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
import '../Styles/Packages.css';
import paris from '../assets/Packages/paris-gateway.jpg';
import maldives from '../assets/Packages/maldives-luxury.jpg';
import bali from '../assets/Packages/bali-adventure.webp';
import switzerland from '../assets/Packages/switzerland.jpg';
import egypt from '../assets/Packages/egypt.jpg';
import japan from '../assets/Packages/japan.jpg';
import newyork from '../assets/Packages/newyork.jpg';
import rome from '../assets/Packages/rome.jpg';
import thailand from '../assets/Packages/thailand.jpg';
import sydney from '../assets/Packages/sydney.jpg';
import alaska from '../assets/Packages/alaska.jpg';
import brazil from '../assets/Packages/brazil.jpeg';
import canada from '../assets/Packages/canada.jpg';
import dubai from '../assets/Packages/dubai.jpg';
import hawaii from '../assets/Packages/hawaii.jpg';
import iceland from '../assets/Packages/iceland.jpg';
import jordan from '../assets/Packages/jordan.jpg';
import kenya from '../assets/Packages/kenya.avif';
import morocco from '../assets/Packages/morocco.jpg';
import nepal from '../assets/Packages/nepal.jpg';
import newzeland from '../assets/Packages/newzeland.jpeg';
import peru from '../assets/Packages/peru.jpeg';
import portugal from '../assets/Packages/portugal.jpg';
import santorini from '../assets/Packages/santorini.jpg';
import scotland from '../assets/Packages/scotland.jpg';
import singapore from '../assets/Packages/singapore.jpg';
import southkorea from '../assets/Packages/southkorea.webp';
import spain from '../assets/Packages/spain.jpeg';
import turkey from '../assets/Packages/turkey.jpg';
import vietnam from '../assets/Packages/vietnam.jpg';
import LoginModal from './LoginModal';
import { FaTimes } from "react-icons/fa";


const Packages = () => {
  const packages = [
    {
      id: 1,
      title: 'Paris Getaway',
      image: paris,
      duration: '5 Days / 4 Nights',
      price: '$899',
      description: 'Enjoy the Eiffel Tower, fine dining, and romantic river cruises.',
    },
    {
      id: 2,
      title: 'Maldives Luxury',
      image: maldives,
      duration: '6 Days / 5 Nights',
      price: '$1199',
      description: 'Relax in overwater bungalows with crystal-clear waters.',
    },
    {
      id: 3,
      title: 'Bali Adventure',
      image: bali,
      duration: '7 Days / 6 Nights',
      price: '$999',
      description: 'Explore temples, beaches, and lush jungles in bali.',
    },
    {
    id: 4,
    title: 'Switzerland Highlights',
    image: switzerland,
    duration: '6 Days / 5 Nights',
    price: '$1399',
    description: 'Witness the Alps, scenic trains, and pristine lakes.',
  },
  {
    id: 5,
    title: 'Mystical Egypt',
    image: egypt,
    duration: '5 Days / 4 Nights',
    price: '$1099',
    description: 'Discover pyramids, the Nile, and ancient civilization.',
  },
  {
    id: 6,
    title: 'Japan Explorer',
    image: japan,
    duration: '8 Days / 7 Nights',
    price: '$1499',
    description: 'Experience Tokyo, Kyoto temples, cherry blossoms, and bullet trains.',
  },
  {
    id: 7,
    title: 'New York Escape',
    image: newyork,
    duration: '4 Days / 3 Nights',
    price: '$799',
    description: 'Enjoy Times Square, Broadway, and Central Park.',
  },
  {
    id: 8,
    title: 'Rome Discovery',
    image: rome,
    duration: '6 Days / 5 Nights',
    price: '$999',
    description: 'Walk through the Colosseum and the Vatican City.',
  },
  {
    id: 9,
    title: 'Thailand Tour',
    image: thailand,
    duration: '5 Days / 4 Nights',
    price: '$749',
    description: 'Bangkok, Phuket, and exotic island hopping.',
  },
  {
    id: 10,
    title: 'Sydney Explorer',
    image: sydney,
    duration: '7 Days / 6 Nights',
    price: '$1399',
    description: 'Opera House, beaches, and Aussie adventures.',
  },
  {
  id: 11,
  title: 'Dubai Desert Safari',
  image: dubai ,
  duration: '4 Days / 3 Nights',
  price: '$899',
  description: 'Luxury shopping, desert safaris, and skyscraper views.',
},
{
  id: 12,
  title: 'Iceland Northern Lights',
  image: iceland ,
  duration: '5 Days / 4 Nights',
  price: '$1199',
  description: 'Watch the aurora borealis and bathe in Blue Lagoon.',
},
{
  id: 13,
  title: 'Kenya Safari',
  image: kenya ,
  duration: '6 Days / 5 Nights',
  price: '$1299',
  description: 'Wildlife safaris through Maasai Mara and Serengeti.',
},
{
  id: 14,
  title: 'Santorini Escape',
  image: santorini ,
  duration: '5 Days / 4 Nights',
  price: '$999',
  description: 'White-washed buildings, sunsets, and blue domes.',
},
{
  id: 15,
  title: 'Singapore' ,
  image: singapore ,
  duration: '4 Days / 3 Nights',
  price: '$899',
  description: 'Marina Bay, Sentosa, and vibrant street food.',
},
{
  id: 16,
  title: 'Alaskan Cruise',
  image: alaska ,
  duration: '7 Days / 6 Nights',
  price: '$1499',
  description: 'Glaciers, whales, and scenic coastal towns.',
},
{
  id: 17,
  title: 'Hawaii' ,
  image: hawaii ,
  duration: '6 Days / 5 Nights',
  price: '$1399',
  description: 'Volcanoes, beaches, luaus, and waterfalls.',
},
{
  id: 18,
  title: 'Morocco Caravan',
  image: morocco ,
  duration: '5 Days / 4 Nights',
  price: '$1099',
  description: 'Explore souks, deserts, and colorful riads.',
},
{
  id: 19,
  title: 'South Korea Discovery',
  image: southkorea ,
  duration: '6 Days / 5 Nights',
  price: '$999',
  description: 'Palaces, Seoul nightlife, and K-pop culture.',
},
{
  id: 20,
  title: 'Turkey Wonders',
  image: turkey ,
  duration: '6 Days / 5 Nights',
  price: '$899',
  description: 'Istanbul, Cappadocia hot air balloons, and more.',
},
{
  id: 21,
  title: 'Canada Rockies',
  image: canada ,
  duration: '7 Days / 6 Nights',
  price: '$1399',
  description: 'Banff, Lake Louise, and national park trails.',
},
{
  id: 22,
  title: 'Spain Fiesta Tour',
  image: spain ,
  duration: '5 Days / 4 Nights',
  price: '$999',
  description: 'Madrid, Barcelona, and flamenco nights.',
},
{
  id: 23,
  title: 'Vietnam Explorer',
  image: vietnam ,
  duration: '6 Days / 5 Nights',
  price: '$899',
  description: 'Hanoi, Halong Bay, and ancient temples.',
},
{
  id: 24,
  title: 'Peru & Machu Picchu',
  image: peru ,
  duration: '6 Days / 5 Nights',
  price: '$1299',
  description: 'Hike to ancient ruins and experience local culture.',
},
{
  id: 25,
  title: 'Nepal Trekking Tour',
  image: nepal ,
  duration: '8 Days / 7 Nights',
  price: '$1099',
  description: 'Mountains, monasteries, and breathtaking views.',
},
{
  id: 26,
  title: 'Brazil Carnival Experience',
  image: brazil ,
  duration: '5 Days / 4 Nights',
  price: '$1199',
  description: 'Rio, samba, and world-famous carnival vibes.',
},
{
  id: 27,
  title: 'New Zealand Adventure',
  image: newzeland ,
  duration: '7 Days / 6 Nights',
  price: '$1499',
  description: 'Nature, bungee, and Lord of the Rings trails.',
},
{
  id: 28,
  title: 'Scotland Highlands Tour',
  image: scotland ,
  duration: '5 Days / 4 Nights',
  price: '$999',
  description: 'Castles, lochs, and whisky trails.',
},
{
  id: 29,
  title: 'Portugal Wine Retreat',
  image: portugal ,
  duration: '5 Days / 4 Nights',
  price: '$899',
  description: 'Douro Valley wines and coastal charm.',
},
{
  id: 30,
  title: 'Jordan' ,
  image: jordan ,
  duration: '6 Days / 5 Nights',
  price: '$999',
  description: 'Petra, Dead Sea, and desert camping.',
}
  ];
const [showModal, setShowModal] = useState(false);
const [otpSent, setOtpSent] = useState(false);
const [mobile, setMobile] = useState("");
const [otp, setOtp] = useState("");
const navigate = useNavigate(); // from react-router-dom
const [selectedPackage, setSelectedPackage] = useState(null);

const handleBookClick = (pkg) => {
  setSelectedPackage(pkg);
  setShowModal(true);
};

const handleSendOtp = () => {
  if (mobile.length === 10) {
    setOtpSent(true);
  } else {
    alert("Enter a valid 10-digit number");
  }
};

const handleVerifyOtp = () => {
  if (otp === "123456") {
    setShowModal(false);
    navigate("/booking"); // redirect to booking
  } else {
    alert("Incorrect OTP. Try 123456.");
  }
};

const handleCloseModal = () => {
  setShowModal(false);
  setOtpSent(false);
  setOtp("");
  setMobile("");
};

 return (
  <section className="packages">
    <div className="packages-container">
      <h2>Our Travel Packages</h2>
      <div className="package-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.title} />
            <div className="package-details">
              <h3>{pkg.title}</h3>
              <p>{pkg.duration}</p>
              <p>{pkg.description}</p>
              <span className="price">{pkg.price}</span>
              <button className="book-btn" onClick={() => handleBookClick(pkg)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Login Modal */}
    {showModal && (
      <div className="modal-overlay">
        <div className="login-modal">
          <h3>{otpSent ? "Enter OTP" : "Login to Continue"}</h3>
          {!otpSent ? (
            <>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <button onClick={handleSendOtp}>Send OTP</button>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button onClick={handleVerifyOtp}>Verify OTP</button>
            </>
          )}
         <button className="close-btn" onClick={handleCloseModal}>
  <FaTimes size={24} />
</button>

        </div>
      </div>
    )}

    <footer className="packages-footer">
      <p>&copy; {new Date().getFullYear()} GoTrip. All rights reserved.</p>
    </footer>
  </section>
);

};

export default Packages;
