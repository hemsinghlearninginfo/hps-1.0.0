import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeupActions } from '../../_actions';
import { commonMethods } from '../../_helpers';
import { Icon, Authorise, ModalPopUp, ModalPopUpButton } from '../../_controls';

class AddWriteUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAdd: false,
            description: '',
            isError: false,
            submitted: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addWriteUp = this.addWriteUp.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.writeup.isPosted) {
            commonMethods.callClick('closeWriteUp');
            this.setState({
                isAdd: false,
                description: '',
                isError: false,
                submitted: false
            });
            this.props.requireRefresh();
        }
        else if (nextProps.writeup.isPostingFail) {
            this.setState({ submitted: false });
        }
        commonMethods.scrollTop();
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.description !== '') {
            this.setState({ submitted: false });
            const { dispatch } = this.props;
            const { description } = this.state;
            dispatch(writeupActions.create({ description }));
        }
        else {
            this.setState({ submitted: true });
        }
    }

    addWriteUp() {
        this.setState({ isAdd: true });
    }

    render() {
        const { isAdd, submitted } = this.state;

        const addButtonHTML = (<Authorise isLoggedIn={true}>
            <ModalPopUpButton action={this.addWriteUp}><Icon type='add' /> Post your Writeup</ModalPopUpButton>
        </Authorise>
        );

        const writeUpForm = (isAdd &&
            <form onSubmit={this.handleSubmit}>
                <div className="modal-body text-left">
                    <div className="form-group">
                        <textarea className="form-control required" name="writeup" rows="5" value={this.state.description} onChange={(e) => { this.setState({ description: e.target.value }) }} placeholder="Thankyou for providing best platform for trading...."></textarea>
                        {submitted && <div className="help-block text-left">Please write few words for us.</div>}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary btn-sm"><Icon type='save' /> Save</button>
                    {' '}
                    <button id="closeWriteUp" type="button" className="btn btn-secondary btn-sm" onClick={() => this.setState({ submitted: false })} data-dismiss="modal"><Icon type='close' /> Close</button>
                </div>
            </form>
        );

        return (
            <>
                <ModalPopUp heading="Leave your write up">
                    {writeUpForm}
                </ModalPopUp>
                <div className="row">
                    <div className="col">
                        {addButtonHTML}
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { writeup } = state;
    return {
        writeup
    };
}

const connectedAddWriteUp = connect(mapStateToProps)(AddWriteUp);
export { connectedAddWriteUp as AddWriteUp }; 
