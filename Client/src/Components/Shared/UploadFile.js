import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import { Icon, ModalPopUp } from '../../_controls';

class UploadFile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            isError: false,
            submitted: false,
            uploadedFiles: [],
            isAddMultiple: this.props.isAddMultiple,
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
        const { uploadedFiles, isAddMultiple } = this.state;
        if (!isAddMultiple && uploadedFiles.length > 0) {
            uploadedFiles.splice(0, 1);
        }
        let filedetails = {};
        for (let index = 0; index < files.fileList.length; index++) {
            filedetails = {};
            filedetails.image = isAddMultiple ? files.base64[index] : files.base64;
            filedetails.name = files.fileList[index].name;
            filedetails.size = files.fileList[index].size;
            filedetails.type = files.fileList[index].type;
            uploadedFiles.push(filedetails);
        }
        this.setState({ uploadedFiles });
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
        const { uploadedFiles, isAddMultiple } = this.state;
        const displayFiles = uploadedFiles && uploadedFiles.length > 0 && uploadedFiles.map(function (item, index) {
            return <div key={index} className={isAddMultiple ? "col-lg-3 col-md-4 col-6" : "col-lg-12 col-md-12 col-12"}>
                <div className="d-block mb-4 h-100 text-center">
                    <div className="text-danger"><Icon type='CIRCLECLOSE' /></div>
                    <img src={item.image} className="img-fluid img-thumbnail" />
                    {item.name}
                </div>
            </div>
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
                        {uploadedFiles && uploadedFiles.length > 0 && (<div className="row">
                            <div className="container">
                                <h3 className="font-weight-light text-center text-lg-left mt-1 mb-0">Attached Files</h3>
                                <hr className="mt-2 mb-3" />
                                <div className="row text-center text-lg-left">
                                    {displayFiles}
                                </div>
                            </div>
                        </div>)}
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