import React, { Component } from 'react';
import { connect } from 'react-redux';
import './writeup.css';

class SlideWriteUps extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section className="container p-t-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Bootstrap 4 Card Slider</h2>
                        </div>
                    </div>
                </section>
                <section className="carousel slide" data-ride="carousel" id="postsCarousel">
                    <div className="container carousel-inner">
                        <div className="row row-equal carousel-item active">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-block">
                                        <h2>
                                            <a href="#">Why Stuff Happens Every Year.</a>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-block">
                                        <h2>
                                            <a href="#">How to Make Every Line Count.</a>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-block">
                                        <h2>
                                            <a href="#">How to Make Every Line Count.</a>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-equal carousel-item">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-block">
                                        <h2>
                                            <a href="#">Why Stuff Happens Every Year.</a>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-block">
                                        <h2>
                                            <a href="#">Why Stuff Happens Every Year.</a>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-block">
                                        <h2>
                                            <a href="#">Why Stuff Happens Every Year.</a>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { extra } = state;
    return {
        extra
    };
}

const connectedSlideWriteUps = connect(mapStateToProps)(SlideWriteUps);
export { connectedSlideWriteUps as SlideWriteUps }; 
