import React from 'react';
import { connect } from 'react-redux';

import { PageTemplate, ModalPopUp, ModalPopUpButton, Loading } from '../../_controls/index';
import { FAQForm } from './FAQForm';
import { ListFAQ } from './ListFAQ';
import { Role, commonMethods } from '../../_helpers';
import { faqActions } from '../../_actions';

class FAQPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            role: null,
            faqObject: null
        }
        this.faqEditId = this.faqEditId.bind(this);
        this.addNewFAQ = this.addNewFAQ.bind(this);

        this.fetchFAQs = this.fetchFAQs.bind(this);
        this.saveAndUpdate = this.saveAndUpdate.bind(this);
    }

    componentDidMount() {
        const user = commonMethods.getCurrentUser();
        if (user !== null) {
            this.setState({
                role: user.role
            });
        }
        this.fetchFAQs();
    }

    fetchFAQs() {
        this.props.dispatch(faqActions.getAll());
    }

    faqEditId(faqEditId) {
        if (faqEditId !== null) {
            const faq = this.props.faqs.items.filter(function (faq) {
                return faq._id === faqEditId;
            });
            if (faq != null && faq.length > 0) {
                this.setState({
                    faqObject: {
                        _id: faq[0]._id,
                        question: faq[0].question,
                        answer: faq[0].answer,
                        isActive: faq[0].isActive
                    }
                });
            }
        }
    }

    addNewFAQ() {
        this.setState({ faqObject: null });
    }

    saveAndUpdate(faq) {
        const { question, answer, isActive } = faq;
        if (faq._id) {
            console.log('update');
        }
        else {
            this.props.dispatch(faqActions.addUpdate({ question, answer, isActive }));
            if (!this.props.faqs.error) {
                this.fetchFAQs();
                return true;
            }
        }
    }

    render() {
        return (
            <PageTemplate heading="FAQs">
                {!this.props && <Loading />}
                <div className="col-lg-12">
                    <div className="form-group list-textBox">
                        {
                            (this.state.role !== null)
                            && (this.state.role === Role.SuperAdmin || this.state.role === Role.Admin)
                            && (<>
                                <ModalPopUpButton action={this.addNewFAQ}>Add FAQ</ModalPopUpButton>
                                <ModalPopUp heading={this.state.faqObject === null ? "Add FAQ" : "Edit FAQ"}>
                                    <FAQForm faqObject={this.state.faqObject} saveAndUpdate={this.saveAndUpdate} />
                                </ModalPopUp>
                            </>)
                        }
                    </div>
                </div>
                <br />
                <ListFAQ role={this.state.role} faqs={this.props.faqs} faqEditId={this.faqEditId} />
            </PageTemplate>
        );
    }
}

function mapStateToProps(state) {
    const { faqs } = state;
    const { loggingIn } = state.authentication;
    return {
        loggingIn,
        faqs,
    };
}

const connectedFAQPage = connect(mapStateToProps)(FAQPage);
export { connectedFAQPage as FAQPage }; 