import { departmentApi } from "./services/department.services";
import { authorityApi } from "./services/authority.services";
import { operatorApi } from "./services/operator.services";
import { staffApi } from "./services/staff.services";

const middlewares = [
  departmentApi.middleware,
  authorityApi.middleware,
  operatorApi.middleware,
  staffApi.middleware,
];

export default middlewares;
