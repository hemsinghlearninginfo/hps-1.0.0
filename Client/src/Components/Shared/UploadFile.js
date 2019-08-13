import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import { Icon, ModalPopUp, ModalConfirm } from '../../_controls';
import { uploadFileActions } from '../../_actions';
import config from 'config';
import axios from 'axios';

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
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            filedetails.file = files.fileList[index];
            uploadedFiles.push(filedetails);
        }
        this.setState({ uploadedFiles });
        //fileTypes={[".csv",".zip"]} 
    }

    handleConfirm(idToDelete) {
        this.setState({ confirmDelete: true, idToDelete });
    }

    handleDelete() {
        var uploadedFiles = [...this.state.uploadedFiles];
        if (this.state.idToDelete !== -1) {
            uploadedFiles.splice(this.state.idToDelete, 1);
            this.setState({ uploadedFiles });
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { uploadedFiles } = this.state;

        let imageObj = {
            imageName: "base-image-" + Date.now(),
            imageData: uploadedFiles[0].image.toString()
        };
        dispatch(uploadFileActions.create(imageObj));

        // axios.post(`${config.apiUrl}/uploadfiles/uploadbase`, imageObj)
        //     .then((data) => {
        //         if (data.data.success) {
        //             alert("Image has been successfully uploaded using base64 format");
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         alert("Error while uploading image using base64 format")
        //     });

        let imageFormObj = new FormData();
        imageFormObj.append("imageName", "multer-image-" + Date.now());
        imageFormObj.append("imageData", uploadedFiles[0].file);
        //dispatch(uploadFileActions.create(imageFormObj));

        // axios.post(`${config.apiUrl}/uploadfiles/uploadmulter`, imageFormObj)
        //     .then((data) => {
        //         if (data.data.success) {
        //             alert("Image has been successfully uploaded using multer");
        //         }
        //     })
        //     .catch((err) => {
        //         alert("Error while uploading image using multer");
        //     });

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
        const displayFiles = uploadedFiles.map((item, index) =>
            <div key={index} className={isAddMultiple ? "col-lg-3 col-md-4 col-6" : "col-lg-12 col-md-12 col-12"}>
                <div className="d-block mb-4 h-100 text-center">
                    <a className="text-danger pointer"
                        data-toggle="modal"
                        data-backdrop="static" data-keyboard="false"
                        data-target="#modalPopUpConfirm"
                        onClick={() => { this.handleConfirm(index); return true; }}
                    ><Icon type='CIRCLECLOSE' /></a>
                    {/* <img src={item.image} className="img-fluid img-thumbnail" /> */}
                    {item.name}
                </div>
            </div>
        );

        return (
            <>
                <ModalConfirm heading="Confirm Delete" message="Are you sure to delete this?" callBack={this.handleDelete} actionButtonText="Delete" />
                <ModalPopUp heading={this.props.heading}>
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
                        <button type="submit" className="btn btn-primary btn-sm" onClick={this.handleSubmit}><Icon type='upload' /> Upload</button>
                        {' '}
                        <button id="closeWriteUp" type="button" className="btn btn-secondary btn-sm" onClick={() => this.setState({ submitted: false })} data-dismiss="modal"><Icon type='close' /> Close</button>
                    </div>
                </ModalPopUp>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { uploadfile } = state;
    return {
        uploadfile
    };
}

const connectedUploadFile = connect(mapStateToProps)(UploadFile);
export { connectedUploadFile as UploadFile };

//https://steemit.com/utopian-io/@morningtundra/storing-and-retreiving-images-in-mongodb-with-nodejs
// https://www.npmjs.com/package/react-file-reader

// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
// https://malcoded.com/posts/react-file-upload/