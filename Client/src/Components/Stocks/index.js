import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PageTemplate, Icon, ModalPopUp, ModalPopUpButton, ModalConfirm, Authorise, List } from '_controls';
import { Role, Action } from '_helpers';
import { masterActions } from '_actions';
import { StockForm } from './StockForm';


class StockPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataObject: null,
            action: Action.Add,
            isOpenModal: false,
            editDeleteItemId: null,
        };
        this.fetchData = this.fetchData.bind(this);
        this.addNew = this.addNew.bind(this);
        this.actionItem = this.actionItem.bind(this);
        this.cancelModal = this.cancelModal.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
        this.addMarketText = this.addMarketText.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.props.dispatch(masterActions.getAllStock());
        this.props.dispatch(masterActions.getMarket());
    }

    addNew() {
        this.setState({ dataObject: null, isOpenModal: true, action: Action.Add });
    }

    cancelModal() {
        this.setState({
            isOpenModal: false
        });
    }

    actionItem(action, id) {
        this.setState({
            action: (action === Action.Edit) ? Action.Edit : ((action === Action.Delete) ? Action.Delete : ''),
            editDeleteItemId: id,
            isOpenModal: true,
            dataObject: this.props.stock.items.filter(function (item) {
                return item._id === id;
            })[0]
        });
    }

    confirmDelete() {
        if (this.state.action === Action.Delete) {
            this.props.dispatch(masterActions.deleteStock(this.state.editDeleteItemId));
            this.fetchData();
        }
    }

    addMarketText(stock, market) {
        let mappedRecords = stock && market &&
            stock.items && market.items &&
            stock.items.map((item, index) => {
                item.marketName = market.items.filter(x => x.id === item.market)[0].name;
                return item;
            });
        const finalObject = [];
        finalObject.items = mappedRecords;
        return finalObject;
    }

    render() {
        const { stock, market } = this.props;
        const manipulatedStock = this.addMarketText(stock, market);
        const { action, isOpenModal, dataObject } = this.state;
        const heading = ['marketName|Market', 'name|Name', 'description|Description', 'symbol|Symbol', 'isIndex', 'isIndexOption', 'isFuture', 'isFutureOption', 'isCash', 'expiryDate|Expiry Date', 'quantity|Quantity', 'unit|Unit', 'derivateType|Derivate Type', 'isActive|Active'];
        const config = {
            removeTime: true,
            removeTimeFields: 'expiryDate'
        }

        return (
            <Authorise isNotMessage={true} userroles={[Role.SuperAdmin, Role.Admin]}>
                <ModalConfirm heading="Confirm Delete" message="Are you sure to delete this Stock" callBack={this.confirmDelete} actionButtonText="Delete" />
                <PageTemplate heading="Stocks">
                    <div className="row">
                        <div className="col-lg-12 text-right">
                            <div className="form-group list-textBox add-Faq-Button">
                                <button type="button" className="btn btn-sm btn-info"><Icon type='upload' /> Import Stocks</button>{' '}
                                <ModalPopUpButton action={this.addNew}><Icon type='add' /> Add New</ModalPopUpButton>
                                <ModalPopUp heading={dataObject === null ? "Add" : "Edit"}>
                                    {
                                        (isOpenModal && (action === Action.Add || action === Action.Edit) &&
                                            <StockForm action={action} dataObject={dataObject} cancelModal={this.cancelModal} refreshList={this.fetchData} />)
                                    }
                                </ModalPopUp>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {manipulatedStock && <List data={manipulatedStock} heading={heading} actionItem={this.actionItem} config={config} />}
                        </div>
                    </div>
                </PageTemplate>
            </Authorise>
        );
    }
}

function mapStateToProps(state) {
    const { stock, market, loading } = state;
    return {
        loading,
        stock,
        market,
    };
}

const connectedStockPage = connect(mapStateToProps)(StockPage);
export { connectedStockPage as StockPage };

