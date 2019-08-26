import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PageTemplate, Icon, ModalPopUp, ModalPopUpButton, Loading, Authorise } from '_controls';
import { Role } from '_helpers';

class MarketPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            market: [],
        };
        this.fetchMarkets = this.fetchMarkets.bind(this);
    }

    componentDidMount() {
        this.fetchMarkets();
    }

    fetchMarkets() {
        //this.props.dispatch(faqActions.getAll());
    }

    render() {
        return (
            <PageTemplate heading="Market">
                <Authorise userroles={[Role.SuperAdmin, Role.Admin]}>
                    <div className="row">
                        <div className="col-lg-12 text-right">
                            <div className="form-group list-textBox add-Faq-Button">
                                <button className="btn btn-sm btn-primary" type="button"><Icon type="add" /> Add New</button>
                            </div>
                        </div>
                    </div>
                </Authorise>
                <div className="row">
                    <div className="col-lg-12">
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

