import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from '../../_controls';

class AddWriteUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAdd: false,
            description: '',
            isError: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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

    render() {
        const { isAdd, isError } = this.state;
        const addButtonHTML = (!isAdd &&
            <button className="btn btn-warning" onClick={() => this.setState({ isAdd: true })}><Icon type="add" /> I also want to add feedback</button>
        )

        const writeUpForm = (isAdd && <form onSubmit={this.handleSubmit}>
            <div className="form-group write-up-form">
                <textarea className="form-control required" name="writeup" rows="3" value={this.state.description} onChange={(e) => { this.setState({ description: e.target.value }) }} placeholder="Thankyou for providing best platform for trading...."></textarea>
                {isError && <div className="help-block text-left">Please write few words for us.</div>}
                <div className="text-right p-1">
                    <button type="submit" className="btn btn-primary btn-sm"><Icon type='save' /> Save</button>
                    {' '}
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.setState({ isAdd: false, isError : false })}><Icon type='close' /> Close</button>
                </div>
            </div>
        </form>)

        return (
            <>
                <div className="row">
                    <div className="col">
                        {addButtonHTML}
                        {writeUpForm}
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
