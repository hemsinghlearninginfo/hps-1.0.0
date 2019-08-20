import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon, PageTemplate, Loading } from '../../_controls';

import { userActions } from '../../_actions';

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
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
        const { username } = this.state;
        const { dispatch } = this.props;
        if (username) {
            dispatch(userActions.login(username));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, submitted } = this.state;
        return (
            <PageTemplate heading="Forgot Password">
                <div className="p-5 d-flex justify-content-center">
                    <div className="col-md-4 col-md-offset-3 login-icon">
                        <Icon type='Key' />
                    </div>
                    <div className="col-md-4 col-md-offset-3 login-box p-5 m-3">
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                <label htmlFor="username">Username</label>
                                <input autoFocus type="text" className="form-control required" name="username"
                                    value={username} onChange={this.handleChange} placeholder="email@domain.com" />
                                {submitted && !username &&
                                    <div className="help-block">Username is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Send Link</button>
                                {loggingIn && <Loading />}
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

const connectedForgotPassword = connect(mapStateToProps)(ForgotPassword);
export { connectedForgotPassword as ForgotPassword }; 