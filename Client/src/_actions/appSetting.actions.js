import { appSettingConstants } from '../_constants';
import { appSettingService } from '../_services';
//import { alertActions, modalAlertActions } from '.';

export const appSettingActions = {
    getAllMarket,
};

function getAllMarket() {
    return dispatch => {
        dispatch(request());

        appSettingService.getAllMarket()
            .then(
                market => dispatch(success(market)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: appSettingConstants.APPSETTING_MARKET_GETALL_REQUEST } }
    function success(market) { return { type: appSettingConstants.APPSETTING_MARKET_GETALL_SUCCESS, market } }
    function failure(error) { return { type: appSettingConstants.APPSETTING_MARKET_GETALL_FAILURE, error } }
}
