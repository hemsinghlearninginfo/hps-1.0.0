import { extraConstants } from '_constants';

export function extra(state = {}, action) {
  switch (action.type) {
    case extraConstants.EXTRA_REQUEST_STARTED:
      return { isExtraStated: true };
    case extraConstants.EXTRA_REQUEST_SUCCESS:
      return { isExtraIsSuccess: true };
    case extraConstants.EXTRA_REQUEST_FAILURE:
      return { isExtraFail: true };
    default:
      return state
  }
}