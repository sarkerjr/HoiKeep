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

const middlewares = [
  departmentApi.middleware,
  authorityApi.middleware,
  operatorApi.middleware,
  staffApi.middleware,
  designationApi.middleware,
  positionApi.middleware,
  roomApi.middleware,
  seatApi.middleware,
  degreeApi.middleware,
  studentApi.middleware,
  accommodationApi.middleware,
  feeApi.middleware,
];

export default middlewares;
