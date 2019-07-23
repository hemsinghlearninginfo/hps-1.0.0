import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './error.css';
import { PageTemplate } from '../../_controls/index'


export class Error404 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <PageTemplate heading="Error">
                    <div id="notfound">
                        <div class="notfound">
                            <div class="notfound-404">
                                <h1>Oops!</h1>
                                <h2>404 - The Page can't be found</h2>
                            </div>
                            <Link to="/" className="navbar-brand">Go TO Homepage</Link>
                        </div>
                    </div>
                </PageTemplate>
            </>
        );
    }
}

// function mapStateToProps(state) {
//     const { loggingIn } = state.authentication;
//     return {
//         loggingIn
//     };
// }

// const connectedAddFAQ = connect(mapStateToProps)(Error404);
// export { connectedAddFAQ as AddFAQ }; 