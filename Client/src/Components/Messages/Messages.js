import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PageTemplate } from '_controls';
import { UserList, MessagesList, MessagePost, AddNewUser } from './';
import './message.css';

class Messages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newUser: null,
        }
        this.getNewUser = this.getNewUser.bind(this);
    }

    getNewUser(newUser) {
        this.setState({ newUser });
    }

    render() {
        return (
            <>
                <PageTemplate heading="Messages">
                    <div className="container">
                        <div className="shadow bg-white">
                            <div className="inbox_msg">
                                <div className="inbox_people">
                                    <div className="headind_srch">
                                        <div className="recent_heading">
                                            <h4>Recent</h4>
                                        </div>
                                        <div className="srch_bar">
                                            <AddNewUser selecteNewUser={this.getNewUser} />
                                        </div>
                                    </div>
                                    <div className="inbox_chat">
                                        <UserList newUser={this.state.newUser} />
                                    </div>
                                </div>
                                <div className="mesgs">
                                    <div className="msg_history">
                                        <MessagesList />
                                    </div>
                                    <div className="type_msg">
                                        <MessagePost />
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
    const { messages } = state;
    return {
        messages
    };
}

const connectedMessages = connect(mapStateToProps)(Messages);
export { connectedMessages as Messages }; 