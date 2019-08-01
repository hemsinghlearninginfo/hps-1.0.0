import { writeupConstants } from '../_constants';
import { writeupService } from '../_services';
import { modalAlertActions, alertActions } from './';
//import { history } from '../_helpers';

export const writeupActions = {
    create,
    update,
    getAll,
    delete: _delete
    // login,
    // logout,
    // register,
    // delete: _delete
};

function create(writeup) {
    return dispatch => {
        dispatch(request(writeup));
        writeupService.create(writeup)
            .then(
                writeup => {
                    dispatch(success(writeup));
                    dispatch(alertActions.success('Thankyou for providing you valuable feedback.'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(modalAlertActions.error(error.toString()));
                }
            );
    };

    function request(writeup) { return { type: writeupConstants.POST_REQUEST, writeup: writeup } }
    function success(writeup) { return { type: writeupConstants.POST_SUCCESS, writeup: writeup } }
    function failure(error) { return { type: writeupConstants.POST_FAILURE, error } }
}

function update(writeup) {
    return dispatch => {
        dispatch(request(writeup));
        writeupService.update(writeup)
            .then(
                writeup => {
                    dispatch(success(writeup));
                    dispatch(alertActions.success('FAQ updated successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(modalAlertActions.error(error.toString()));
                }
            );
    };

    function request(writeup) { return { type: writeupConstants.POST_REQUEST, writeup: writeup } }
    function success(writeup) { return { type: writeupConstants.POST_SUCCESS, writeup: writeup } }
    function failure(error) { return { type: writeupConstants.POST_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        writeupService.getAll()
            .then(
                writeup => dispatch(success(writeup)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: writeupConstants.GETALL_REQUEST } }
    function success(writeup) { return { type: writeupConstants.GETALL_SUCCESS, writeup } }
    function failure(error) { return { type: writeupConstants.GETALL_FAILURE, error } }
}

// // prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        writeupService.delete(id)
            .then(
                writeup => {
                    dispatch(success(id));
                    dispatch(alertActions.success('Feedback deleted successful'));
                },
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: writeupConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: writeupConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: writeupConstants.DELETE_FAILURE, id, error } }
}
