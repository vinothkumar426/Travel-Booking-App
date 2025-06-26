import React from 'react';
import '../Styles/Destinations.css';

import paris from '../assets/Destinations/paris.jpg';
import bali from '../assets/Destinations/bali.jpg';
import newyork from '../assets/Destinations/newyork.jpg';
import rome from '../assets/Destinations/rome.jpg';

const Destinations = () => {
  const places = [
    { image: paris, name: 'Paris, France' },
    { image: bali, name: 'Bali, Indonesia' },
    { image: newyork, name: 'New York, USA' },
    { image: rome, name: 'Rome, Italy' },
  ];

  return (
    <section className="destinations-section">
      <h2>Popular Destinations</h2>
      <div className="destinations-grid">
        {places.map((place, index) => (
          <div className="destination-card" key={index}>
            <img src={place.image} alt={place.name} />
            <div className="destination-name">{place.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
