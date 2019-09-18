import { masterConstants } from '_constants';

export function stock(state = {}, action) {
  switch (action.type) {
    case masterConstants.MASTER_STOCK_GETALL_REQUEST:
      return {
        loading: true
      };
    case masterConstants.MASTER_STOCK_GETALL_SUCCESS:
      return {
        items: action.stock
      };
    case masterConstants.MASTER_STOCK_GETALL_FAILURE:
      return {
        error: action.error
      };

    case masterConstants.MASTER_STOCK_DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map(stock =>
          stock.id === action.id
            ? { ...stock, deleting: true }
            : stock
        )
      };
    case masterConstants.MASTER_STOCK_DELETE_SUCCESS:
      return {
        ...state,
        items: state.items.filter(stock => stock.id !== action.id)
      };
    case masterConstants.MASTER_STOCK_DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map(stock => {
          if (stock.id === action.id) {
            const { deleting, ...stockCopy } = stock;
            return { ...stockCopy, deleteError: action.error };
          }
          return stock;
        })
      };

    case masterConstants.MASTER_STOCK_POST_REQUEST:
      return { isPosted: false, isPostingFail: false };
    case masterConstants.MASTER_STOCK_POST_SUCCESS:
      return { isPosted: true };
    case masterConstants.MASTER_STOCK_POST_FAILURE:
      return { isPostingFail: true };

    default:
      return state
  }
}