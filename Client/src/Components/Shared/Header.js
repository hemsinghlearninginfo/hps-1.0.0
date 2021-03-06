import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { history, Role, commonMethods } from '_helpers';
import { userService } from '_services';
import { Logo, Icon, Authorise } from '_controls';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            role: null,
        };
        this.logout = this.logout.bind(this);
        this.setUser = this.setUser.bind(this);
    }

    componentDidMount() {
        this.setUser();
    }
    componentWillReceiveProps(nextprops) {
        this.setUser();
    }

    setUser() {
        const user = commonMethods.getCurrentUser();
        if (user !== null) {
            this.setState({
                currentUser: user.currentUser,
                role: user.role
            });
        }
    }

    logout() {
        this.setState({
            currentUser: null,
            role: null
        });
        userService.logout();
        history.push('/login');
        commonMethods.scrollTop();
    }

    render() {
        const { currentUser } = this.state;
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top shadow-sm">
                <Link to="/" className="navbar-brand navbar"> <Logo /> </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link to="/faq" className="nav-item nav-link active"><Icon type='faq' /> FAQ</Link>
                        {/* <a href="#" className="nav-item nav-link active">Home</a>
                        <a href="#" className="nav-item nav-link">Profile</a> */}
                        {/* <Authorise isLoggedIn={true}>
                            <Link to="/msg" className="nav-item nav-link active"><Icon type='message' /> Messages</Link>
                        </Authorise> */}

                        <Authorise isLoggedIn="true">
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"><Icon type='TRADE' /> Trade</a>
                                <div className="dropdown-menu">
                                    <Link to="/trade" className="dropdown-item"> Live</Link>
                                    <Link to="/trade" className="dropdown-item"> Paper</Link>
                                </div>
                            </div>
                        </Authorise>
                        <Authorise userroles={[Role.SuperAdmin, Role.Admin]}>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"><Icon type='TOOLS' /> App Setting</a>
                                <div className="dropdown-menu">
                                    <Link to="/market" className="dropdown-item"> Market</Link>
                                    <Link to="/stocks" className="dropdown-item"> Stocks</Link>
                                </div>
                            </div>
                        </Authorise>
                        {/* <Authorise userroles={[Role.SuperAdmin, Role.Admin, Role.Master]}>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Configurations</a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Inbox</a>
                                    <a href="#" className="dropdown-item">Sent</a>
                                    <a href="#" className="dropdown-item">Drafts</a>
                                </div>
                            </div>
                        </Authorise> */}
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
                        <Authorise isNonLoggedIn={true} >
                            <Link to="/login" className="nav-item nav-link"><Icon type='login' /> Login</Link>
                        </Authorise>
                        <Authorise isLoggedIn={true} >
                            {currentUser && <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"><Icon type='loggedInUser' /> Hello {currentUser.firstName}</a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link to="/profile" className="dropdown-item"><Icon type='profile' /> Profile</Link>
                                    <Link to="#" className="dropdown-item"><Icon type='UserSetting' /> Settings</Link>
                                    <Link to="" className="dropdown-item" onClick={this.logout}><Icon type='logout' /> Logout</Link>
                                </div>
                            </div>
                            }
                        </Authorise>
                    </div>
                </div>
            </nav>
        );
    }
}
