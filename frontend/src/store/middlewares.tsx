import { departmentApi } from './services/department.services';

const middlewares = [departmentApi.middleware];

export default middlewares;
