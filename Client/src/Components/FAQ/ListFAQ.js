import React, { Component } from 'react';
import { connect } from 'react-redux';

import { faqActions } from '../../_actions';

class ListFAQ extends Component {

    componentDidMount() {
        this.props.dispatch(faqActions.getAll());
    }

    render() {
        const { faqs } = this.props;

        const emptyMessage = (
            <div className="d-flex justify-content-center text-danger">There are no faqs yet in added in the system.</div>
        );

        const faqItems = (faqs.items && <div className="col-lg-12">
            <div className="tab-content">
                <div className="tab-pane show active" id="tab1" role="tabpanel" aria-labelledby="tab1">
                    <div className="accordion" id="accordion-tab-1">
                        {faqs.items.map((faq, index) =>
                            <div className="card" key={faq.id}>
                                <div className="card-header" id={"accordion-tab-heading-" + index}>
                                    <h5>
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#accordion-tab-content" + index} aria-expanded="false" aria-controls={"accordion-tab-content" + index}>{faq.question}</button>
                                    </h5>
                                </div>
                                <div className={"collapse" + (index === 0 ? " show" : "")} id={"accordion-tab-content" + index} aria-labelledby={"accordion-tab-heading" + index} data-parent="#accordion-tab-1">
                                    <div className="card-body">
                                        <p>{faq.answer}</p>
                                        <button type="button" className="btn btn-sm btn-success">Edit</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>)
        return (
            <>
                {faqs.loading && <em>Loading faqs...</em>}
                {faqs.error && <span className="text-danger">ERROR: {faqs.error}</span>}
                {faqs.items !== undefined && faqs.items.length > 0 ? faqItems : emptyMessage}
            </>
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

const connectedListFAQ = connect(mapStateToProps)(ListFAQ);
export { connectedListFAQ as ListFAQ }; 