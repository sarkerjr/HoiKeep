import { combineReducers } from "redux";

// slices import
import layoutSlice from "./slices/layoutSlice";

// services import
import { departmentApi } from "./services/department.services";
import { authorityApi } from "./services/authority.services";
import { operatorApi } from "./services/operator.services";
import { staffApi } from "./services/staff.services";
import { roomApi } from "./services/room.services";
import { seatApi } from "./services/seat.services";
import { degreeApi } from "./services/degree.services";

const reducer = combineReducers({
  layout: layoutSlice,

  // services
  [departmentApi.reducerPath]: departmentApi.reducer,
  [authorityApi.reducerPath]: authorityApi.reducer,
  [operatorApi.reducerPath]: operatorApi.reducer,
  [staffApi.reducerPath]: staffApi.reducer,
  [roomApi.reducerPath]: roomApi.reducer,
  [seatApi.reducerPath]: seatApi.reducer,
  [degreeApi.reducerPath]: degreeApi.reducer,
});

export default reducer;
