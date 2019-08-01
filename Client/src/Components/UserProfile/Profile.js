import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageTemplate } from '../../_controls/index';
import { ListWriteUp, AddWriteUp } from './';

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <PageTemplate heading="User Profile">
                    <div className="row">
                        <div className="col-lg-12">
                            User Profile
                        </div>
                    </div>
                </PageTemplate>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { writeup } = state;
    return {
        writeup
    };
}

const connectedProfile = connect(mapStateToProps)(Profile);
export { connectedProfile as Profile };

