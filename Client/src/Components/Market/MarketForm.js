import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loading, Icon, ModalPopUpButton } from '_controls';
import { commonMethods } from '_helpers';
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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillReceiveProps = (nextProps) => {
        // if (nextProps.faqObject != null && nextProps.faqObject._id !== null && nextProps.action === 'Edit') {
        //     this.setState({
        //         id: nextProps.faqObject._id,
        //         market: nextProps.faqObject.market,
        //         description: nextProps.faqObject.description,
        //         isActive: nextProps.faqObject.isActive,
        //         submitted: false,
        //         isLoading: false
        //     });
        // }
        // else if (nextProps.action === 'Add') {
        //     this.setState({ id: null, market: '', description: '', isActive: true, submitted: false, isLoading: false });
        // }
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