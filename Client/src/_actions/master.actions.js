import { masterConstants } from '_constants';
import { masterService } from '_services';
import { alertActions } from '.';

export const masterActions = {
    getMarket,
    getAllMarket,
    createMarket,
    updateMarket,
    deleteMarket,

    getStock,
    getAllStock,
    createStock,
    updateStock,
    deleteStock,
};

function getMarket() {
    return dispatch => {
        dispatch(request());

        masterService.get(masterConstants.API_MARKET)
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

function getAllMarket() {
    return dispatch => {
        dispatch(request());

        masterService.getAll(masterConstants.API_MARKET)
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
        masterService.create(data, masterConstants.API_MARKET)
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

    function request(data) { return { type: masterConstants.MASTER_MARKET_POST_REQUEST, data: data } }
    function success(data) { return { type: masterConstants.MASTER_MARKET_POST_SUCCESS, data: data } }
    function failure(error) { return { type: masterConstants.MASTER_MARKET_POST_FAILURE, error } }
}

function updateMarket(data) {
    return dispatch => {
        dispatch(request(data));
        masterService.update(data, masterConstants.API_MARKET)
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

function deleteMarket(id) {
    return dispatch => {
        dispatch(request(id));

        masterService.delete(id, masterConstants.API_MARKET)
            .then(
                data => {
                    dispatch(success(id));
                    dispatch(alertActions.success('Market deleted successful'));
                },
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: masterConstants.MASTER_MARKET_DELETE_REQUEST, id } }
    function success(id) { return { type: masterConstants.MASTER_MARKET_DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: masterConstants.MASTER_MARKET_DELETE_FAILURE, id, error } }
}

function getStock() {
    return dispatch => {
        dispatch(request());

        masterService.get(masterConstants.API_STOCK)
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

function getAllStock() {
    return dispatch => {
        dispatch(request());

        masterService.getAll(masterConstants.API_STOCK)
            .then(
                stock => {
                    dispatch(success(stock))
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: masterConstants.MASTER_STOCK_GETALL_REQUEST } }
    function success(market) { return { type: masterConstants.MASTER_STOCK_GETALL_SUCCESS, market } }
    function failure(error) { return { type: masterConstants.MASTER_STOCK_GETALL_FAILURE, error } }
}

function createStock(data) {
    return dispatch => {
        dispatch(request(data));
        masterService.create(data, masterConstants.API_STOCK)
            .then(
                data => {
                    dispatch(success(data));
                    dispatch(alertActions.success('Stock added successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(data) { return { type: masterConstants.MASTER_STOCK_POST_REQUEST, data: data } }
    function success(data) { return { type: masterConstants.MASTER_STOCK_POST_SUCCESS, data: data } }
    function failure(error) { return { type: masterConstants.MASTER_STOCK_POST_FAILURE, error } }
}

function updateStock(data) {
    return dispatch => {
        dispatch(request(data));
        masterService.update(data, masterConstants.API_STOCK)
            .then(
                data => {
                    dispatch(success(data));
                    dispatch(alertActions.success('Stock updated successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(data) { return { type: masterConstants.MASTER_STOCK_POST_REQUEST, data: data } }
    function success(data) { return { type: masterConstants.MASTER_STOCK_POST_SUCCESS, data: data } }
    function failure(error) { return { type: masterConstants.MASTER_STOCK_POST_FAILURE, error } }
}

function deleteStock(id) {
    return dispatch => {
        dispatch(request(id));

        masterService.delete(id, masterConstants.API_STOCK)
            .then(
                data => {
                    dispatch(success(id));
                    dispatch(alertActions.success('Stock deleted successful'));
                },
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: masterConstants.MASTER_STOCK_DELETE_REQUEST, id } }
    function success(id) { return { type: masterConstants.MASTER_STOCK_DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: masterConstants.MASTER_STOCK_DELETE_FAILURE, id, error } }
}

