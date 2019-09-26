import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loading } from '_controls';
import { commonMethods } from '_helpers';
import { faqActions } from '_actions';
import { Icon } from '_controls';

class FAQForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
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
        if (nextProps.faqObject != null && nextProps.faqObject._id !== null && nextProps.action === 'Edit') {
            this.setState({
                id: nextProps.faqObject._id,
                question: nextProps.faqObject.question,
                answer: nextProps.faqObject.answer,
                isActive: nextProps.faqObject.isActive,
                submitted: false,
                isLoading: false
            });
        }
        else if (nextProps.action === 'Add') {
            this.setState({ id: null, question: '', answer: '', isActive: true, submitted: false, isLoading: false });
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
            if (!commonMethods.isBlank(id)) {
                dispatch(faqActions.create({ question, answer, isActive }));
            }
            else {
                dispatch(faqActions.update({ id, question, answer, isActive }));
            }
        }
    }

    render() {
        const { question, answer, isActive, submitted, isLoading } = this.state;
        return (
            <>
                {isLoading && <Loading />}
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="modal-body text-left">
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
                                <input type="checkbox" className="form-check-input" name="isActive"
                                    checked={isActive ? 1 : 0} onChange={this.handleChange} />
                                is Active</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary btn-sm"><Icon type='save' /> Save FAQ</button>
                        <button id="closeAddFaq" type="button" className="btn btn-secondary btn-sm" data-dismiss="modal"><Icon type='close' /> Close</button>
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