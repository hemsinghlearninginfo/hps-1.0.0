import { messageConstants } from '_constants';

export function messages(state = {}, action) {
  switch (action.type) {
    case messageConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case messageConstants.GETALL_SUCCESS:
      return {
        items: action.message
      };
    case messageConstants.GETALL_FAILURE:
      return {
        error: action.error
      };

    case messageConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map(message =>
          message.id === action.id
            ? { ...message, deleting: true }
            : message
        )
      };
    case messageConstants.DELETE_SUCCESS:
      return {
        ...state,
        items: state.items.filter(message => message.id !== action.id)
      };
    case messageConstants.DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map(message => {
          if (message.id === action.id) {
            const { deleting, ...messageCopy } = message;
            return { ...messageCopy, deleteError: action.error };
          }
          return message;
        })
      };

    case messageConstants.POST_REQUEST:
      return { isPosted: false, isPostingFail: false };
    case messageConstants.POST_SUCCESS:
      return { isPosted: true };
    case messageConstants.POST_FAILURE:
      return { isPostingFail: true };

    default:
      return state
  }
}