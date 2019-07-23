import React, { Component } from 'react';
import { connect } from 'react-redux';
import { faqActions } from '../../_actions';
import { Role, commonMethods } from '../../_helpers';
import { ModalPopUpButton } from '../../_controls/index'

class ListFAQ extends Component {

    constructor(props) {
        super(props);
        this.state = {
            faqs: [],
            searchText: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        commonMethods.scrollTop();
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { searchText } = this.state;
        const { faqs, role } = this.props;
        const isFaqsExists = (faqs.items && faqs.items.length > 0 ? true : false);
        let faqItems = (faqs.items && faqs.items.length > 0 ? faqs.items : null);

        const emptyMessage = (
            <div className="d-flex justify-content-center text-danger">There are no faqs yet in added in the system.</div>
        );

        if (searchText !== '' && faqItems) {
            faqItems = faqItems.filter(function (x) {
                return (x.question.indexOf(searchText) > -1);
            });
        }

        let faqItemsToRender = (faqItems && <div className="col-lg-12">
            <div className="tab-content">
                <div className="tab-pane show active" id="tab1" role="tabpanel" aria-labelledby="tab1">
                    <div className="accordion" id="accordion-tab-1">
                        {faqItems.map((faq, index) =>
                            <div className="card" key={faq.id}>
                                <div className="card-header" id={"accordion-tab-heading-" + index}>
                                    <h5>
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#accordion-tab-content" + index} aria-expanded="false" aria-controls={"accordion-tab-content" + index}>{faq.question}</button>
                                    </h5>
                                </div>
                                <div className={"collapse" + (index === 0 ? " show" : "")} id={"accordion-tab-content" + index} aria-labelledby={"accordion-tab-heading" + index} data-parent="#accordion-tab-1">
                                    <div className="card-body">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-sm-11">
                                                    <p>{faq.answer}</p>
                                                </div>
                                                <div className="col-sm-1 text-right">
                                                    {role !== null && (role === Role.SuperAdmin || role === Role.Admin)
                                                        &&
                                                        <ModalPopUpButton action={() => this.props.faqEditId(faq.id)}>Edit</ModalPopUpButton>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>)

        const searchControl = (
            <div className="col-lg-12">
                <div className="form-group list-textBox">
                    <input type="text" className="form-control" value={searchText} name="searchText" onChange={this.handleChange} placeholder="Search Question by text." />
                </div>
            </div>
        )

        return (
            <>
                {faqs.loading && <em>Loading faqs...</em>}
                {faqs.error && <span className="text-danger">ERROR: {faqs.error}</span>}
                {isFaqsExists && searchControl}
                {faqItems !== null && faqItems.length > 0 ? faqItemsToRender : emptyMessage}
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