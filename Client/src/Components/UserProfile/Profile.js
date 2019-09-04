import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PageTemplate, Icon } from '_controls';
import { ProfilePic } from './';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
    }

    componentDidMount() {
    }


    render() {
        const { user } = this.state;
        return (
            <>
                <PageTemplate heading="User Profile">
                    <div className="container emp-profile shadow-sm">
                        <div className="row">
                            <div className="col-md-4">
                                <ProfilePic />
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
                                    <hr />
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PageTemplate>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn, user } = state.authentication;
    return {
        loggingIn, user
    };
}

const connectedProfile = connect(mapStateToProps)(Profile);
export { connectedProfile as Profile }; 