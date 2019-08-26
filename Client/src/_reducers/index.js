import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { modalAlert } from './modalAlert.reducer';
import { faqs } from './faqs.reducer';
import { extra } from './extra.reducer';
import { writeup } from './writeup.reducer';
import { uploadFiles } from './uploadFile.reducer';
import { market } from './market.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  modalAlert,
  faqs,
  extra,
  writeup,
  uploadFiles,
  market
});

export default rootReducer;