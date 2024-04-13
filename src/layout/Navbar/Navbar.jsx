import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import React from 'react'
import cities from '../../data/cities.json';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleScrollToHighlights = () => {
    const highlights = document.querySelector('#highlights');
    window.scrollTo({
      top: highlights.offsetTop,
      behavior: 'smooth'
    });
    toggleMenu();
    console.log("clicked")
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <Link className="site-title" to="/"> Asia trip</Link>

      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
      <ul className={`nav-links ${showMenu ? '' : 'active'}`}>
        <CustomLink className="custom-link" to="/about" onClick={toggleMenu}>About</CustomLink>
        {cities.map(city => (
          <CustomLink key={city.name} to={`/${city.name.split(' - ')[0].toLowerCase()}`} onClick={toggleMenu}>{city.name}</CustomLink>
        ))}
        <CustomLink to="/" isHighlights={true} onClick={handleScrollToHighlights}>Highlights</CustomLink>
        <CustomLink key="uploadPost" to="upload">Upload</CustomLink>
        <CustomLink key="login" to="login">Login</CustomLink>

      </ul>


    </nav>
  );
}

function CustomLink({ to, children, isHighlights = false, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true }) && !isHighlights;
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}