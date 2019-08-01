import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeupActions } from '../../_actions';
import { InfoBox } from '../../_controls';

class ListWriteUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRefresh: false
        }
        this.fetchWriteUp = this.fetchWriteUp.bind(this);
    }

    componentDidMount() {
        this.fetchWriteUp();
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props.isRefresh !== nextProps.isRefresh) {
            this.fetchWriteUp();
        }
    }

    fetchWriteUp() {
        this.props.dispatch(writeupActions.getAll());
    }

    render() {
        const { writeup } = this.props;
        let writeupItem = (writeup.items && writeup.items.length > 0 ? writeup.items : null);
        if (writeupItem) {
            writeupItem = writeupItem.filter(function (item) { return item.isApproved && item.isActive });
        }
        return (
            <>
                <div className="list-group">
                    {writeupItem && writeupItem.length > 0 && writeupItem.map((writeup, index) =>
                        <div className="list-group-item list-group-item-action p-4" key={writeup.id}>
                            <div className="write-up-description text-justify">
                                {writeup.description}
                            </div>
                            <div className="text-muted font-italic pl-5">-- from {writeup.displayName}</div>
                        </div>
                    )}
                    {
                        (!writeupItem || writeupItem.length == 0) &&
                        <InfoBox type='danger'>Opps, We don't have any write up about us, would you like to be first. Please login and post your writeup.</InfoBox>
                    }
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
