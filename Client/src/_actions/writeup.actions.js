import { writeupConstants } from '_constants';
import { writeupService } from '_services';
import { modalAlertActions, alertActions } from './';
import { commonMethods } from '_helpers';

export const writeupActions = {
    create,
    update,
    getAll,
    delete: _delete,
    get
    // login,
    // logout,
    // register,
    // delete: _delete
};

function create(writeup) {
    return dispatch => {
        const user = commonMethods.getCurrentUser();
        if (user.currentUser != null) {
            const objWriteUp = {
                description: writeup.description,
                username: user.currentUser._id,
                displayName: user.currentUser.firstName
            }
            dispatch(request(objWriteUp));
            writeupService.create(objWriteUp)
                .then(
                    writeup => {
                        dispatch(success(writeup));
                        dispatch(alertActions.success('Thankyou for providing you valuable feedback, its under the process for approval.'));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(modalAlertActions.error(error.toString()));
                    }
                );
        }
        else {
            const errorMessage = 'Something went wrong with authentication, please re-login and submit your approval';
            dispatch(failure(errorMessage));
            dispatch(modalAlertActions.error(errorMessage));
        }
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

function get(numberOfRecords) {
    return dispatch => {
        dispatch(request());

        writeupService.getAll()
            .then(
                writeup => {
                    if (writeup.length > 0) {
                        writeup = writeup.filter(function (item) { return item.isApproved && item.isActive })
                            .sort((a, b) => (a.order - b.order))
                            .slice(0, numberOfRecords);
                    }
                    dispatch(success(writeup));
                },
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
