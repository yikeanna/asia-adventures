
import Navbar from './layout/Navbar/Navbar';
import React, { useEffect } from 'react';
import Footer from "./layout/Footer/Footer";
import { Route, Routes } from "react-router-dom"
import Home from './views/Home'
import About from "./views/About";
import './styles/pageStyles.css';
// import cities from './data/cities.json';
import CityPage from "./views/CityPage/CityPage";
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import UploadPost from './views/UploadPost/UploadPost';
import Login from './views/Login/Login';


export default function App() {
  const [cities, setCities] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getCities')
      .then(cities => {
        setCities(cities.data)
        console.log(cities.data)
      })
      .catch(err => console.log(err))
    console.log("useEffect123")
    console.log(cities)

  },[])

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {cities.map(city => (
            <Route key={city.name} path={`/${city.name.split(' - ')[0].toLowerCase()}`} element={<CityPage city={city} />} />
          ))}
          <Route path="/upload" element={<UploadPost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
        <Footer />
      </div>
    </>
  );
}

