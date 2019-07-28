import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commonMethods } from '../_helpers';

class Authorise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }

    componentDidMount() {
        const user = commonMethods.getCurrentUser();
        if (user !== null) {
            this.setState({
                currentUser: user.currentUser,
                role: user.role
            });
            if (this.props.to && user.role) {
                const isVisible = this.props.to.includes(user.role);
                this.setState({ isVisible });
            }
        }
    }

    render() {
        return (
            <>
                {this.state.isVisible && this.props.children}
            </>
        );
    }
}


function mapStateToProps(state) {
    const { modalAlert } = state;
    return {
        modalAlert
    };
}

const connectedAuthorise = connect(mapStateToProps)(Authorise);
export { connectedAuthorise as Authorise }; 