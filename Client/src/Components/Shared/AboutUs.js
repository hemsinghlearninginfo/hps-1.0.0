import React from 'react';
import aboutus from '../../Resources/images/aboutus1.jpg';
export const AboutUs = () => (
    <section className="about-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="section-title">
                        <h2>About Us</h2>
                    </div>
                    <div className="about-content">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <img src={aboutus} className="img-fluid shadow border rounded" alt="" />
                </div>
            </div>
        </div>
    </section>
);
