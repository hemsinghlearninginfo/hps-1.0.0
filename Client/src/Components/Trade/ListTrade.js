import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Role, commonMethods } from '_helpers';
import { ModalPopUpButton, Authorise, ModalConfirm } from '_controls'
import { Icon } from '_controls';

class ListTrade extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trades: [],
            searchText: '',
            confirmDelete: false,
            idToDelete: null
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

    confirmDelete() {
        this.props.tradeDeleteById(this.state.idToDelete);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { searchText } = this.state;
        const { trades } = this.props;
        const isFaqsExists = (trades.items && trades.items.length > 0 ? true : false);
        let tradeItems = (trades.items && trades.items.length > 0 ? trades.items : null);

        const emptyMessage = (
            <div className="d-flex justify-content-center text-danger">There are no trades yet in added in the system.</div>
        );

        if (searchText !== '' && tradeItems) {
            tradeItems = tradeItems.filter(function (x) {
                return (x.question.indexOf(searchText) > -1);
            });
        }

        let tradeItemsToRender = (tradeItems && <div className="col-lg-12">
            <div className="tab-content">
                <div className="tab-pane show active" id="tab1" role="tabpanel" aria-labelledby="tab1">
                    <div className="accordion" id="accordion-tab-1">
                        {tradeItems.map((trade, index) =>
                            <div className="card" key={trade.id}>
                                <div className="card-header" id={"accordion-tab-heading-" + index}>
                                    <h5>
                                        <button type="button" data-toggle="collapse" data-target={"#accordion-tab-content" + index} aria-expanded="false" aria-controls={"accordion-tab-content" + index}
                                            className={"btn btn-link" + (trade.isActive ? "" : " text-danger")}>
                                            {(trade.isActive ? "" : " (In Active) ") + trade.question}
                                        </button>
                                    </h5>
                                </div>
                                <div className={"collapse" + (index === 0 ? " show" : "")} id={"accordion-tab-content" + index} aria-labelledby={"accordion-tab-heading" + index} data-parent="#accordion-tab-1">
                                    <div className="card-body">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-sm-10">
                                                    <p className={trade.isActive ? "" : "text-danger"}>{trade.answer}</p>
                                                </div>
                                                <div className="col-sm-2 text-right">
                                                    <Authorise userroles={[Role.SuperAdmin, Role.Admin]}>
                                                        <ModalPopUpButton action={() => this.props.tradeEditId(trade.id)}><Icon type='Edit' /> Edit</ModalPopUpButton>
                                                        {' '}
                                                        <button type="button"
                                                            className="btn btn-sm btn-danger"
                                                            data-toggle="modal"
                                                            data-backdrop="static" data-keyboard="false"
                                                            data-target="#modalPopUpConfirm"
                                                            onClick={() => { this.handleConfirm(trade.id); return true; }}
                                                        ><Icon type='Delete' /> Delete</button>
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
                <ModalConfirm heading="Confirm Delete" message="Are you sure to delete this Trade?" callBack={this.confirmDelete} actionButtonText="Delete Trade" />
                {trades.loading && <em>Loading trades...</em>}
                {trades.error && <span className="text-danger">ERROR: {trades.error}</span>}
                {isFaqsExists && searchControl}
                {tradeItems !== null && tradeItems.length > 0 ? tradeItemsToRender : emptyMessage}
            </>
        );
    }
}

function mapStateToProps(state) {
    const { trades } = state;
    const { loggingIn } = state.authentication;
    return {
        loggingIn,
        trades,
    };
}

const connectedListTrade = connect(mapStateToProps)(ListTrade);
export { connectedListTrade as ListTrade }; 