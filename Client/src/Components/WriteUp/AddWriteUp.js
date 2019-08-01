import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Authorise, ModalPopUp, ModalPopUpButton } from '../../_controls';

class AddWriteUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAdd: false,
            description: '',
            isError: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addWriteUp = this.addWriteUp.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ isError: false });
        if (this.state.description !== '') {
            alert(this.state.description);
        }
        else {
            this.setState({ isError: true });
        }
    }

    addWriteUp() {
        this.setState({ isAdd: true });
    }

    render() {
        const { isAdd, isError } = this.state;

        const addButtonHTML = (<Authorise isLoggedIn={true}>
            <ModalPopUpButton action={this.addWriteUp}><Icon type='add' /> Post your Writeup</ModalPopUpButton>
        </Authorise>
        );

        const writeUpForm = (isAdd &&
            <form onSubmit={this.handleSubmit}>
                <div className="modal-body text-left">
                    <div className="form-group">
                        <textarea className="form-control required" name="writeup" rows="5" value={this.state.description} onChange={(e) => { this.setState({ description: e.target.value }) }} placeholder="Thankyou for providing best platform for trading...."></textarea>
                        {isError && <div className="help-block text-left">Please write few words for us.</div>}
                    </div>
                </div>
                <div className="modal-footer">
                        <button type="submit" className="btn btn-primary btn-sm"><Icon type='save' /> Save</button>
                        {' '}
                        <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.setState({ isError: false })} data-dismiss="modal"><Icon type='close' /> Close</button>
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
