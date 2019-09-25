import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import moment from 'moment';

import { Loading, Icon } from '_controls';
import { Constants, commonMethods } from '_helpers';
import { masterActions } from '_actions';

class StockForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: '',
            description: '',
            symbol: '',
            expiryDate: new Date(),
            currentStockType: '',
            marketType: '',
            derivateType: '',
            quantity: '',
            unit: '',
            isActive: true,
            submitted: false,
            isLoading: false,

            markets: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.getObject = this.getObject.bind(this);
    }

    fetchData() {
        this.props.dispatch(masterActions.getMarket());
    }

    componentDidMount() {
        this.fetchData();
        // const dataProps = this.props;
        // if (dataProps.dataObject != null && dataProps.dataObject._id !== null && dataProps.action === Action.Edit) {
        //     this.setState({
        //         id: dataProps.dataObject._id,
        //         name: dataProps.dataObject.name,
        //         description: dataProps.dataObject.description,
        //         isActive: dataProps.dataObject.isActive,
        //         submitted: false,
        //         isLoading: false
        //     });
        // }
        // else if (dataProps.action === Action.Add) {
        //     this.setState({ id: null, name: '', description: '', isActive: true, submitted: false, isLoading: false });
        // }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.stock.isPosted) {
            this.props.refreshList();
            this.props.cancelModal();
            commonMethods.callClick('closePopUp');
            commonMethods.scrollTop();
        }
        else if (nextProps.stock.isPostingFail) {
            this.setState({ submitted: false, isLoading: false });
            this.props.refreshList();
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        if (e.target.type === 'checkbox') {
            this.setState({ [name]: e.target.checked });
        }
        else {
            this.setState({ [name]: value.toLowerCase() !== "select" ? value : "" });
        }
    }

    handleDateChange = date => {
        this.setState({
            expiryDate: date
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        let isValid = true;
        const { name, description, symbol, expiryDate, currentStockType, marketType, derivateType, quantity, unit, isActive, submitted, isLoading } = this.state;
        this.setState({ submitted: true, isLoading: true });
        if (name && description && symbol && currentStockType && marketType && quantity && unit) {
            if (currentStockType.indexOf('isIndex') >= 0 || currentStockType.indexOf('isFuture') >= 0) {
                if (!(expiryDate && derivateType)) {
                    isValid = false;
                }
            }
        }
        else {
            isValid = false;
        }
        this.setState({ isLoading: isValid });
        if (isValid) {
            let data = this.getObject();
            console.log(data);
            const { dispatch } = this.props;
            if (data.id === undefined || data.id === null) {
                dispatch(masterActions.createStock(data));
            }
            else {
                dispatch(masterActions.updateStock(data));
            }
        }
    }

    getObject() {
        return {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
            symbol: this.state.symbol,
            market: this.state.marketType,
            expiryDate: moment(moment(this.state.expiryDate).format('LL')),
            isIndex: this.state.currentStockType === 'isIndex',
            isFuture: this.state.currentStockType === 'isFuture',
            isCash: this.state.currentStockType === 'isCash',
            derivateType: this.state.derivateType !== "" ? this.state.derivateType : undefined,
            quantity: this.state.quantity,
            unit: this.state.unit,
        }
    }

    render() {
        const { market } = this.props;
        const { name, description, symbol, expiryDate, currentStockType, marketType, derivateType, quantity, unit, isActive, submitted, isLoading } = this.state;

        const body = (<div>
            <div className="form-row">
                <div className={'form-group col-md-6' + (submitted && !name ? ' help-block' : '')} >
                    <label htmlFor="name">Stock</label>
                    <input autoFocus type="type" className="form-control required" name="name" placeholder="Stock name"
                        value={name} onChange={this.handleChange}
                    />
                    {submitted && !name && <div className="help-block">Stock Name is required.</div>}
                </div>
                <div className={'form-group col-md-6' + (submitted && !symbol ? ' help-block' : '')}>
                    <label htmlFor="description">Symbol</label>
                    <input type="type" className="form-control required" name="symbol" placeholder="Symbol"
                        value={symbol} onChange={this.handleChange} />
                    {submitted && !symbol && <div className="help-block">Symbol is required.</div>}
                </div>
            </div>
            <div className={'form-group' + (submitted && !description ? ' help-block' : '')}>
                <label htmlFor="description">Description</label>
                <textarea className="form-control required" name="description" placeholder="Description"
                    value={description} onChange={this.handleChange} />
                {submitted && !description && <div className="help-block">Description is required.</div>}
            </div>
            <div className="form-row">
                <div className={'form-group col-md-6' + (submitted && !marketType ? ' help-block' : '')}>
                    <label htmlFor="description">Market</label>
                    <select name="marketType" className="form-control required" onChange={this.handleChange} value={marketType}>
                        <option key="">Select</option>
                        {market && market.items && market.items.map((e, key) => {
                            return <option key={e.id} value={e.id}>{e.name}</option>
                        })}
                    </select>
                    {submitted && !marketType && <div className="help-block">Market is required.</div>}
                </div>
                <div className={'form-group col-md-6' + (submitted && !currentStockType ? ' help-block' : '')}>
                    <label htmlFor="description">Stock Type</label>
                    <select name="currentStockType" className="form-control required" onChange={this.handleChange} value={currentStockType}>
                        <option key="">Select</option>
                        {Constants.StockTypes && Constants.StockTypes.map((e, key) => {
                            return <option key={key} value={e.Key}>{e.Value}</option>
                        })}
                    </select>
                    {submitted && !currentStockType && <div className="help-block">Stock Type is required.</div>}
                </div>
            </div>
            {
                currentStockType &&
                (currentStockType.indexOf('isIndex') >= 0 || currentStockType.indexOf('isFuture') >= 0)
                &&
                <div className="form-row">
                    <div className={'form-group col-md-6' + (submitted && !derivateType ? ' help-block' : '')}>
                        <label htmlFor="description">Derivate Type</label>
                        <select name="derivateType" className="form-control required" onChange={this.handleChange} value={derivateType}>
                            <option key="">Select</option>
                            {Constants.DerivateTypes && Constants.DerivateTypes.map((e, key) => {
                                return <option key={key} value={e.Key}>{e.Value}</option>
                            })};
                        </select>
                        {submitted && !derivateType && <div className="help-block">Derivate Type is required.</div>}
                    </div>
                    <div className={'form-group col-md-6' + (submitted && !expiryDate ? ' help-block' : '')} >
                        <label htmlFor="expiryDate">Expiry Date</label>
                        <div>
                            <DatePicker name="expiryDate" className="form-control required"
                                placeholderText="Click to select a expiry date"
                                minDate={new Date()}
                                todayButton="Today"
                                selected={expiryDate}
                                dateFormat="dd/MM/yyyy"
                                onChange={this.handleDateChange}
                            />
                            {submitted && !expiryDate && <div className="help-block">Expiry Date is required.</div>}
                        </div>
                    </div>
                </div>
            }
            <div className="form-row">
                <div className={'form-group col-md-6' + (submitted && !quantity ? ' help-block' : '')}>
                    <label htmlFor="description">Quantity</label>
                    <input type="number" className="form-control required" name="quantity" placeholder="Quantity"
                        value={quantity} onChange={this.handleChange} />
                    {submitted && !quantity && <div className="help-block">Quantity is required.</div>}
                </div>
                <div className={'form-group col-md-6' + (submitted && !unit ? ' help-block' : '')}>
                    <label htmlFor="description">Unit</label>
                    <input type="text" className="form-control required" name="unit" placeholder="Unit"
                        value={unit} onChange={this.handleChange} />
                    {submitted && !unit && <div className="help-block">Unit is required.</div>}
                </div>
            </div>
            <div className="form-check">
                <label className="form-check-label" htmlFor="isActive">
                    <input type="checkbox" className="form-check-input" name="isActive"
                        checked={isActive ? 1 : 0} onChange={this.handleChange} />
                    is Active</label>
            </div>
        </div>)

        return (
            <>
                {isLoading && <Loading />}
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="modal-body text-left">
                        {body}
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary btn-sm"><Icon type='save' /> Save</button>
                        <button id="closePopUp" type="button" className="btn btn-secondary btn-sm" data-dismiss="modal" onClick={this.props.cancelModal}><Icon type='close' /> Close</button>
                    </div>
                </form>
            </>
        );
    }
}


function mapStateToProps(state) {
    const { stock, market } = state;
    return {
        stock,
        market
    };
}
const connectedStockForm = connect(mapStateToProps)(StockForm);
export { connectedStockForm as StockForm };

//export {MarketForm}; 
