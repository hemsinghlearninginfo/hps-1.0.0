import { faqConstants } from '../_constants';
import { faqService } from '../_services';
import { modalAlertActions, alertActions } from './';
import $ from 'jquery';
//import { history } from '../_helpers';

export const faqActions = {
    addUpdate,
    // login,
    // logout,
    // register,
    // getAll,
    // delete: _delete
};

function addUpdate(faq, closeObjectId) {
    return dispatch => {
        dispatch(request(faq));

        faqService.addUpdate(faq)
            .then(
                faq => { 
                    dispatch(success());
                    dispatch(alertActions.success('FAQ added successful'));
                    $("#" + closeObjectId).click();
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(modalAlertActions.error(error.toString()));
                }
            );
    };

    function request(faq) { return { type: faqConstants.REGISTER_REQUEST, user: faq } }
    function success(faq) { return { type: faqConstants.REGISTER_SUCCESS, user: faq } }
    function failure(error) { return { type: faqConstants.REGISTER_FAILURE, error } }
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


// function getAll() {
//     return dispatch => {
//         dispatch(request());

//         userService.getAll()
//             .then(
//                 users => dispatch(success(users)),
//                 error => dispatch(failure(error.toString()))
//             );
//     };

//     function request() { return { type: userConstants.GETALL_REQUEST } }
//     function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
//     function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
// }

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     return dispatch => {
//         dispatch(request(id));

//         userService.delete(id)
//             .then(
//                 user => dispatch(success(id)),
//                 error => dispatch(failure(id, error.toString()))
//             );
//     };

//     function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
//     function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
//     function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
// }