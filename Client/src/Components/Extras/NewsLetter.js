import React, { Component } from 'react';
import { connect } from 'react-redux';

import { extraActions } from '../../_actions';
import { Icon } from '../../_controls';
import { commonMethods } from '../../_helpers';

class NewsLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.extra.isExtraIsSuccess || nextProps.extra.isExtraFail) {
            commonMethods.scrollTop();
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { emailId } = this.state;
        this.setState({ submitted: true });
        if (emailId) {
            const { dispatch } = this.props;
            dispatch(extraActions.addNewsLetterRequest({ emailId }));
        }
    }

    render() {
        const { emailId, submitted } = this.state;
        return (
            <>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                            <div className="news-letter">
                                <form name="form" className="form-inline" onSubmit={this.handleSubmit}>
                                    <div className="form-group mx-sm-3">
                                        <label className="mx-sm-3"><strong>STAY CONNECTED</strong></label>
                                        <input type="email" className={"form-control" + (!emailId && submitted ? " required-body" : "")} name="emailId"
                                            placeholder="Email address *"
                                            value={emailId} onChange={this.handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary mb-2"><Icon type='email' /> Subscribe</button>
                                </form>
                                <div className="text-center font-italic small">Subscribe to the mailing list to keep up with new features &amp; updates from us. <br />Don't Worry... we don't like spam either <span className="heart"><Icon type="heart" /></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { extra } = state;
    return {
        extra
    };
}

const connectedNewsLetter = connect(mapStateToProps)(NewsLetter);
export { connectedNewsLetter as NewsLetter }; 
