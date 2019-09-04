import React, { Component } from 'react';
import { commonMethods } from '_helpers';
import { Link } from 'react-router-dom';

class Authorise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserRolesAllowed: false,
            isLoggedIn: false,
            isNonLoggedIn: false,
            notAuthorizeMessage: false,
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
                isUserRolesAllowed: (param.userroles !== undefined && user.role !== null && param.userroles.includes(user.role)),
                isLoggedIn: (param.isLoggedIn && user.currentUser !== null),
                isNonLoggedIn: (param.isNonLoggedIn && user.currentUser === null)
            });
            this.setState({
                notAuthorizeMessage: (param.isNotMessage && (
                    (param.userroles && !this.state.isUserRolesAllowed) ||
                    (param.isLoggedIn && !this.state.isLoggedIn) ||
                    (param.isNonLoggedIn && !this.state.isNonLoggedIn)
                ))
            });
        }
    }

    render() {
        const { isUserRolesAllowed, isLoggedIn, isNonLoggedIn, notAuthorizeMessage } = this.state;
        const notAuthorizeMessageHTML = <div className="m-5 p-5 card alert alert-danger" role="alert">
            <strong>Oh snap!</strong> Something went wrong, we are working on this module please try again some other time.
            <div> <Link to="/" className="alert-link">HPS-Trades Home page</Link></div>
        </div>
        return (
            <>
                {(isUserRolesAllowed || isLoggedIn || isNonLoggedIn) && this.props.children}
                {notAuthorizeMessage && notAuthorizeMessageHTML}
            </>
        );
    }
}

export { Authorise }; 