import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Typeahead } from 'react-bootstrap-typeahead';
import { userActions } from '_actions';
import { commonMethods } from '_helpers';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './message.css';

class AddNewUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.users.items != null && nextProps.users.items.length > 0) {
            const currentUser = commonMethods.getCurrentUser().currentUser;
            this.setState({
                users: nextProps.users.items
                    .filter(key => currentUser._id !== key._id)
                    .map(function (item) {
                        return { id: item._id, name: item.firstName + ' ' + item.lastName };
                    })
            });
        }
    }

    render() {
        const { users } = this.state;
        return (
            <>
                <div className="stylish-input-group">
                    <Typeahead id="typeUsers"
                        bsSize="small"
                        minLength={2}
                        labelKey="name"
                        options={users}
                        placeholder="Search User..."
                    />
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { users } = state;
    return {
        users
    };
}

const connectedAddNewUser = connect(mapStateToProps)(AddNewUser);
export { connectedAddNewUser as AddNewUser };
