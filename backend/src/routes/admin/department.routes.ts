import express from 'express';

import {
  createDepartment,
  getDepartments,
  updateDepartment,
} from '@services/admin/department.services';

const router = express.Router();

router.get('/', getDepartments);
router.post('/', createDepartment);
router.put('/', updateDepartment);

export default router;
