import React from 'react';
import { connect } from 'react-redux';

import { PageTemplate } from '../../_controls/index'

class FAQPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageTemplate heading="FAQs">
                <div>Question 1</div>
                <div>Answer</div>
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