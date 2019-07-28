import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commonMethods } from '../_helpers';

class Authorise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserRolesAllowed: false
        };
        this.refreshAuth = this.refreshAuth.bind(this);
    }

    componentDidMount() {
        this.refreshAuth(this.props);
    }

    componentWillReceiveProps = (nextProps) => {
        this.refreshAuth(nextProps);
    }

    refreshAuth(param) {
        if (param.userroles) {
            this.setState({ isUserRolesAllowed: false });
            const user = commonMethods.getCurrentUser();
            if (user.currentUser !== null) {
                if (param.userroles && user.role) {
                    this.setState({ isUserRolesAllowed : param.userroles.includes(user.role)});
                }
            }
        }
    }

    render() {
        return (
            <>
                {this.state.isUserRolesAllowed && this.props.children}
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