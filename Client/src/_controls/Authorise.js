import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commonMethods } from '../_helpers';

class Authorise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserRolesAllowed: false,
            isLoggedIn: false,
            isNonLoggedIn: false,
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
        if (param.userroles || param.isLoggedIn || param.isNonLoggedIn) {
            this.setState({ isUserRolesAllowed: false, isLoggedIn: false, isNonLoggedIn: false });
            const user = commonMethods.getCurrentUser();
            this.setState({
                isUserRolesAllowed: (param.userroles != undefined && user.role !== null && param.userroles.includes(user.role)),
                isLoggedIn: (param.isLoggedIn && user.currentUser !== null),
                isNonLoggedIn: (param.isNonLoggedIn && user.currentUser === null)
            });
        }
    }

    render() {
        const { isUserRolesAllowed, isLoggedIn, isNonLoggedIn } = this.state;
        return (
            <>
                {(isUserRolesAllowed || isLoggedIn || isNonLoggedIn) && this.props.children}
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