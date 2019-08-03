import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { commonMethods } from '../../_helpers';
import { Icon, ModalPopUp } from '../../_controls';

class UploadFile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            isError: false,
            submitted: false,
            isFreeAdd: this.props.isFreeAdd
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.writeup.isPosted) {
        //     commonMethods.callClick('closeWriteUp');
        //     this.setState({
        //         isAdd: false,
        //         description: '',
        //         isError: false,
        //         submitted: false
        //     });
        //     this.props.requireRefresh();
        // }
        // else if (nextProps.writeup.isPostingFail) {
        //     this.setState({ submitted: false });
        // }
        // commonMethods.scrollTop();
    }

    handleSubmit(e) {
        e.preventDefault();
        // if (this.state.description !== '') {
        //     this.setState({ submitted: false });
        //     const { dispatch } = this.props;
        //     const { description } = this.state;
        //     dispatch(writeupActions.create({ description }));
        // }
        // else {
        //     this.setState({ submitted: true });
        // }
    }


    render() {
        const uploadFormHTML = (
            <form action="/uploadpicture" method="POST" encType="multipart/form-data">
                <div className="modal-body text-left">
                    <div className="form-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" accept="application/x-zip-compressed,image/*" id="validatedCustomFile" required />
                            <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                            <div className="invalid-feedback">Example invalid custom file feedback</div>
                        </div>
                    </div>
                    {this.state.isFreeAdd && <div className="form-group">
                        <button type="button" className="btn btn-sm btn-info"><Icon type='add' /> Add More file</button>
                    </div>}
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary btn-sm"><Icon type='upload' /> Upload</button>
                    {' '}
                    <button id="closeWriteUp" type="button" className="btn btn-secondary btn-sm" onClick={() => this.setState({ submitted: false })} data-dismiss="modal"><Icon type='close' /> Close</button>
                </div>
            </form>
        );

        return (
            <>
                <ModalPopUp heading={this.props.heading}>
                    {uploadFormHTML}
                </ModalPopUp>
            </>
        );
    }
}

// function mapStateToProps(state) {
//     const { uploadfile } = state;
//     return {
//         uploadfile
//     };
// }

// const connectedUploadFile = connect(mapStateToProps)(UploadFile);
// export { connectedUploadFile as UploadFile }; 

export { UploadFile }; 
