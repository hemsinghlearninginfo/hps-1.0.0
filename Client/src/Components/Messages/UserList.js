import React, { Component } from 'react';
import { connect } from 'react-redux';
import './message.css';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.newUser != undefined) {
            const { users } = this.state;
            users.splice(0,0,nextProps.newUser);
            this.setState({ users });
        }
    }

    render() {
        return (
            <>
                {this.state.users && this.state.users.map((item, index) => {
                    return <div key={index} className={"chat_list " + (index === 0 ? "active_chat" : "")}>
                        <div className="chat_people">
                            {/* <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div> */}
                            <div className="chat_ib">
                                <h5>{item.name}
                                    {/* <span className="chat_date">Dec 25</span> */}
                                </h5>
                                {/* <p>Test, which is a new approach to have all solutions
                    astrology under one roof.</p> */}
                            </div>
                        </div>
                    </div>
                })}

            </>
        );
    }
}

// function mapStateToProps(state) {
//     const { user } = state.authentication;
//     return {
//         user
//     };
// }

// const connectedUserList = connect(mapStateToProps)(UserList);
// export { connectedUserList as UserList }; 

export { UserList };