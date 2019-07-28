import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { history, Role, commonMethods } from '../../_helpers';
import { userService } from '../../_services';
import { Logo, Icon, Authorise } from '../../_controls';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            role: null,
        };
    }

    componentDidMount() {
        const user = commonMethods.getCurrentUser();
        if (user !== null) {
            this.setState({
                currentUser: user.currentUser,
                role: user.role
            });
        }
    }

    logout() {
        userService.logout();
        history.push('/login');
    }

    render() {
        const { currentUser, role } = this.state;
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top shadow-sm">
                <Link to="/" className="navbar-brand"><Logo />HPS-Trades</Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link to="/faq" className="nav-item nav-link active"><Icon type='faq' /> FAQ</Link>
                        {/* <a href="#" className="nav-item nav-link active">Home</a>
                        <a href="#" className="nav-item nav-link">Profile</a> */}
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Messages</a>
                            <div className="dropdown-menu">
                                <a href="#" className="dropdown-item">Inbox</a>
                                <a href="#" className="dropdown-item">Sent</a>
                                <a href="#" className="dropdown-item">Drafts</a>
                            </div>
                        </div>
                        <Authorise userroles={[Role.SuperAdmin, Role.Admin, Role.Master]}>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Configurations</a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Inbox</a>
                                    <a href="#" className="dropdown-item">Sent</a>
                                    <a href="#" className="dropdown-item">Drafts</a>
                                </div>
                            </div>
                        </Authorise>
                    </div>
                    {/* <form className="form-inline">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div className="input-group-append">
                                <button type="button" className="btn btn-secondary"><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </form> */}
                    <div className="navbar-nav">
                        {!currentUser && <a href="/login" className="nav-item nav-link"><Icon type='login' /> Login</a>}
                        {currentUser && <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"><Icon type='loggedInUser' /> Hello {currentUser.firstName}</a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item"><Icon type='profile' /> Profile</a>
                                <a href="#" className="dropdown-item"><Icon type='UserSetting' /> Settings</a>
                                <a className="dropdown-item" onClick={this.logout}><Icon type='logout' /> Logout</a>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </nav>
        );
    }
}
