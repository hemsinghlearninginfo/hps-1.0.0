import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
//import { commonMethods } from '../../_helpers';
import { Icon, ModalPopUp } from '../../_controls';

class UploadFile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            isError: false,
            submitted: false,
            uploadedFiles: [],
        }
        this.handleFiles = this.handleFiles.bind(this);
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

    handleFiles = files => {
        const { uploadedFiles } = this.state;
        uploadedFiles.push(files);
        this.setState({ uploadedFiles });
        console.log(files);
        //fileTypes={[".csv",".zip"]} 
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
        const { uploadedFiles } = this.state;
        const displayFiles = uploadedFiles && uploadedFiles.length > 0 && uploadedFiles.map(function (item, index) {
            return <img key={index} src={item.base64} className="display-file" />
        });
        const uploadFormHTML = (
            <>
                <div className="modal-body text-left">
                    <div className="form-group">
                        <div className="custom-file">
                            <ReactFileReader fileTypes={this.props.fileTypes} base64={true} multipleFiles={this.props.isAddMultiple} handleFiles={this.handleFiles}>
                                <button className='btn btn-sm btn-info'><Icon type='file' /> Select Files</button>
                            </ReactFileReader>
                        </div>
                        <div className="row">
                            {displayFiles}
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary btn-sm"><Icon type='upload' /> Upload</button>
                    {' '}
                    <button id="closeWriteUp" type="button" className="btn btn-secondary btn-sm" onClick={() => this.setState({ submitted: false })} data-dismiss="modal"><Icon type='close' /> Close</button>
                </div>
            </>
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


//https://steemit.com/utopian-io/@morningtundra/storing-and-retreiving-images-in-mongodb-with-nodejs
// https://www.npmjs.com/package/react-file-reader