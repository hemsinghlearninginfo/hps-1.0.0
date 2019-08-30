import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageTemplate } from '_controls/index';
import { ListWriteUp, AddWriteUp } from './';

class WriteUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRefresh: false
        }
        this.refreshList = this.refreshList.bind(this);
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList() {
        const { isRefresh } = this.state;
        this.setState({ isRefresh: !isRefresh });
    }

    render() {
        const { isRefresh } = this.state;
        return (
            <>
                <PageTemplate heading="Write Ups">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <AddWriteUp requireRefresh={this.refreshList} />
                        </div>
                    </div>
                    <div className="row pt-1">
                        <div className="col-lg-12">
                            {/* <ListWriteUp isRefresh={isRefresh} /> */}
                            <ListWriteUp isRefresh={isRefresh} />
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

const connectedWriteUp = connect(mapStateToProps)(WriteUp);
export { connectedWriteUp as WriteUp };

