import React from 'react';
import { connect } from 'react-redux';

import { PageTemplate, ModalPopUp, ModalPopUpButton, Loading, Authorise } from '../../_controls';
import { FAQForm } from './FAQForm';
import { ListFAQ } from './ListFAQ';
import { Role, commonMethods } from '../../_helpers';
import { faqActions } from '../../_actions';
import { Icon } from '../../_controls';

class FAQPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            role: null,
            faqObject: null,
            action: 'Add',
        }
        this.faqEditId = this.faqEditId.bind(this);
        this.addNewFAQ = this.addNewFAQ.bind(this);

        this.fetchFAQs = this.fetchFAQs.bind(this);
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
                    },
                    action: 'Edit'
                });
            }
        }
    }

    addNewFAQ() {
        this.setState({ faqObject: null, action: 'Add' });
    }

    render() {
        return (
            <PageTemplate heading="FAQs">
                <div className="row">
                    <div className="col-lg-12 text-right p">
                        <div className="form-group list-textBox add-Faq-Button">
                            <Authorise userroles={[Role.SuperAdmin, Role.Admin]}>
                                <ModalPopUpButton action={this.addNewFAQ}><Icon type='add' /> Add FAQ</ModalPopUpButton>
                                <ModalPopUp heading={this.state.faqObject === null ? "Add FAQ" : "Edit FAQ"}>
                                    <FAQForm faqObject={this.state.faqObject} refreshList={this.fetchFAQs} action={this.state.action} />
                                </ModalPopUp>
                            </Authorise>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ListFAQ role={this.state.role} faqs={this.props.faqs} faqEditId={this.faqEditId} />
                    </div>
                </div>
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

//export * from './FAQPage';