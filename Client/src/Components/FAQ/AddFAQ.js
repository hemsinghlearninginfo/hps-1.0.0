import React, { Component } from 'react';
import { connect } from 'react-redux';

import {faqActions} from '../../_actions';

class AddFAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: '',
            isActive: true,
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        if (name === 'isActive') {
            this.setState({ [name]: e.target.checked });
        }
        else {
            this.setState({ [name]: value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { question, answer, isActive } = this.state;
        console.log(isActive);
        const { dispatch } = this.props;
        if (question && answer) {
            dispatch(faqActions.addUpdate({question, answer, isActive}));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { question, answer, isActive, submitted } = this.state;
        return (
            <>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="modal-body">
                        <div className={'form-group' + (submitted && !question ? ' has-error' : '')}>
                            <label htmlFor="question">Question</label>
                            <input type="type" className="form-control" name="question" placeholder="Question"
                                value={question} onChange={this.handleChange}
                            />
                            {submitted && !question &&
                                <div className="help-block">Question is required.</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !answer ? ' has-error' : '')}>
                            <label htmlFor="answer">Answer</label>
                            <textarea className="form-control" name="answer" placeholder="Answer"
                                value={answer} onChange={this.handleChange} />
                            {submitted && !answer &&
                                <div className="help-block">Answer is required.</div>
                            }
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name="isActive" value={isActive} onClick={this.handleChange} />
                            <label className="form-check-label" htmlFor="isActive">is Active</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary btn-sm">Save FAQ</button>
                        <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                    </div>
                </form>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedAddFAQ = connect(mapStateToProps)(AddFAQ);
export { connectedAddFAQ as AddFAQ }; 