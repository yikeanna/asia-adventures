
import './Intro.css';
import image from '/src/assets/fbaw/fbaw3.jpg';
import React from 'react'
export default function Intro() {
    return (
        <div>
            <div className="image-container">
                <div className="intro-details">
                    <h2 className="digital-diary">Digital Diary</h2>
                    <h1 className="our-adventure">Our Adventure in Asia Summer 2023</h1>
                    <h3 className="names">Anna-Lin-Rosalie-Maggie</h3>
                </div>
                {/* <div  className='img-container'> */}
                <img src={image} alt="Image description" className='img-intro'/>
                {/* </div> */}
                
            </div>
        </div>
    );
}