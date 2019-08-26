import { masterConstants } from '_constants';

export function market(state = {}, action) {
  switch (action.type) {
    case masterConstants.MASTER_MARKET_GETALL_REQUEST:
      return {
        loading: true
      };
    case masterConstants.MASTER_MARKET_GETALL_SUCCESS:
      return {
        items: action.writeup
      };
    case masterConstants.MASTER_MARKET_GETALL_FAILURE:
      return {
        error: action.error
      };

    case masterConstants.MASTER_MARKET_DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map(writeup =>
          writeup.id === action.id
            ? { ...writeup, deleting: true }
            : writeup
        )
      };
    case masterConstants.MASTER_MARKET_DELETE_SUCCESS:
      return {
        items: state.items.filter(writeup => writeup.id !== action.id)
      };
    case masterConstants.MASTER_MARKET_DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map(writeup => {
          if (writeup.id === action.id) {
            const { deleting, ...writeupCopy } = writeup;
            return { ...writeupCopy, deleteError: action.error };
          }
          return writeup;
        })
      };

    case masterConstants.MASTER_MARKET_POST_REQUEST:
      return { isPosted: false, isPostingFail: false };
    case masterConstants.MASTER_MARKET_POST_SUCCESS:
      return { isPosted: true };
    case masterConstants.MASTER_MARKET_POST_FAILURE:
      return { isPostingFail: true };

    default:
      return state
  }
}