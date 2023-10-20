import React from 'react';
import { Link } from 'react-router-dom';
import './CityCard.css';

function CityCard({ cities }) {
  return (
    <div>
      {cities.map(city => (
        <div key={city.name} className="city-card">
          <img src={city.image} alt={city.name} />
          <div className="city-card-details">
            <div className="city-card-name">{city.name}</div>
            <div className="city-card-separator"></div>
            <div className="city-card-description">{city.description}</div>
            <Link to={`/${city.name.split(' ')[0].toLowerCase()}`} className="city-card-link">
              Details &rarr;
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CityCard;