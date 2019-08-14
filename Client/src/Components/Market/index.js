import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PageTemplate, ModalPopUp, ModalPopUpButton, Loading, Authorise } from '../../_controls';
import { Icon } from '../../_controls';

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
                <div className="row">
                    <div className="col-lg-12 text-right">
                        <div className="form-group list-textBox add-Faq-Button">
                            Market Actions Buttons List
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        Market List
                    </div>
                </div>
            </PageTemplate>
        );
    }
}

// function mapStateToProps(state) {
//     const { faqs } = state;
//     const { loggingIn } = state.authentication;
//     return {
//         loggingIn,
//         faqs,
//     };
// }

// const connectedFAQPage = connect(mapStateToProps)(FAQPage);
// export { connectedFAQPage as FAQPage };

export { MarketPage };

//export * from './FAQPage';