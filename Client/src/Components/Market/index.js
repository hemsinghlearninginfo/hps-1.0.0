import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PageTemplate, Icon, ModalPopUp, ModalPopUpButton, Loading, Authorise } from '_controls';
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
        const { markets } = this.props;
        return (
            <PageTemplate heading="Market">
                <Authorise userroles={[Role.SuperAdmin, Role.Admin]}>
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
                </Authorise>
                <div className="row">
                    <div className="col-lg-12">
                        {markets && markets.loading && <Loading />}
                        Market List
                    </div>
                </div>
            </PageTemplate>
        );
    }
}

function mapStateToProps(state) {
    const { markets } = state;
    const { loggingIn } = state.authentication;
    return {
        loggingIn,
        markets,
    };
}

const connectedMarketPage = connect(mapStateToProps)(MarketPage);
export { connectedMarketPage as MarketPage };

