import { masterConstants } from '_constants';
import { masterService } from '_services';
import { alertActions } from '.';

export const masterActions = {
    getAllMarket,
    createMarket,
    updateMarket
};

function getAllMarket() {
    return dispatch => {
        dispatch(request());

        masterService.getAllMarket()
            .then(
                market => { 
                    dispatch(success(market)) 
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: masterConstants.MASTER_MARKET_GETALL_REQUEST } }
    function success(market) { return { type: masterConstants.MASTER_MARKET_GETALL_SUCCESS, market } }
    function failure(error) { return { type: masterConstants.MASTER_MARKET_GETALL_FAILURE, error } }
}


function createMarket(data) {
    return dispatch => {
        dispatch(request(data));
        masterService.createMarket(data)
            .then(
                data => {
                    dispatch(success(data));
                    dispatch(alertActions.success('Market added successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(data) { return { type: masterConstants.MASTER_MARKET_POST_REQUEST, data: data} }
    function success(data) { return { type: masterConstants.MASTER_MARKET_POST_SUCCESS, data: data } }
    function failure(error) { return { type: masterConstants.MASTER_MARKET_POST_FAILURE, error } }
}

function updateMarket(data) {
    return dispatch => {
        dispatch(request(data));
        masterService.updateMarket(data)
            .then(
                data => {
                    dispatch(success(data));
                    dispatch(alertActions.success('Market updated successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(data) { return { type: masterConstants.MASTER_MARKET_POST_REQUEST, data: data } }
    function success(data) { return { type: masterConstants.MASTER_MARKET_POST_SUCCESS, data: data } }
    function failure(error) { return { type: masterConstants.MASTER_MARKET_POST_FAILURE, error } }
}

