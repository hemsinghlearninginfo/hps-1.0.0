import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';

import { history } from '../_helpers';
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
    }

    render() {
        const { alert } = this.props;
        return (
            <Wrapper>
                <MyComponents.Header />
                {alert.message &&
                    <div id="globalAlert" className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <div className="container-fluid container-content">
                    <Router history={history}>
                        <div>
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                            <Route path="/faq" component={FAQPage} />
                        </div>
                    </Router>
                </div>
                <MyComponents.Fotter />
            </Wrapper>

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

