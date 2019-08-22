import { uploadFileConstants } from '_constants';

const INITIAL_STATE = {
  list: [],
};


export function uploadFiles(state = INITIAL_STATE, action) {
  switch (action.type) {

    // case uploadFileConstants.GETALL_REQUEST:
    //   return {
    //     loading: true
    //   };
    // case uploadFileConstants.GETALL_SUCCESS:
    //   return {
    //     items: action.uploadFiles
    //   };
    // case uploadFileConstants.GETALL_FAILURE:
    //   return {
    //     error: action.error
    //   };

    // case uploadFileConstants.DELETE_REQUEST:
    //   return {
    //     ...state,
    //     items: state.items.map(uploadFile =>
    //       uploadFile.id === action.id
    //         ? { ...uploadFile, deleting: true }
    //         : uploadFile
    //     )
    //   };
    // case uploadFileConstants.DELETE_SUCCESS:
    //   return {
    //     items: state.items.filter(uploadFile => uploadFile.id !== action.id)
    //   };
    // case uploadFileConstants.DELETE_FAILURE:
    //   return {
    //     ...state,
    //     items: state.items.map(uploadFile => {
    //       if (uploadFile.id === action.id) {
    //         const { deleting, ...uploadFileCopy } = uploadFile;
    //         return { ...uploadFileCopy, deleteError: action.error };
    //       }
    //       return uploadFile;
    //     })
    //   };

    case uploadFileConstants.POST_REQUEST:
      return { ...state, isPosting: true, isPostingFail: false };
    case uploadFileConstants.POST_SUCCESS:
      let uploadedFiles = state.list.concat(action.uploadFile);
      return {
        ...state,
        list: uploadedFiles,
        isPosted: true
      };
    case uploadFileConstants.POST_FAILURE:
      return { ...state, isPostingFail: true };
    default:
      return state
  }
}