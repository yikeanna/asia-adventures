import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Navbar() {
  const handleScrollToHighlights = () => {
    const highlights = document.querySelector('#highlights');
    window.scrollTo({
      top: highlights.offsetTop,
      behavior: 'smooth'
    });
  };
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Asia trip
      </Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/chengdu">Chengdu</CustomLink>
        <CustomLink to="/chongqing">Chongqing</CustomLink>
        <CustomLink to="/zhangjiajie">Zhangjiajie</CustomLink>
        <CustomLink to="/changsha">Changsha</CustomLink>
        <CustomLink to="/wuhan">Wuhan</CustomLink>
        <CustomLink to="/" onClick={handleScrollToHighlights}>Highlightsn</CustomLink>
        {/* <Link to="/">Highlights</Link>
        <button className="scroll-button" onClick={handleScrollToHighlights}>
  Scroll to Highlights
</button> */}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <div>
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    </div>

  );
}
