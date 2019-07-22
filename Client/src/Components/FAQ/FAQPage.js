import React from 'react';
import { connect } from 'react-redux';

import { PageTemplate, ModalPopUp, Loading } from '../../_controls/index'
import { AddFAQ } from './AddFAQ';
import { ListFAQ } from './ListFAQ';

class FAQPage extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageTemplate heading="FAQs">
                <ListFAQ />
                <br />
                <ModalPopUp btnLabel="Add new FAQ" heading="Add FAQ" saveChanges={this.addUpdateFQA}>
                    <AddFAQ />
                </ModalPopUp>
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