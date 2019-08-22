import { uploadFileConstants } from '_constants';
import { uploadFileService } from '_services';
import { modalAlertActions, alertActions } from './';
//import { history } from '_helpers';

export const uploadFileActions = {
    create,
    update,
    getAll,
    delete: _delete
    // login,
    // logout,
    // register,
    // delete: _delete
};

function create(uploadedFiles) {
    return dispatch => {
        for (let index in uploadedFiles) {
            let file = uploadedFiles[index];
            dispatch(request(file));
            uploadFileService.create(file)
                .then(
                    uploadedFile => {
                        file.isUploaded = true;
                        dispatch(success(file));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(modalAlertActions.error(error.toString()));
                    }
                );
        }
    };

    function request(uploadFile) { return { type: uploadFileConstants.POST_REQUEST, uploadFile: uploadFile } }
    function success(uploadFile) { return { type: uploadFileConstants.POST_SUCCESS, uploadFile: uploadFile } }
    function failure(error) { return { type: uploadFileConstants.POST_FAILURE, error } }
}

function update(uploadFile) {
    return dispatch => {
        dispatch(request(uploadFile));
        uploadFileService.update(uploadFile)
            .then(
                uploadFile => {
                    dispatch(success(uploadFile));
                    dispatch(alertActions.success('File has been updated successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(modalAlertActions.error(error.toString()));
                }
            );
    };

    function request(uploadFile) { return { type: uploadFileConstants.POST_REQUEST, uploadFile: uploadFile } }
    function success(uploadFile) { return { type: uploadFileConstants.POST_SUCCESS, uploadFile: uploadFile } }
    function failure(error) { return { type: uploadFileConstants.POST_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        uploadFileService.getAll()
            .then(
                uploadFiles => dispatch(success(uploadFiles)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: uploadFileConstants.GETALL_REQUEST } }
    function success(uploadFiles) { return { type: uploadFileConstants.GETALL_SUCCESS, uploadFiles } }
    function failure(error) { return { type: uploadFileConstants.GETALL_FAILURE, error } }
}

// // prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        uploadFileService.delete(id)
            .then(
                uploadFile => {
                    dispatch(success(id));
                    dispatch(alertActions.success('File has been deleted successful'));
                },
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: uploadFileConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: uploadFileConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: uploadFileConstants.DELETE_FAILURE, id, error } }
}

// function login(username, password) {
//     return dispatch => {
//         dispatch(request({ username }));

//         userService.login(username, password)
//             .then(
//                 user => { 
//                     dispatch(success(user));
//                     history.push('/');
//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                     dispatch(alertActions.error(error.toString()));
//                 }
//             );
//     };

//     function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
//     function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
//     function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
// }

// function logout() {
//     userService.logout();
//     return { type: userConstants.LOGOUT };
// }


