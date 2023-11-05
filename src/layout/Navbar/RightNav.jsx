import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const RightNav = () => {

    const handleScrollToHighlights = () => {
        const highlights = document.querySelector('#highlights');
        window.scrollTo({
            top: highlights.offsetTop,
            behavior: 'smooth'
        });
    };


    return (
        <ul className=''>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/chengdu">Chengdu</CustomLink>
            <CustomLink to="/chongqing">Chongqing</CustomLink>
            <CustomLink to="/zhangjiajie">Zhangjiajie</CustomLink>
            <CustomLink to="/changsha">Changsha</CustomLink>
            <CustomLink to="/wuhan">Wuhan</CustomLink>
            <CustomLink to="/" onClick={handleScrollToHighlights} className="highlights-navbar">Highlightsngsda</CustomLink>
        </ul>
    )
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

export default RightNav

