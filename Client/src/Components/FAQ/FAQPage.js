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
        }
    }

    componentDidMount() {
        const user = commonMethods.getCurrentUser();
        if (user !== null) {
            this.setState({
                role: user.role
            });
        }
    }

    render() {
        const {role } = this.state;
        return (
            <PageTemplate heading="FAQs">
                <ListFAQ role={role} />
                <br />
                {role !== null && (role === Role.SuperAdmin || role === Role.Admin) && <ModalPopUp btnLabel="Add new FAQ" heading="Add FAQ" saveChanges={this.addUpdateFQA}>
                    <AddFAQ />
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