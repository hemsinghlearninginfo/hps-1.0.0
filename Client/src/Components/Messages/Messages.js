import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PageTemplate, Icon } from '_controls';

class Messages extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <PageTemplate heading="Messages">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2">
                                <button className="btn btn-sm btn-success">Compose New</button>
                            </div>
                            <div className="col-sm-10">
                                b
                            </div>
                        </div>
                    </div>
                </PageTemplate>
            </>
        );
    }
}

// function mapStateToProps(state) {
//     const { loggingIn, user } = state.authentication;
//     return {
//         loggingIn, user
//     };
// }

// const connectedMessages = connect(mapStateToProps)(Messages);
// export { connectedMessages as Messages }; 
export { Messages }; 