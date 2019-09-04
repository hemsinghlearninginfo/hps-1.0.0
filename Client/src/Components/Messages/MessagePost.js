import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Icon } from '_controls';
import './message.css';

class MessagePost extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <>
                <div className="input_msg_write">
                    <input type="text" className="write_msg" placeholder="Type a message" />
                    <button className="msg_send_btn" type="button"><Icon type="SendMessage" /> </button>
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

// const connectedMessagePost = connect(mapStateToProps)(MessagePost);
// export { connectedMessagePost as MessagePost }; 
export { MessagePost }; 