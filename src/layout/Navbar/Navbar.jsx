import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleScrollToHighlights = () => {
    const highlights = document.querySelector('#highlights');
    window.scrollTo({
      top: highlights.offsetTop,
      behavior: 'smooth'
    });
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
        <CustomLink className="custom-link" to="/about">About</CustomLink>
        <CustomLink to="/chengdu">Chengdu</CustomLink>
        <CustomLink to="/chongqing">Chongqing</CustomLink>
        <CustomLink to="/zhangjiajie">Zhangjiajie</CustomLink>
        <CustomLink to="/changsha">Changsha</CustomLink>
        <CustomLink to="/wuhan">Wuhan</CustomLink>
        <CustomLink to="/" isHighlights={true} onClick={handleScrollToHighlights}>Highlights</CustomLink>
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