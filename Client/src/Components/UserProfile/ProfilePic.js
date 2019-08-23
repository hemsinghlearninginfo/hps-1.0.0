import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ModalPopUpButton, ModalPopUp } from '_controls';
import { userActions } from '_actions';
import MyComponent from 'Components/';
import userAvatar from 'Resources/images/userAvatar.jpg';

class ProfilePic extends Component {

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
                <ModalPopUp heading="Upload Picture">{isUploadPhoto && <MyComponent.UploadFile heading="Upload New Picture" isAddMultiple={false} fileTypes={[".jpg", ".jpeg", ".png"]} callbackMethod={this.getUploadedFile} />}</ModalPopUp>
                <div className="profile-img">
                    {user && user.image && <img src={user.image} alt="Profile" />}
                    <div className="file btn btn-lg">
                        <ModalPopUpButton action={this.uploadPhoto} iconType='upload' >
                            {' '}Change Photo
                                        </ModalPopUpButton>
                    </div>
                </div>
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

const connectedProfilePic = connect(mapStateToProps)(ProfilePic);
export { connectedProfilePic as ProfilePic }; 