import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Role, commonMethods } from '../../_helpers';
import { ModalPopUpButton, Authorise, ModalConfirm } from '../../_controls'
import { Icon } from '../../_controls';

class ListFAQ extends Component {

    constructor(props) {
        super(props);
        this.state = {
            faqs: [],
            searchText: '',
            confirmDelete: false,
            idToDelete : null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        commonMethods.scrollTop();
    }

    handleConfirm(idToDelete) {
        this.setState({ confirmDelete: true, idToDelete });
    }

    confirmDelete(){
        this.props.faqDeleteById(this.state.idToDelete);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { searchText } = this.state;
        const { faqs } = this.props;
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
                                        <button type="button" data-toggle="collapse" data-target={"#accordion-tab-content" + index} aria-expanded="false" aria-controls={"accordion-tab-content" + index}
                                            className={"btn btn-link" + (faq.isActive ? "" : " text-danger")}>
                                            {(faq.isActive ? "" : " (In Active) ") + faq.question}
                                        </button>
                                    </h5>
                                </div>
                                <div className={"collapse" + (index === 0 ? " show" : "")} id={"accordion-tab-content" + index} aria-labelledby={"accordion-tab-heading" + index} data-parent="#accordion-tab-1">
                                    <div className="card-body">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-sm-10">
                                                    <p className={faq.isActive ? "" : "text-danger"}>{faq.answer}</p>
                                                </div>
                                                <div className="col-sm-2 text-right">
                                                    <Authorise userroles={[Role.SuperAdmin, Role.Admin]}>
                                                        <>
                                                            <ModalPopUpButton action={() => this.props.faqEditId(faq.id)}><Icon type='Edit' /> Edit</ModalPopUpButton>
                                                            {' '}
                                                            <button type="button"
                                                                className="btn btn-sm btn-danger"
                                                                data-toggle="modal"
                                                                data-backdrop="static" data-keyboard="false"
                                                                data-target="#modalPopUpConfirm"
                                                                onClick={() => { this.handleConfirm(faq.id); return true; }}
                                                            ><Icon type='Delete' /> Delete</button>
                                                        </>
                                                    </Authorise>

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
                    <input type="text" className="form-control shadow" value={searchText} name="searchText" onChange={this.handleChange} placeholder="Search Question by text." />
                </div>
            </div>
        )

        return (
            <>
                <ModalConfirm heading="Confirm Delete" message="Are you sure to delete this FAQ" callBack={this.confirmDelete} actionButtonText="Save FAQ" />
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