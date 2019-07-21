import { modalAlertConstants } from '../_constants';

export function modalAlert(state = {}, action) {
  switch (action.type) {
    case modalAlertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case modalAlertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case modalAlertConstants.CLEAR:
      return {};
    default:
      return state
  }
}