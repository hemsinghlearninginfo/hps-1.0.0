import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PageTemplate, Icon, ModalPopUp, ModalPopUpButton, Loading, Authorise, List } from '_controls';
import { Role } from '_helpers';
import { masterActions } from '_actions';

class MarketPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataObject: null,
            action: 'Add',
        };
        this.fetchData = this.fetchData.bind(this);
        this.addNew = this.addNew.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.props.dispatch(masterActions.getAllMarket());
    }

    addNew() {
        this.setState({ dataObject: null, action: 'Add' });
    }

    render() {
        const { market } = this.props;
        const heading = ['name|Name', 'description|Description', 'isActive|Active'];
        return (
            <PageTemplate heading="Market">
                <Authorise isNotMessage={true} userroles={[Role.SuperAdmin, Role.Admin]}>
                    <div className="row">
                        <div className="col-lg-12 text-right">
                            <div className="form-group list-textBox add-Faq-Button">
                                <ModalPopUpButton action={this.addNew}><Icon type='add' /> Add New</ModalPopUpButton>
                                <ModalPopUp heading={this.state.dataObject === null ? "Add" : "Edit"}>
                                    {/* <FAQForm dataObject={this.state.dataObject} refreshList={this.fetchData} action={this.state.action} /> */}
                                </ModalPopUp>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <List data={market} heading={heading} />
                        </div>
                    </div>
                </Authorise>
            </PageTemplate>
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

