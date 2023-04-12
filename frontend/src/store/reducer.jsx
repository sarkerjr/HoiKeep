import { combineReducers } from 'redux';

// slices import
import layoutSlice from './slices/layoutSlice';

const reducer = combineReducers({
  layout: layoutSlice,
});

export default reducer;
