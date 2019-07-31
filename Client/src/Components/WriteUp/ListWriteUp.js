import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListWriteUp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="list-group">
                    <div className="list-group-item list-group-item-action p-5 ">
                            <div className="write-up-description">whhat ever whhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat everwhhat ever</div>
                            <div className="text-muted font-italic">-- from hem</div>
                    </div>
                </div>
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

const connectedListWriteUp = connect(mapStateToProps)(ListWriteUp);
export { connectedListWriteUp as ListWriteUp }; 
