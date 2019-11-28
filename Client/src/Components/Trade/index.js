import React from 'react';
import { connect } from 'react-redux';

import { PageTemplate, ModalPopUp, ModalPopUpButton, Authorise } from '_controls';
// import { TradeForm } from './TradeForm';
// import { ListTrade } from './ListTrade';
// import { Role, commonMethods } from '_helpers';
// import { tradeActions } from '_actions';
// import { Icon } from '_controls';

class TradePage extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     role: null,
        //     tradeObject: null,
        //     action: 'Add',
        // }
        // this.tradeEditId = this.tradeEditId.bind(this);
        // this.addNewTrade = this.addNewTrade.bind(this);

        // this.fetchTrades = this.fetchTrades.bind(this);
        // this.tradeDeleteById = this.tradeDeleteById.bind(this);
    }

    // componentDidMount() {
    //     const user = commonMethods.getCurrentUser();
    //     if (user !== null) {
    //         this.setState({
    //             role: user.role
    //         });
    //     }
    //     this.fetchTrades();
    // }

    // fetchTrades() {
    //     this.props.dispatch(tradeActions.getAll());
    // }

    // tradeDeleteById(deleteFaqId){
    //     this.props.dispatch(tradeActions.delete(deleteFaqId));
    //     this.fetchTrades();
    // }

    // tradeEditId(tradeEditId) {
    //     if (tradeEditId !== null) {
    //         const trade = this.props.trades.items.filter(function (trade) {
    //             return trade._id === tradeEditId;
    //         });
    //         if (trade != null && trade.length > 0) {
    //             this.setState({
    //                 tradeObject: {
    //                     _id: trade[0]._id,
    //                     question: trade[0].question,
    //                     answer: trade[0].answer,
    //                     isActive: trade[0].isActive
    //                 },
    //                 action: 'Edit'
    //             });
    //         }
    //     }
    // }

    // addNewTrade() {
    //     this.setState({ tradeObject: null, action: 'Add' });
    // }

    render() {
        return (
            <PageTemplate heading="Trades">
                <div className="row">
                    Trades
                </div>
                {/* <div className="row">
                    <div className="col-lg-12 text-right">
                        <div className="form-group list-textBox add-Faq-Button">
                            <Authorise userroles={[Role.SuperAdmin, Role.Admin]}>
                                <ModalPopUpButton action={this.addNewTrade}><Icon type='add' /> Add Trade</ModalPopUpButton>
                                <ModalPopUp heading={this.state.tradeObject === null ? "Add Trade" : "Edit Trade"}>
                                    <TradeForm tradeObject={this.state.tradeObject} refreshList={this.fetchTrades} action={this.state.action} />
                                </ModalPopUp>
                            </Authorise>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ListTrade role={this.state.role} trades={this.props.trades} tradeEditId={this.tradeEditId} tradeDeleteById={this.tradeDeleteById} />
                    </div>
                </div> */}
            </PageTemplate>
        );
    }
}

function mapStateToProps(state) {
    //const { trades } = state;
    const { loggingIn } = state.authentication;
    return {
        loggingIn,
      //  trades,
    };
}

const connectedTradePage = connect(mapStateToProps)(TradePage);
export { connectedTradePage as TradePage };

//export * from './TradePage';