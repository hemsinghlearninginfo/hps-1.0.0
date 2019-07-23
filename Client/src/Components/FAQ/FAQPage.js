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
            baseRefresh: true,
            faqEditObject: null
        }
        this.refreshList = this.refreshList.bind(this);
        this.faqEditId = this.faqEditId.bind(this);
        this.getAllFAQS = this.getAllFAQS.bind(this);
        this.addNewFAQ = this.addNewFAQ.bind(this);
    }

    getAllFAQS() {
        this.props.dispatch(faqActions.getAll());
    }

    componentDidMount() {
        const user = commonMethods.getCurrentUser();
        if (user !== null) {
            this.setState({
                role: user.role
            });
        }
        this.getAllFAQS();
    }

    refreshList() {
        this.getAllFAQS();
    }

    faqEditId(faqEditId) {
        if (faqEditId !== null) {
            const faq = this.props.faqs.items.filter(function (faq) {
                return faq._id === faqEditId;
            });
            if (faq != null && faq.length > 0) {
                this.setState({
                    faqEditObject: {
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
        this.setState({ faqEditObject: { _id: null, question: '', answer: '', isActive: true } });
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
                                <ModalPopUp heading={this.state.faqEditObject === null ? "Add FAQ" : "Edit FAQ"}>
                                    <FAQForm faqEditObject={this.state.faqEditObject} />
                                </ModalPopUp>
                            </>)
                        }
                    </div>
                </div>
                <br />
                <ListFAQ role={this.state.role} faqs={this.props.faqs} refresh={this.state.baseRefresh} faqEditId={this.faqEditId} />
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