import React, { Component } from 'react';
import { PageTemplate, Icon } from '../../_controls';
import { commonMethods } from '../../_helpers';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
        this.getUser = this.getUser.bind(this);
    }

    componentDidMount() {
        this.getUser();
    }

    getUser() {
        this.setState({ user: commonMethods.getCurrentUser() });
    }


    render() {
        const { user } = this.state;
        return (
            <>
                <PageTemplate heading="User Profile">
                    <div className="container emp-profile shadow-sm">
                        <form method="post">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="profile-img">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                                        <div className="file btn btn-lg btn-primary">
                                            Change Photo
                                            <input type="file" name="file" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="profile-head">
                                        <h5>
                                            {user != null && user.currentUser != null ? user.currentUser.firstName + ' ' + user.currentUser.lastName : ''}
                                        </h5>
                                        <h6>
                                            Web Developer and Designer
                                    </h6>
                                        <p className="proile-rating">MASTER : <span>Hem Singh</span></p>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="profile-work">
                                        <p>ABOUT ME</p>
                                        <p>Abc Abc</p>
                                        <p>CONNECT ME</p>
                                        <a href="#"><Icon type='facebook' /> Connect me</a><br />
                                        <a href="#"><Icon type='linkedin' /> Connect me</a><br />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="profile-tab">
                                        <div className="tab-pane">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>User Id</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{user != null && user.currentUser != null ? user.currentUser.username : ''}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Name</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{user != null && user.currentUser != null ? user.currentUser.firstName + ' ' + user.currentUser.lastName : ''}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Email</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>kshitighelani@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Phone</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>123 456 7890</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Profession</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Web Developer and Designer</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Experience</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Expert</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Hourly Rate</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>10$/hr</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Total Projects</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>230</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>English Level</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Expert</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Availability</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>6 months</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label>Your Bio</label><br />
                                                    <p>Your detail description</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </PageTemplate>
            </>
        );
    }
}

export { Profile };

