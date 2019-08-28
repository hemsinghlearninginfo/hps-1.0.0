import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Icon } from '_controls';
import './message.css';

class AddNewUser extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="stylish-input-group">
                    <input type="text" className="search-bar" placeholder="Search User" />
                    <span className="input-group-addon">
                        <Icon type='searchadd' />
                    </span>
                </div>
            </>
        );
    }
}

// function mapStateToProps(state) {
//     const { loggingIn, user } = state.authentication;
//     return {
//         loggingIn, user
//     };
// }

// const connectedAddNewUser = connect(mapStateToProps)(AddNewUser);
// export { connectedAddNewUser as AddNewUser }; 
export { AddNewUser }; 