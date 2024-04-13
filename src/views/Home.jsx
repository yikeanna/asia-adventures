import React, { useState } from 'react';
import CityCard from '../components/CityCard/CityCard';
import Intro from '../components/Intro/Intro';
import LetsConnect from '../components/LetsConnect/LetsConnect';
import cities from '../data/cities.json';
import '../styles/pageStyles.css'; // import the CSS file
import { FaSearch, FaTimes } from 'react-icons/fa';
import Auth from '../components/Auth/Auth';
import ImageUpload from '../components/ImageUpload/ImageUpload';


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleClear = () => {
    setSearchTerm('');
  };
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className= "home-container">
          <div>
    </div>
      <Intro />
      <div className="container">

        <div className="highlights" id="highlights">
          Highlights
        </div>

        <form className="search-form">

          <input
            type="text"
            placeholder="Search cities"
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm && (
            <FaTimes className="clear-icon" onClick={handleClear} />
          )}
          {/* <button >Search</button> */}
        </form>
      </div >
      <div className='city-cards'>

      {filteredCities.length > 0 ? (
        <CityCard cities={filteredCities} />
      ) : (
        <div className="no-results">We have not explore {searchTerm} yet:(</div>
      )}
      </div>


      <LetsConnect />
    </div>
  );
}