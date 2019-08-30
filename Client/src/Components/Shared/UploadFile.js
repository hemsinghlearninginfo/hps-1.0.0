import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import uuid from "uuid";

import { Icon } from '_controls';
import { modalAlertActions, uploadFileActions } from '_actions';
import { commonMethods } from '_helpers';

class UploadFile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            isError: false,
            submitted: false,
            uploadedFiles: [],
            isAddMultiple: this.props.isAddMultiple,
            idToDelete: null,
            confirmDelete: false,
        }
        this.handleFiles = this.handleFiles.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.uploadFiles.list.length > 0 && this.state.uploadedFiles.length && nextProps.uploadFiles.list.length === this.state.uploadedFiles.length) {
            this.props.callbackMethod(this.state.uploadedFiles);
            commonMethods.callClick('closeUploadFile');
            commonMethods.scrollTop();;
        }
    }

    handleFiles = files => {
        const { uploadedFiles, isAddMultiple } = this.state;
        if (!isAddMultiple && uploadedFiles.length > 0) {
            uploadedFiles.splice(0, 1);
        }
        let filedetails = {};
        for (let index = 0; index < files.fileList.length; index++) {
            filedetails = {};
            if (files.fileList[index].size < 10000000) {
                filedetails.imageId = uuid.v4();
                filedetails.image = isAddMultiple ? files.base64[index] : files.base64;
                filedetails.name = files.fileList[index].name;
                filedetails.size = files.fileList[index].size;
                filedetails.type = files.fileList[index].type;
                filedetails.file = files.fileList[index];
                filedetails.isUploaded = false;
                uploadedFiles.push(filedetails);
            }
            else {
                const { dispatch } = this.props;
                dispatch(modalAlertActions.error("File size more than 10mb is not allowed, please selecte another file."));
            }
        }
        this.setState({ uploadedFiles });
        //fileTypes={[".csv",".zip"]} 
    }

    handleConfirm(idToDelete) {
        let response = window.confirm('Are you sure want to delete?');
        if (response) {
            this.setState({
                uploadedFiles: this.state.uploadedFiles.filter(function (file) {
                    return file.id !== idToDelete;
                })
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { uploadedFiles } = this.state;
        dispatch(uploadFileActions.create({ ...uploadedFiles }));

        // let imageFormObj = new FormData();
        // imageFormObj.append("imageName", "multer-image-" + Date.now());
        // imageFormObj.append("imageData", uploadedFiles[0].file);
        // axios.post(`${config.apiUrl}/uploadfiles/uploadmulter`, imageFormObj)
        //     .then((data) => {
        //         if (data.data.success) {
        //             alert("Image has been successfully uploaded using multer");
        //         }
        //     })
        //     .catch((err) => {
        //         alert("Error while uploading image using multer");
        //     });
    }

    render() {
        const { uploadedFiles, isAddMultiple } = this.state;
        const displayFiles = uploadedFiles.map((item, index) =>
            <div key={item.imageId} className={isAddMultiple ? "col-lg-3 col-md-4 col-6" : "col-lg-12 col-md-12 col-12"}>
                <div className="d-block mb-4 h-100 text-center">
                    <a className="text-danger pointer delete-attachment"
                        onClick={() => { this.handleConfirm(item.id); return true; }}
                    ><Icon type='CIRCLECLOSE' /></a>
                    <img src={item.image} className="img-fluid img-thumbnail" />
                    {item.isUploaded && <Icon type='cloudupload' />} <span className="font-small">{item.name}</span>
                </div>
            </div>
        );

        return (
            <>
                <div className="modal-body text-left">
                    <div className="form-group">
                        <div className="custom-file">
                            <div className="font-sm text-mute">
                                Allowed files types:- {this.props.fileTypes.toString().replace(/,./g,', .')}
                            </div>
                            <ReactFileReader fileTypes={this.props.fileTypes} base64={true} multipleFiles={this.props.isAddMultiple} handleFiles={this.handleFiles}>
                                <button className='btn btn-sm btn-info'><Icon type='file' /> Select Files</button>
                            </ReactFileReader>
                        </div>
                        {uploadedFiles && uploadedFiles.length > 0 && (<div className="row">
                            <div className="container">
                                <h5 className="font-weight-light text-center text-lg-left mt-1 mb-0">Attached Files</h5>
                                <hr className="mt-2 mb-3" />
                                <div className="row text-center text-lg-left">
                                    {displayFiles}
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary btn-sm" onClick={this.handleSubmit}><Icon type='upload' /> Upload</button>
                    {' '}
                    <button id="closeUploadFile" type="button" className="btn btn-secondary btn-sm" onClick={() => this.setState({ submitted: false })} data-dismiss="modal"><Icon type='close' /> Close</button>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { uploadFiles } = state;
    return {
        uploadFiles
    };
}

const connectedUploadFile = connect(mapStateToProps)(UploadFile);
export { connectedUploadFile as UploadFile };

//https://steemit.com/utopian-io/@morningtundra/storing-and-retreiving-images-in-mongodb-with-nodejs
// https://www.npmjs.com/package/react-file-reader

// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
// https://malcoded.com/posts/react-file-upload/