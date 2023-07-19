import { combineReducers } from 'redux';

// slices import
import layoutSlice from './slices/layoutSlice';

// services import
import { departmentApi } from './services/department.services';

const reducer = combineReducers({
  layout: layoutSlice,

  // services
  [departmentApi.reducerPath]: departmentApi.reducer,
});

export default reducer;
