import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PageTemplate, Icon, ModalPopUp, ModalPopUpButton, Loading, Authorise, List } from '_controls';
import { Role } from '_helpers';
import { masterActions } from '_actions';
import { MarketForm } from './MarketForm';


class MarketPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataObject: null,
            action: 'Add',
            isOpenModal: false,
            isEdit: false,
            isDelete: false,
            editDeleteItemId: null,
        };
        this.fetchData = this.fetchData.bind(this);
        this.addNew = this.addNew.bind(this);
        this.actionItem = this.actionItem.bind(this);
        this.cancelModal = this.cancelModal.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.props.dispatch(masterActions.getAllMarket());
    }

    addNew() {
        this.setState({ dataObject: null, isOpenModal: true, action: 'Add' });
    }

    cancelModal() {
        this.setState({
            isOpenModal: false
        });
    }

    actionItem(action, id) {
        this.setState({
            action,
            editDeleteItemId: id,
            isOpenModal: true
        });
    }

    render() {
        const { market } = this.props;
        const { action, isOpenModal } = this.state;
        const heading = ['name|Name', 'description|Description', 'isActive|Active'];
        return (
            <Authorise isNotMessage={true} userroles={[Role.SuperAdmin, Role.Admin]}>
                <PageTemplate heading="Market">
                    <div className="row">
                        <div className="col-lg-12 text-right">
                            <div className="form-group list-textBox add-Faq-Button">
                                <ModalPopUpButton action={this.addNew}><Icon type='add' /> Add New</ModalPopUpButton>
                                <ModalPopUp heading={this.state.dataObject === null ? "Add" : "Edit"}>
                                    {action === 'Add' && isOpenModal && <MarketForm cancelModal={this.cancelModal} />}
                                </ModalPopUp>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <List data={market} heading={heading} actionItem={this.actionItem} />
                        </div>
                    </div>
                </PageTemplate>
            </Authorise>
        );
    }
}

function mapStateToProps(state) {
    const { market, loading } = state;
    return {
        loading,
        market,
    };
}

const connectedMarketPage = connect(mapStateToProps)(MarketPage);
export { connectedMarketPage as MarketPage };

