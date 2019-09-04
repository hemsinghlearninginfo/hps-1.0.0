import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loading, Icon } from '_controls';
import { Action, commonMethods } from '_helpers';
import { masterActions } from '_actions';

class MarketForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: '',
            description: '',
            isActive: true,
            submitted: false,
            isLoading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const dataProps = this.props;
        if (dataProps.dataObject != null && dataProps.dataObject._id !== null && dataProps.action === Action.Edit) {
            this.setState({
                id: dataProps.dataObject._id,
                name: dataProps.dataObject.name,
                description: dataProps.dataObject.description,
                isActive: dataProps.dataObject.isActive,
                submitted: false,
                isLoading: false
            });
        }
        else if (dataProps.action === Action.Add) {
            this.setState({ id: null, name: '', description: '', isActive: true, submitted: false, isLoading: false });
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.market.isPosted) {
            commonMethods.callClick('closePopUp');
        }

        if(nextProps.market.isPostingFail || nextProps.market.isPosted){
            this.setState({ submitted: false, isLoading: false });
            this.props.refreshList();
            this.props.cancelModal();
            commonMethods.scrollTop();
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        if (e.target.type === 'checkbox') {
            this.setState({ [name]: e.target.checked });
        }
        else {
            this.setState({ [name]: value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true, isLoading: true });
        const { id, name, description, isActive } = this.state;
        if (name && description) {
            this.setState({ isLoading: true });
            const { dispatch } = this.props;
            if (id === undefined || id === null) {
                dispatch(masterActions.createMarket({ name, description, isActive }));
            }
            else {
                dispatch(masterActions.updateMarket({ id, name, description, isActive }));
            }
        }
    }

    render() {
        const { name, description, isActive, submitted, isLoading } = this.state;
        return (
            <>
                {isLoading && <Loading />}
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="modal-body text-left">
                        <div className={'form-group' + (submitted && !name ? ' has-error' : '')}>
                            <label htmlFor="name">Market</label>
                            <input autoFocus type="type" className="form-control required" name="name" placeholder="Market"
                                value={name} onChange={this.handleChange}
                            />
                            {submitted && !name &&
                                <div className="help-block">Market Name is required.</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !description ? ' has-error' : '')}>
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control required" name="description" placeholder="Description"
                                value={description} onChange={this.handleChange} />
                            {submitted && !description &&
                                <div className="help-block">Description is required.</div>
                            }
                        </div>
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="isActive">
                                <input type="checkbox" className="form-check-input" name="isActive"
                                    checked={isActive ? 1 : 0} onChange={this.handleChange} />
                                is Active</label>
                        </div>
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
    const { market } = state;
    return {
        market,
    };
}
const connectedMarketForm = connect(mapStateToProps)(MarketForm);
export { connectedMarketForm as MarketForm };

//export {  MarketForm }; 
