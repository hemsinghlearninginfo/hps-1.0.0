import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeupActions } from '../../_actions';

class ListWriteUp extends Component {

    constructor(props) {
        super(props);
        this.state ={
            isRefresh : false
        }
        this.fetchWriteUp = this.fetchWriteUp.bind(this);
    }

    componentDidMount() {
        this.fetchWriteUp();
    }

    componentWillReceiveProps = (nextProps) => {
        if(this.props.isRefresh !== nextProps.isRefresh){
            this.fetchWriteUp();
        }
    }

    fetchWriteUp() {
        this.props.dispatch(writeupActions.getAll());
    }

    render() {
        const { writeup } = this.props;
        let writeupItem = (writeup.items && writeup.items.length > 0 ? writeup.items : null);
        return (
            <>
                <div className="list-group">
                    {writeupItem && writeupItem.map((writeup, index) =>
                        <div className="list-group-item list-group-item-action p-5" key={writeup.id}>
                            <div className="write-up-description">
                                {writeup.description}
                            </div>
                            <div className="text-muted font-italic">-- from {writeup.displayName}</div>
                        </div>
                    )}
                    {!writeupItem && <div className="text-center text-danger">Not data found</div>}
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
