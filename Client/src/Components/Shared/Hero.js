import React from 'react';
import './hero.css';
const Hero = () => (
    <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
        <div className="overlay"></div>
        <div className="carousel-inner">
            <div className="item slides active">
                <div className="slide-1"></div>
                <div className="hero">
                    <hgroup>
                        <h1>We are Traders</h1>
                        <h3>Get start your next awesome tradding</h3>
                    </hgroup>
                    <button className="btn btn-hero btn-lg">Try</button>
                </div>
            </div>
        </div>
    </div>
);
export default Hero;
