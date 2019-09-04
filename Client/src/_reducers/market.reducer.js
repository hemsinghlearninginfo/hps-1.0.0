import { masterConstants } from '_constants';

export function market(state = {}, action) {
  switch (action.type) {
    case masterConstants.MASTER_MARKET_GETALL_REQUEST:
      return {
        loading: true
      };
    case masterConstants.MASTER_MARKET_GETALL_SUCCESS:
      return {
        items: action.market
      };
    case masterConstants.MASTER_MARKET_GETALL_FAILURE:
      return {
        error: action.error
      };

    case masterConstants.MASTER_MARKET_DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map(market =>
          market.id === action.id
            ? { ...market, deleting: true }
            : market
        )
      };
    case masterConstants.MASTER_MARKET_DELETE_SUCCESS:
      return {
        ...state,
        items: state.items.filter(market => market.id !== action.id)
      };
    case masterConstants.MASTER_MARKET_DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map(market => {
          if (market.id === action.id) {
            const { deleting, ...marketCopy } = market;
            return { ...marketCopy, deleteError: action.error };
          }
          return market;
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