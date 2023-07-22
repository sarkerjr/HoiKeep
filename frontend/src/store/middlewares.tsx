import { departmentApi } from "./services/department.services";
import { authorityApi } from "./services/authority.services";
import { operatorApi } from "./services/operator.services";
import { staffApi } from "./services/staff.services";
import { roomApi } from "./services/room.services";
import { seatApi } from "./services/seat.services";
import { degreeApi } from "./services/degree.services";

const middlewares = [
  departmentApi.middleware,
  authorityApi.middleware,
  operatorApi.middleware,
  staffApi.middleware,
  roomApi.middleware,
  seatApi.middleware,
  degreeApi.middleware,
];

export default middlewares;
