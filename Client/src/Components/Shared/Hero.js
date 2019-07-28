import React from 'react';
import Background from '../../Resources/images/hero.png';
const Hero = () => (
    <div>
        <img src={Background} className="hero-image" />
        <div className="hero-text">
            <h1>We have Master's and More...</h1>
            <button className="btn btn-success">Try me</button>
        </div>
    </div>
);
export default Hero;
