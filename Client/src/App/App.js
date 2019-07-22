import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';

import { history, Role } from '../_helpers';
import { userService } from '../_services';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_controls';
import { HomePage } from '../Components/HomePage';
import { LoginPage } from '../Components/LoginPage';
import { RegisterPage } from '../Components/RegisterPage';
import { FAQPage } from '../Components/FAQ';
import MyComponents from '../Components/index';
import Wrapper from '../Components/Shared/Wrapper';

class App extends Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });

        this.state = {
            currentUser: null,
            isAdmin: false
        };
    }

    componentDidMount() {
        userService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isAdmin: x && x.role === Role.Admin
        }));
    }

    logout() {
        userService.logout();
        history.push('/login');
    }

    render() {
        const { currentUser, isAdmin } = this.state;
        const { alert } = this.props;
        return (
            <Wrapper>
                <Router history={history}>
                    <MyComponents.Header />
                    {alert.message &&
                        <div id="globalAlert" className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <div className="container-fluid container-content">
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/faq" component={FAQPage} />
                    </div>
                    <MyComponents.Fotter />
                </Router>
            </Wrapper >
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };

