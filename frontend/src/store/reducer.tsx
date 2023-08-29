import { combineReducers } from 'redux';

// slices import
import layoutSlice from './slices/layout.slice';
import menuSlice from './slices/menu.slice';
import authSlice from './slices/auth.slice';

// services import
import { authApi } from './services/auth.services';
import { departmentApi } from './services/department.services';
import { authorityApi } from './services/authority.services';
import { operatorApi } from './services/operator.services';
import { staffApi } from './services/staff.services';
import { designationApi } from './services/designation.services';
import { positionApi } from './services/position.services';
import { roomApi } from './services/room.services';
import { seatApi } from './services/seat.services';
import { degreeApi } from './services/degree.services';
import { studentApi } from './services/student.services';
import { accommodationApi } from './services/accommodation.services';
import { feeApi } from './services/fee.services';
import { dashboardApi } from './services/dashboard.services';

const reducer = combineReducers({
  layout: layoutSlice,
  menu: menuSlice,
  auth: authSlice,

  // services
  [authApi.reducerPath]: authApi.reducer,
  [departmentApi.reducerPath]: departmentApi.reducer,
  [authorityApi.reducerPath]: authorityApi.reducer,
  [operatorApi.reducerPath]: operatorApi.reducer,
  [staffApi.reducerPath]: staffApi.reducer,
  [designationApi.reducerPath]: designationApi.reducer,
  [positionApi.reducerPath]: positionApi.reducer,
  [roomApi.reducerPath]: roomApi.reducer,
  [seatApi.reducerPath]: seatApi.reducer,
  [degreeApi.reducerPath]: degreeApi.reducer,
  [studentApi.reducerPath]: studentApi.reducer,
  [accommodationApi.reducerPath]: accommodationApi.reducer,
  [feeApi.reducerPath]: feeApi.reducer,
  [dashboardApi.reducerPath]: dashboardApi.reducer,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
