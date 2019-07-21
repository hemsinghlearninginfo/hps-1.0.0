import React from 'react';
import { connect } from 'react-redux';

class AddFAQ extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <form>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="question">Question</label>
                            <input type="type" className="form-control" name="question" placeholder="Question" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="answer">Answer</label>
                            <textarea className="form-control" name="answer" placeholder="Answer" />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name="isActive" />
                            <label className="form-check-label" htmlFor="isActive">is Active</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary btn-sm">Save changes</button>
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