import React, { Component } from 'react';
import { connect } from 'react-redux';

class SlideMasters extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <>
                <section className="shadow-sm p-3 bg-white rounded slides out-master padding-lg">
                    <div className="container text-center">
                        <div className="row heading heading-icon">
                            <h2>Our Top Masters</h2>
                        </div>
                        <ul className="row master-items">
                            <li className="col-12 col-md-6 col-lg-3">
                                <div className="cnt-block equal-hight" >
                                    <figure><img src="http://www.webcoderskull.com/img/team4.png" className="img-responsive" alt="" /></figure>
                                    <h3><a href="http://www.webcoderskull.com/">Web coder skull</a></h3>
                                    <p>Freelance Web Developer</p>
                                    <ul className="follow-us clearfix">
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="col-12 col-md-6 col-lg-3">
                                <div className="cnt-block equal-hight" >
                                    <figure><img src="http://www.webcoderskull.com/img/team1.png" className="img-responsive" alt="" /></figure>
                                    <h3><a href="#">Kappua </a></h3>
                                    <p>Freelance Web Developer</p>
                                    <ul className="follow-us clearfix">
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="col-12 col-md-6 col-lg-3">
                                <div className="cnt-block equal-hight" >
                                    <figure><img src="http://www.webcoderskull.com/img/team4.png" className="img-responsive" alt="" /></figure>
                                    <h3><a href="http://www.webcoderskull.com/">Manish </a></h3>
                                    <p>Freelance Web Developer</p>
                                    <ul className="follow-us clearfix">
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="col-12 col-md-6 col-lg-3">
                                <div className="cnt-block equal-hight" >
                                    <figure><img src="http://www.webcoderskull.com/img/team2.png" className="img-responsive" alt="" /></figure>
                                    <h3><a href="http://www.webcoderskull.com/">Atul </a></h3>
                                    <p>Freelance Web Developer</p>
                                    <ul className="follow-us clearfix">
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <button className="btn btn-info">Show All Masters</button>
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

const connectedSlideMasters = connect(mapStateToProps)(SlideMasters);
export { connectedSlideMasters as SlideMasters }; 
