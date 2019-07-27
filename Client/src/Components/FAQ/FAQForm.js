import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loading } from '../../_controls';
import { commonMethods } from '../../_helpers';
import { faqActions } from '../../_actions';

class FAQForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.faqEditId != null ? this.props.faqEditId : null,
            question: '',
            answer: '',
            isActive: true,
            submitted: false,
            isLoading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.faqObject != null && nextProps.faqObject.id !== null) {
            this.setState({
                id: nextProps.faqObject.id,
                question: nextProps.faqObject.question,
                answer: nextProps.faqObject.answer,
                isActive: nextProps.faqObject.isActive
            });
        }
        else {
            this.setState({ id: null, question: '', answer: '', isActive: true });
        }
        this.closeModal(nextProps);
    }

    closeModal = (nextProps) => {
        if (nextProps.faqs.isPosted) {
            commonMethods.callClick('closeAddFaq');
            this.setState({
                question: '',
                answer: '',
                isActive: true,
                submitted: false,
                isLoading: false
            });
            this.props.refreshList();
        }
        else if (nextProps.faqs.isPostingFail) {
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
            this.setState({ [name]: value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { id, question, answer, isActive } = this.state;
        if (question && answer) {
            this.setState({ isLoading: true });
            const { dispatch } = this.props;
            if (id !== undefined) {
                dispatch(faqActions.create({ question, answer, isActive }));
            }
        }
    }

    render() {
        const { question, answer, isActive, submitted, isLoading } = this.state;
        return (
            <>
                {isLoading && <Loading />}
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="modal-body">
                        <div className={'form-group' + (submitted && !question ? ' has-error' : '')}>
                            <label htmlFor="question">Question</label>
                            <input type="type" className="form-control required" name="question" placeholder="Question"
                                value={question} onChange={this.handleChange}
                            />
                            {submitted && !question &&
                                <div className="help-block">Question is required.</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !answer ? ' has-error' : '')}>
                            <label htmlFor="answer">Answer</label>
                            <textarea className="form-control required" name="answer" placeholder="Answer"
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
    const { faqs } = state;
    return {
        loggingIn,
        faqs
    };
}

const connectedFAQForm = connect(mapStateToProps)(FAQForm);
export { connectedFAQForm as FAQForm }; 