import React from 'react';
import { connect } from 'react-redux';

import { PageTemplate, ModalPopUp, Loading } from '../../_controls/index'
import { AddFAQ } from './AddFAQ';
import { ListFAQ } from './ListFAQ';
import { Role, commonMethods } from '../../_helpers';

class FAQPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            role: null,
            baseRefresh: true
        }
        this.refreshList = this.refreshList.bind(this);
    }

    componentDidMount() {
        const user = commonMethods.getCurrentUser();
        if (user !== null) {
            this.setState({
                role: user.role
            });
        }
    }

    refreshList() {
        this.setState({ baseRefresh: !this.state.baseRefresh });
    }

    render() {
        return (
            <PageTemplate heading="FAQs">
                <ListFAQ role={this.state.role} refresh={this.state.baseRefresh} />
                <br />
                {this.state.role !== null && (this.state.role === Role.SuperAdmin || this.state.role === Role.Admin)
                    && <ModalPopUp btnLabel="Add new FAQ" heading="Add FAQ" saveChanges={this.addUpdateFQA}>
                        <AddFAQ refreshCode={this.refreshList} />
                    </ModalPopUp>}
            </PageTemplate>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedFAQPage = connect(mapStateToProps)(FAQPage);
export { connectedFAQPage as FAQPage }; 