import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon, PageTemplate, Loading } from '../../_controls';

import { userActions } from '../../_actions';

class Login extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
            dispatch(userActions.loginTrack(username));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <PageTemplate heading="Sing in">
                <div className="p-5 d-flex justify-content-center">
                    <div className="col-md-4 col-md-offset-3 login-icon">
                        <Icon type='LOGGEDINUSER' />
                    </div>
                    <div className="col-md-4 col-md-offset-3 login-box">
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                <label htmlFor="username">Username</label>
                                <input autoFocus type="text" className="form-control required" name="username"
                                    value={username} onChange={this.handleChange} placeholder="email@domain.com" />
                                {submitted && !username &&
                                    <div className="help-block">Username is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control required" name="password" value={password} onChange={this.handleChange} placeholder="********" />
                                {submitted && !password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Login</button>
                                {loggingIn && <Loading />}
                                <Link to="/register" className="btn btn-link">Register</Link>
                                {'\n'}
                                <Link to="/fp" className="btn btn-link">Forgot Password</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </PageTemplate>

        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLogin = connect(mapStateToProps)(Login);
export { connectedLogin as Login }; 