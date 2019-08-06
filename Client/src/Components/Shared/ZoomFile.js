import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { history, Role, commonMethods } from '../../_helpers';
// import { userService } from '../../_services';
// import { Logo, Icon, Authorise } from '../../_controls';

export class ZoomFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: this.props.filePath,
        }
    }

    componentWillReceiveProps(nextprops) {
        this.state({ filePath: nextprops.filePath });
    }

    render() {
        return (
            <div><img src={this.state.filePath} /></div>
        );
    }
}
