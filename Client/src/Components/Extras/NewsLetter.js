import React, { Component } from 'react';
//import { extrasActions } from '../../_actions';
import { Icon } from '../../_controls';

export default class NewsLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        // const {  emailId } = this.state;
        // if (question ) {
        //     const { dispatch } = this.props;
        //     dispatch(extrasActions.createNewLetter({ emailId }));
        // }
    }

    render() {
        const { emailId, submitted } = this.state;
        return (
            <>
                <div className="news-letter">
                    <form name="form" className="form-inline" onSubmit={this.handleSubmit}>
                        <div className="form-group mx-sm-3 mb-2">
                            <label htmlFor="emailId" className="sr-only">Password</label>
                            <input type="email" className="form-control" name="emailId"
                                placeholder="Email Id for updates"
                                value={emailId} onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary mb-2"><Icon type='email' /> Submit</button>
                    </form>
                    {!emailId && submitted &&
                        <div className="help-block">EmailId is required.</div>
                    }
                </div>
            </>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         loggingIn,
//         faqs
//     };
// }

// const connectedNewsLetter = connect(mapStateToProps)(NewsLetter);
// export { connectedNewsLetter as NewsLetter }; 
//export default NewsLetter;