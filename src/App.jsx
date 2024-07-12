
import Navbar from './layout/Navbar/Navbar';
import React, { useEffect } from 'react';
import Footer from "./layout/Footer/Footer";
import Home from './views/Home'
import About from "./views/About";
import './styles/pageStyles.css';
import CityPage from "./views/CityPage/CityPage";
import axios from 'axios';
import { useState } from 'react';
import UploadPost from './views/UploadPost/UploadPost';
import Login from './views/Login/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  const [cities, setCities] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getCities')
      .then(cities => {
        setCities(cities.data)
        console.log(cities.data)
      })
      .catch(err => console.log(err))
  }, [])

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
          <Route path="/login" element={<Login />} />
          {/* <Route path="/upload" element={<UploadPost />} /> */}
          {/* <ProtectedRoute path="/upload">
            <UploadPost />
          </ProtectedRoute> */}
          <Route path="/upload" element={localStorage.getItem("user")? <UploadPost /> : <Navigate to="/login" />} />
          {/* <Route exact path='/upload/*' elemdocker run --network=mynetwork -p 5173:5173 -d frontend-asia-adventuresdocker run --network=mynetwork -p 5173:5173 -d frontend-asia-adventuresdocker run --network=mynetwork -p 5173:5173 -d frontend-asia-adventuresdocker run --network=mynetwork -p 5173:5173 -d frontend-asia-adventuresent={<ProtectedRoute/>}>
            <Route exact path='/upload/*' element={<UploadPost/>}/>
          </Route> */}
        </Routes>

        <Footer />
      </div>
    </>
  );
}

