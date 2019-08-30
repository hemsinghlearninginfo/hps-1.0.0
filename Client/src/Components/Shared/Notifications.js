import React, { Component } from 'react';
import { messageService } from '_services';

// @use - messageService.sendMessage(commonMethods.getMessage('info','Message from Home Page Component to App Component!'));
export class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        // subscribe to home component messages
        this.subscription = messageService.getMessage().subscribe(message => {
            if (message) {
                // add message to local state if not empty
                this.setState({ messages: [...this.state.messages, message] });
            } else {
                // clear messages when empty message received
                this.setState({ messages: [] });
            }
        });
    }

    componentWillUnmount() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    deleteMessage(index) {
        const messages = this.state.messages.filter(function (value, arrIndex) {
            return arrIndex !== index;
        });
        this.setState({ messages });
    }

    render() {
        const { messages } = this.state;
        return (
            <div className="notifications-wrapper">
                {messages && messages.map((message, index) =>
                    <div key={index} className={"alert alert-dismissible fade show alert-" + message.text.type} role="alert">
                        <strong>Holy guacamole!</strong> {message.text.displayMessage}
                        <button type="button" className="close" data-dismiss="alert"
                            onClick={() => this.deleteMessage(index)}
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

