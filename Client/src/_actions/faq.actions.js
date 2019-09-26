import { faqConstants } from '_constants';
import { faqService } from '_services';
import { alertActions } from './';
//import { history } from '_helpers';

export const faqActions = {
    create,
    update,
    getAll,
    delete: _delete
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
                    dispatch(alertActions.error(error.toString()));
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
                    dispatch(alertActions.error(error.toString()));
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

// // prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        faqService.delete(id)
            .then(
                faq => {
                    dispatch(success(id));
                    dispatch(alertActions.success('FAQ deleted successful'));
                },
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: faqConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: faqConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: faqConstants.DELETE_FAILURE, id, error } }
}


