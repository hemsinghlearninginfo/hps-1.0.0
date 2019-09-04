import React, { Component } from 'react';
//import { connect } from 'react-redux';
import './message.css';

class UserList extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <>
                <div className="chat_list active_chat">
                    <div className="chat_people">
                        <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                        <div className="chat_ib">
                            <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                            <p>Test, which is a new approach to have all solutions
                    astrology under one roof.</p>
                        </div>
                    </div>
                </div>
                <div className="chat_list">
                    <div className="chat_people">
                        <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                        <div className="chat_ib">
                            <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                            <p>Test, which is a new approach to have all solutions
                    astrology under one roof.</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

// function mapStateToProps(state) {
//     const { loggingIn, user } = state.authentication;
//     return {
//         loggingIn, user
//     };
// }

// const connectedUserList = connect(mapStateToProps)(UserList);
// export { connectedUserList as UserList }; 
export { UserList }; 