import { faqConstants as faqConstants } from '../_constants';

export function faqs(state = {}, action) {
  switch (action.type) {
    case faqConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case faqConstants.GETALL_SUCCESS:
      return {
        items: action.faqs
      };
    case faqConstants.GETALL_FAILURE:
      return {
        error: action.error
      };

    case faqConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map(faq =>
          faq.id === action.id
            ? { ...faq, deleting: true }
            : faq
        )
      };
    case faqConstants.DELETE_SUCCESS:
      return {
        items: state.items.filter(faq => faq.id !== action.id)
      };
    case faqConstants.DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map(faq => {
          if (faq.id === action.id) {
            const { deleting, ...faqCopy } = faq;
            return { ...faqCopy, deleteError: action.error };
          }
          return faq;
        })
      };

    case faqConstants.POST_REQUEST:
      return { isPosted: false, isPostingFail: false };
    case faqConstants.POST_SUCCESS:
      return { isPosted: true };
    case faqConstants.POST_FAILURE:
      return { isPostingFail: true };

    default:
      return state
  }
}