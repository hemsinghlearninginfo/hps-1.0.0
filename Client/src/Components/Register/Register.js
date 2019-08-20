import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string'
import { PageTemplate, Icon, Loading } from '../../_controls';
import { userActions } from '../../_actions';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                referralCode: '',
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const value = queryString.parse(this.props.location.search);
        const referralCode = value.rc;
        if (referralCode !== undefined) {
            this.setState({ user: { referralCode: referralCode } });
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
            <PageTemplate heading="Sing in">
                <div className="p-2 d-flex justify-content-center">
                    <div className="col-md-4 col-md-offset-3 login-icon">
                        <Icon type='register' />
                    </div>
                    <div className="col-md-6 col-md-offset-3 login-box">
                        <div className="d-flex justify-content-center">
                            <div className="col-md-6 col-md-offset-3">
                                <form name="form" onSubmit={this.handleSubmit}>
                                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                                        <label htmlFor="firstName">First Name</label>
                                        <input autoFocus type="text" className="form-control required" name="firstName" value={user.firstName} onChange={this.handleChange} placeholder='Samman' />
                                        {submitted && !user.firstName &&
                                            <div className="help-block">First Name is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" className="form-control required" name="lastName" value={user.lastName} onChange={this.handleChange} placeholder='Singh' />
                                        {submitted && !user.lastName &&
                                            <div className="help-block">Last Name is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className="form-control required" name="username" value={user.username} onChange={this.handleChange} placeholder='email@domain.com' />
                                        {submitted && !user.username &&
                                            <div className="help-block">Username is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control required" name="password" value={user.password} onChange={this.handleChange} placeholder='******' />
                                        {submitted && !user.password &&
                                            <div className="help-block">Password is required</div>
                                        }
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" name="termsandcondition" id="termsandcondition" />
                                        <label className="form-check-label" htmlFor="termsandcondition">I accept the <Link target="_blank" to='/tac'>Terms and Condition</Link></label>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <button className="btn btn-primary">Register</button>
                                        {registering && <Loading />}
                                        <Link to="/login" className="btn btn-link">Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </PageTemplate>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegister = connect(mapStateToProps)(Register);
export { connectedRegister as Register };