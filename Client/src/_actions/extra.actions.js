import { extraConstants } from '../_constants';
import { extraService } from '../_services';
import { alertActions, modalAlertActions } from '.';

export const extraActions = {
    addNewsLetterRequest,
};

function addNewsLetterRequest(emailId) {
    return dispatch => {
        dispatch(request(emailId));
        extraService.addNewsLetterRequest(emailId)
            .then(
                faq => {
                    dispatch(success(faq));
                    dispatch(alertActions.success('News Letter request submitted successful.'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(emailId) { return { type: extraConstants.EXTRA_REQUEST_STARTED, emailId: emailId } }
    function success(emailId) { return { type: extraConstants.EXTRA_REQUEST_SUCCESS, emailId: emailId } }
    function failure(error) { return { type: extraConstants.EXTRA_REQUEST_FAILURE, error } }
}
