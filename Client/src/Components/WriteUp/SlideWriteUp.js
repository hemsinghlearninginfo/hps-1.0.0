import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SlideWriteUps extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section className="shadow-sm p-3 bg-white rounded slides write-up padding-lg">
                    <div className="container text-center">
                        <div className="row heading heading-icon">
                            <h2>User Views</h2>
                        </div>
                        <ul className="row master-items">
                            <li className="col-12 col-md-6 col-lg-3">
                                <div className="cnt-block equal-hight" >
                                    <h3>Web coder skull</h3>
                                    <p>Freelance Web Developer</p>
                                </div>
                            </li>
                            <li className="col-12 col-md-6 col-lg-3">
                                <div className="cnt-block equal-hight" >
                                    <h3>Kappua</h3>
                                    <p>Freelance Web Developer</p>
                                </div>
                            </li>
                            <li className="col-12 col-md-6 col-lg-3">
                                <div className="cnt-block equal-hight" >
                                    <h3>Manish</h3>
                                    <p>Freelance Web Developer</p>
                                </div>
                            </li>
                            <li className="col-12 col-md-6 col-lg-3">
                                <div className="cnt-block equal-hight" >
                                    <h3>Atul</h3>
                                    <p>Freelance Web Developer</p>
                                </div>
                            </li>
                        </ul>
                        <Link to="/writeup" className="btn btn-info">More Feedback...</Link>
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
