import React, { Component } from 'react';
import { Router, Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history, Role, commonMethods } from '../_helpers';
import { userService } from '../_services';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_controls';
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
            isAdmin: false,
            globalLoading: true
        };
    }

    componentDidMount() {
        userService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isAdmin: x && x.role === Role.Admin
        }));
        commonMethods.globalLoader(false);
        commonMethods.gotop();
    }

    render() {
        const { alert } = this.props;
        return (
            <HashRouter>
                <Wrapper>
                    <Router history={history}>
                        <MyComponents.Notifications />
                        <MyComponents.Header />
                        {alert.message &&
                            (<MyComponents.Expire delay={8}><div id="globalAlert" className="global-alert row justify-content-center align-items-center">
                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                            </div></MyComponents.Expire>)
                        }
                        <Switch>
                            <Route exact path="/" component={MyComponents.Home} />
                            <Route path="/tac" component={MyComponents.TermsAndConditions} />
                            <Route path="/login" component={MyComponents.Login} />
                            <Route path="/register" component={MyComponents.Register} />
                            <Route path="/faq" component={FAQPage} />
                            <Route path="/writeup" component={MyComponents.WriteUp} />
                            <PrivateRoute exact path="/profile" component={MyComponents.Profile} />
                            <Route path='/404' component={MyComponents.Error404} />
                            <Redirect path='*' to='/404' />
                        </Switch>
                        <MyComponents.GoUp />
                        <MyComponents.Fotter />
                    </Router>
                </Wrapper >
            </HashRouter>
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

