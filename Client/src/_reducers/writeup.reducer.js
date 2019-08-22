import { writeupConstants } from '_constants';

export function writeup(state = {}, action) {
  switch (action.type) {
    case writeupConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case writeupConstants.GETALL_SUCCESS:
      return {
        items: action.writeup
      };
    case writeupConstants.GETALL_FAILURE:
      return {
        error: action.error
      };

    case writeupConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map(writeup =>
          writeup.id === action.id
            ? { ...writeup, deleting: true }
            : writeup
        )
      };
    case writeupConstants.DELETE_SUCCESS:
      return {
        items: state.items.filter(writeup => writeup.id !== action.id)
      };
    case writeupConstants.DELETE_FAILURE:
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

    case writeupConstants.POST_REQUEST:
      return { isPosted: false, isPostingFail: false };
    case writeupConstants.POST_SUCCESS:
      return { isPosted: true };
    case writeupConstants.POST_FAILURE:
      return { isPostingFail: true };

    default:
      return state
  }
}