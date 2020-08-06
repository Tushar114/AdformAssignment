import { combineReducers } from 'redux';
import Campaign from './campaign';

const rootReducer = combineReducers({
  campaign: Campaign,
});

export default rootReducer;
