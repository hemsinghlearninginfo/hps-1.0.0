import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loading, Icon, ModalPopUpButton } from '_controls';
import { commonMethods, Action } from '_helpers';
import { faqActions } from '_actions';

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

        this.loadDataObject = this.loadDataObject.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.loadDataObject(this.props);;
    }

    loadDataObject(dataProps) {
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
        debugger;
        this.loadDataObject(nextProps);
        // this.closeModal(nextProps);
    }

    closeModal = (nextProps) => {
        // if (nextProps.faqs.isPosted) {
        //     commonMethods.callClick('closePopUp');
        //     this.setState({
        //         market: '',
        //         description: '',
        //         isActive: true,
        //         submitted: false,
        //         isLoading: false
        //     });
        //     this.props.refreshList();
        // }
        // else if (nextProps.faqs.isPostingFail) {
        //     this.setState({ submitted: false, isLoading: false });
        //     this.props.refreshList();
        // }
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
        this.setState({ submitted: true });
        const { id, name, description, isActive } = this.state;
        if (name && description) {
            this.setState({ isLoading: true });
            const { dispatch } = this.props;
            if (id === undefined) {
                dispatch(faqActions.create({ name, description, isActive }));
            }
            else {
                dispatch(faqActions.update({ id, name, description, isActive }));
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
                            <input type="type" className="form-control required" name="name" placeholder="Market"
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

export { MarketForm }; 