import React, { Component } from 'react';
//import { connect } from 'react-redux';

import './message.css';

class MessagesList extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <>
                <div className="incoming_msg">
                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                    <div className="received_msg">
                        <div className="received_withd_msg">
                            <p>Test which is a new approach to have all
                    solutions</p>
                            <span className="time_date"> 11:01 AM    |    June 9</span></div>
                    </div>
                </div>
                <div className="outgoing_msg">
                    <div className="sent_msg">
                        <p>Test which is a new approach to have all
                  solutions</p>
                        <span className="time_date"> 11:01 AM    |    June 9</span> </div>
                </div>
                <div className="incoming_msg">
                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                    <div className="received_msg">
                        <div className="received_withd_msg">
                            <p>Test, which is a new approach to have</p>
                            <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
                    </div>
                </div>
                <div className="outgoing_msg">
                    <div className="sent_msg">
                        <p>Apollo University, Delhi, India Test</p>
                        <span className="time_date"> 11:01 AM    |    Today</span> </div>
                </div>
                <div className="incoming_msg">
                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                    <div className="received_msg">
                        <div className="received_withd_msg">
                            <p>We work directly with our designers and suppliers,
                              and sell direct to you, which means quality, exclusive
                    products, at a price anyone can afford.</p>
                            <span className="time_date"> 11:01 AM    |    Today</span></div>
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

// const connectedMessagesList = connect(mapStateToProps)(MessagesList);
// export { connectedMessagesList as MessagesList }; 
export { MessagesList }; 