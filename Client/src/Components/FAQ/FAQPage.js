import React from 'react';
import { connect } from 'react-redux';

import { PageTemplate, ModalPopUp, Loading } from '../../_controls/index'
import { AddFAQ } from './';

class FAQPage extends React.Component {
    constructor(props) {
        super(props);
        this.addUpdateFQA = this.addUpdateFQA.bind(this);
    }


    addUpdateFQA() {
        console.log('faq saved parent');
    }
    render() {


        return (
            <PageTemplate heading="FAQs">
                {/* <Loading /> */}
                <div>Question 1</div>
                <div>Answer</div>
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