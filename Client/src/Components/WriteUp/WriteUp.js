import React from 'react';
import { connect } from 'react-redux';

import { PageTemplate, ModalPopUp, ModalPopUpButton, Loading } from '../../_controls/index';
// import { FAQForm } from './FAQForm';
// import { ListFAQ } from './ListFAQ';
import { Role, commonMethods } from '../../_helpers';
//import { faqActions } from '../../_actions';
import {Icon} from '../../_controls';

class WriteUp extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     role: null,
        //     faqObject: null,
        //     action: 'Add',
        // }
        // this.faqEditId = this.faqEditId.bind(this);
        // this.addNewFAQ = this.addNewFAQ.bind(this);

        // this.fetchFAQs = this.fetchFAQs.bind(this);
    }

    componentDidMount() {
    }

    fetchFAQs() {
    }

    // faqEditId(faqEditId) {
    //     if (faqEditId !== null) {
    //         const faq = this.props.faqs.items.filter(function (faq) {
    //             return faq._id === faqEditId;
    //         });
    //         if (faq != null && faq.length > 0) {
    //             this.setState({
    //                 faqObject: {
    //                     _id: faq[0]._id,
    //                     question: faq[0].question,
    //                     answer: faq[0].answer,
    //                     isActive: faq[0].isActive
    //                 },
    //                 action: 'Edit'
    //             });
    //         }
    //     }
    // }

    // addNewFAQ() {
    //     this.setState({ faqObject: null, action: 'Add' });
    // }

    render() {
        return (
            <PageTemplate heading="Write Ups">
                {!this.props && <Loading />}
                
            </PageTemplate>
        );
    }
}

function mapStateToProps(state) {
    const { writeups } = state;
    const { loggingIn } = state.authentication;
    return {
        loggingIn,
        writeups,
    };
}

const connectedWriteUp = connect(mapStateToProps)(WriteUp);
export { connectedWriteUp as WriteUp }; 

