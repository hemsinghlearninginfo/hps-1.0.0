import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import { Icon } from '_controls';
import './message.css';

class AddNewUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        var users = [
            {id: 1, name: 'John'},
            {id: 2, name: 'Miles'},
            {id: 3, name: 'Charles'},
            {id: 4, name: 'Herbie'},
          ];
        this.setState({ users });
    }

    render() {
        return (
            <>
                <div className="stylish-input-group">
                    <Typeahead id="typeUsers"
                        labelKey="name"
                        options={this.state.users}
                        placeholder="Search User..."
                    />
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
