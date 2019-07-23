import React, { Component } from 'react';
import { connect } from 'react-redux';

import { faqActions } from '../../_actions';

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
        const { question, answer, isActive } = this.state;
        const { dispatch } = this.props;
        if (question && answer) {
            dispatch(faqActions.addUpdate({ question, answer, isActive }, 'closeAddFaq'));
            this.setState({
                question: '',
                answer: '',
                isActive: true,
                submitted: false
            });
            this.props.refreshCode();
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
                            <label className="form-check-label" htmlFor="isActive">
                                <input type="checkbox" className="form-check-input" name="isActive" defaultChecked={isActive} value={isActive} onChange={this.handleChange} />
                                is Active</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary btn-sm">Save FAQ</button>
                        <button id="closeAddFaq" type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
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