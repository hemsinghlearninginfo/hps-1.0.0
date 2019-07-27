import { faqConstants } from '../_constants';
import { faqService } from '../_services';
import { modalAlertActions, alertActions } from './';
//import { history } from '../_helpers';

export const faqActions = {
    create,
    update,
    getAll,
    // login,
    // logout,
    // register,
    // delete: _delete
};

function create(faq) {
    return dispatch => {
        dispatch(request(faq));
        faqService.create(faq)
            .then(
                faq => {
                    dispatch(success(faq));
                    dispatch(alertActions.success('FAQ added successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(modalAlertActions.error(error.toString()));
                }
            );
    };

    function request(faq) { return { type: faqConstants.POST_REQUEST, faq: faq } }
    function success(faq) { return { type: faqConstants.POST_SUCCESS, faq: faq } }
    function failure(error) { return { type: faqConstants.POST_FAILURE, error } }
}

function update(faq) {
    return dispatch => {
        dispatch(request(faq));
        faqService.update(faq)
            .then(
                faq => {
                    dispatch(success(faq));
                    dispatch(alertActions.success('FAQ updated successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(modalAlertActions.error(error.toString()));
                }
            );
    };

    function request(faq) { return { type: faqConstants.POST_REQUEST, faq: faq } }
    function success(faq) { return { type: faqConstants.POST_SUCCESS, faq: faq } }
    function failure(error) { return { type: faqConstants.POST_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        faqService.getAll()
            .then(
                faqs => dispatch(success(faqs)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: faqConstants.GETALL_REQUEST } }
    function success(faqs) { return { type: faqConstants.GETALL_SUCCESS, faqs } }
    function failure(error) { return { type: faqConstants.GETALL_FAILURE, error } }
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