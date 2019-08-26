import { masterConstants } from '_constants';
import { masterService } from '_services';
//import { alertActions, modalAlertActions } from '.';

export const masterActions = {
    getAllMarket,
};

function getAllMarket() {
    return dispatch => {
        dispatch(request());

        masterService.getAllMarket()
            .then(
                market => { 
                    dispatch(success(market)) 
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: masterConstants.MASTER_MARKET_GETALL_REQUEST } }
    function success(market) { return { type: masterConstants.MASTER_MARKET_GETALL_SUCCESS, market } }
    function failure(error) { return { type: masterConstants.MASTER_MARKET_GETALL_FAILURE, error } }
}
