import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PageTemplate, Icon, ModalPopUpButton, ModalPopUp } from '_controls';
import { userActions } from '_actions';
import MyComponent from 'Components/';
//import userAvatar from '../../Resources/images/userAvatar.jpg';
import userAvatar from 'Resources/images/userAvatar.jpg';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isUploadPhoto: false,
            userFile: null,
        }
        this.getUser = this.getUser.bind(this);
        this.uploadPhoto = this.uploadPhoto.bind(this);
        this.getUploadedFile = this.getUploadedFile.bind(this);
    }

    componentDidMount() {
        this.getUser();
    }

    getUser() {
        let { user } = this.props;
        if (user !== null) {
            if (user.image === "none" || !user.image) {
                user.image = userAvatar;
            }
            this.setState({ user });
        }
    }

    uploadPhoto() {
        this.setState({ isUploadPhoto: true });
    }

    getUploadedFile(uploadedFile) {
        let { user } = this.props;
        user.image = uploadedFile[0].image;
        this.setState({ user, isUploadPhoto: false });
        const { dispatch } = this.props;
        dispatch(userActions.update(user));
    }

    render() {
        const { user, isUploadPhoto } = this.state;
        return (
            <>
                <PageTemplate heading="User Profile">
                    <ModalPopUp heading="Upload Picture">{isUploadPhoto && <MyComponent.UploadFile heading="Upload New Picture" isAddMultiple={false} fileTypes={[".jpg", ".jpeg", ".png"]} callbackMethod={this.getUploadedFile} />}</ModalPopUp>
                    <div className="container emp-profile shadow-sm">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    {user && user.image && <img src={user.image} alt="Profile" />}
                                    <div className="file btn btn-lg">
                                        <ModalPopUpButton action={this.uploadPhoto} iconType='upload' >
                                            {' '}Change Photo
                                        </ModalPopUpButton>
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