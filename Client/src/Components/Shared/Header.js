import React from 'react';

export function Header(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top shadow-sm">
            <a href="#" className="navbar-brand">HPS-Trades</a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav">
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
                    <a href="#" className="nav-item nav-link">Login</a>
                    <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Hello Hem</a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">Profile</a>
                        <a href="#" className="dropdown-item">Settings</a>
                        <a href="#" className="dropdown-item">Logout</a>
                    </div>
                </div>
                </div>
                
            </div>
        </nav>
    );
}